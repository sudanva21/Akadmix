import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Users, MessageSquare, Mail, LogOut,
  Search, Download, X, ChevronDown, Clock, Eye,
  TrendingUp, UserPlus, Inbox, CalendarDays,
  CheckCircle2, AlertCircle, Phone, BookOpen,
  Filter, RefreshCw, MoreVertical, FileText
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { db } from '../../firebase';
import {
  collection, onSnapshot, query, orderBy, doc, updateDoc, Timestamp
} from 'firebase/firestore';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// ─── Status Badge Component ───
const StatusBadge = ({ status }) => {
  const styles = {
    new: 'bg-electric/15 text-blue-400 border-electric/30',
    read: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
    contacted: 'bg-gold/15 text-yellow-400 border-gold/30',
    enrolled: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${styles[status] || styles.new}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
        status === 'new' ? 'bg-blue-400 animate-pulse' :
        status === 'read' ? 'bg-gray-400' :
        status === 'contacted' ? 'bg-yellow-400' :
        'bg-emerald-400'
      }`} />
      {status}
    </span>
  );
};

// ─── Stat Card Component ───
const StatCard = ({ icon: Icon, label, value, accent, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 relative overflow-hidden group hover:border-white/[0.12] transition-all duration-300"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 ${accent} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl ${accent.replace('bg-', 'bg-').replace('/10', '/10')} border border-white/[0.06] flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white/70" />
        </div>
      </div>
      <p className="text-3xl font-heading font-bold text-white mb-1">{value}</p>
      <p className="text-gray-500 text-sm font-body">{label}</p>
    </div>
  </motion.div>
);

// ─── Detail Modal ───
const DetailModal = ({ item, type, onClose, onStatusUpdate }) => {
  if (!item) return null;

  const formatDate = (ts) => {
    if (!ts) return 'N/A';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    });
  };

  const statusOptions = type === 'newsletter'
    ? []
    : ['new', 'read', 'contacted', 'enrolled'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0D1229] border border-white/[0.08] rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              {type === 'enrollment' ? 'Enrollment Details' :
               type === 'contact' ? 'Message Details' : 'Subscriber Details'}
            </h3>
            <p className="text-gray-500 text-xs font-body mt-1">
              {formatDate(item.submittedAt || item.subscribedAt)}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {type === 'enrollment' && (
            <>
              <DetailField label="Program" value={`${item.programName} (${item.programType})`} accent />
              <div className="grid grid-cols-2 gap-4">
                <DetailField label="Student Name" value={item.studentName} />
                <DetailField label="Parent / Guardian" value={item.parentName} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DetailField label="Phone" value={item.phone} />
                <DetailField label="Email" value={item.email} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DetailField label="Grade" value={item.grade} />
                <DetailField label="Preferred Timing" value={item.preferredTiming || '—'} />
              </div>
              {item.notes && <DetailField label="Additional Notes" value={item.notes} />}
            </>
          )}

          {type === 'contact' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <DetailField label="Name" value={item.name} />
                <DetailField label="Phone" value={item.phone} />
              </div>
              <DetailField label="Email" value={item.email} />
              <DetailField label="Grade / Level" value={item.grade || '—'} />
              <DetailField label="Message" value={item.message} long />
            </>
          )}

          {type === 'newsletter' && (
            <>
              <DetailField label="Email" value={item.email} />
              <DetailField label="Source" value={item.source || 'Website'} />
            </>
          )}

          {/* Status Update */}
          {statusOptions.length > 0 && (
            <div className="pt-4 border-t border-white/[0.06]">
              <p className="text-gray-500 text-xs font-body mb-3 uppercase tracking-wider">Update Status</p>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map(s => (
                  <button
                    key={s}
                    onClick={() => onStatusUpdate(item.id, s, type)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                      item.status === s
                        ? 'bg-electric/20 border-electric/40 text-electric'
                        : 'bg-white/[0.03] border-white/[0.06] text-gray-400 hover:border-white/[0.15] hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const DetailField = ({ label, value, accent, long }) => (
  <div>
    <p className="text-gray-500 text-[11px] font-body uppercase tracking-wider mb-1.5">{label}</p>
    <p className={`font-body text-sm ${accent ? 'text-electric font-semibold' : 'text-gray-200'} ${long ? 'bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 leading-relaxed' : ''}`}>
      {value || '—'}
    </p>
  </div>
);

// ─── Main Dashboard ───
const AdminDashboard = () => {
  const { logout } = useAdmin();
  const [activeTab, setActiveTab] = useState('enrollments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  // Firestore data
  const [enrollments, setEnrollments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Real-time listeners
  useEffect(() => {
    setLoading(true);
    const unsubEnroll = onSnapshot(
      query(collection(db, 'enrollments'), orderBy('submittedAt', 'desc')),
      (snapshot) => {
        setEnrollments(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
      },
      (error) => { console.error('Enrollments listener error:', error); setLoading(false); }
    );

    const unsubContact = onSnapshot(
      query(collection(db, 'contactMessages'), orderBy('submittedAt', 'desc')),
      (snapshot) => {
        setContacts(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
      },
      (error) => console.error('Contacts listener error:', error)
    );

    const unsubNews = onSnapshot(
      query(collection(db, 'newsletterSubscribers'), orderBy('subscribedAt', 'desc')),
      (snapshot) => {
        setSubscribers(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
      },
      (error) => console.error('Newsletter listener error:', error)
    );

    return () => { unsubEnroll(); unsubContact(); unsubNews(); };
  }, []);

  // Status update handler
  const handleStatusUpdate = async (id, newStatus, type) => {
    const collectionName = type === 'enrollment' ? 'enrollments' : 'contactMessages';
    try {
      await updateDoc(doc(db, collectionName, id), { status: newStatus });
      // Update local state for the selected item in the modal
      setSelectedItem(prev => prev && prev.id === id ? { ...prev, status: newStatus } : prev);
    } catch (error) {
      console.error('Status update error:', error);
    }
  };

  // Format timestamp
  const formatDate = (ts) => {
    if (!ts) return '—';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const formatTime = (ts) => {
    if (!ts) return '';
    const date = ts.toDate ? ts.toDate() : new Date(ts);
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  // Search & Filter
  const filteredData = useMemo(() => {
    let data = [];
    if (activeTab === 'enrollments') data = enrollments;
    else if (activeTab === 'contacts') data = contacts;
    else data = subscribers;

    // Status filter
    if (statusFilter !== 'all' && activeTab !== 'subscribers') {
      data = data.filter(item => item.status === statusFilter);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data.filter(item => {
        const searchable = Object.values(item).join(' ').toLowerCase();
        return searchable.includes(q);
      });
    }

    return data;
  }, [activeTab, enrollments, contacts, subscribers, searchQuery, statusFilter]);

  // Stats
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const countToday = (items, field) => {
    return items.filter(item => {
      if (!item[field]) return false;
      const date = item[field].toDate ? item[field].toDate() : new Date(item[field]);
      return date >= todayStart;
    }).length;
  };

  const newCount = (items) => items.filter(i => i.status === 'new').length;

  const todayTotal = countToday(enrollments, 'submittedAt') +
    countToday(contacts, 'submittedAt') +
    countToday(subscribers, 'subscribedAt');

  // PDF Export
  const exportPDF = () => {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // ─── Header ───
    doc.setFillColor(6, 10, 31); // navy bg
    doc.rect(0, 0, pageWidth, 28, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text('Akadmix', 14, 16);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(160, 170, 200);
    const tabTitle = activeTab === 'enrollments' ? 'Enrollment Records'
      : activeTab === 'contacts' ? 'Contact Messages' : 'Newsletter Subscribers';
    doc.text(tabTitle, 14, 23);
    doc.setTextColor(120, 130, 160);
    doc.text(`Generated: ${new Date().toLocaleString('en-IN')}`, pageWidth - 14, 16, { align: 'right' });
    doc.text(`Total Records: ${filteredData.length}`, pageWidth - 14, 23, { align: 'right' });

    // ─── Table ───
    let headers = [];
    let rows = [];

    if (activeTab === 'enrollments') {
      headers = [['#', 'Student Name', 'Parent Name', 'Program', 'Type', 'Phone', 'Email', 'Grade', 'Timing', 'Notes', 'Status', 'Date']];
      rows = filteredData.map((e, i) => [
        i + 1, e.studentName, e.parentName, e.programName, e.programType,
        e.phone, e.email, e.grade, e.preferredTiming || '—', e.notes || '—',
        (e.status || 'new').toUpperCase(), formatDate(e.submittedAt)
      ]);
    } else if (activeTab === 'contacts') {
      headers = [['#', 'Name', 'Email', 'Phone', 'Grade', 'Message', 'Status', 'Date']];
      rows = filteredData.map((c, i) => [
        i + 1, c.name, c.email, c.phone, c.grade || '—', c.message,
        (c.status || 'new').toUpperCase(), formatDate(c.submittedAt)
      ]);
    } else {
      headers = [['#', 'Email', 'Source', 'Subscribed Date']];
      rows = filteredData.map((s, i) => [
        i + 1, s.email, s.source || 'Website', formatDate(s.subscribedAt)
      ]);
    }

    autoTable(doc, {
      head: headers,
      body: rows,
      startY: 34,
      theme: 'grid',
      headStyles: {
        fillColor: [37, 99, 235],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 8,
        halign: 'left',
        cellPadding: 3,
      },
      bodyStyles: {
        fontSize: 7.5,
        textColor: [40, 40, 60],
        cellPadding: 2.5,
      },
      alternateRowStyles: {
        fillColor: [245, 247, 255],
      },
      styles: {
        lineColor: [220, 225, 240],
        lineWidth: 0.2,
        overflow: 'linebreak',
      },
      columnStyles: {
        0: { cellWidth: 8, halign: 'center', fontStyle: 'bold' },
      },
      margin: { left: 14, right: 14 },
      didDrawPage: (data) => {
        // Footer on every page
        const pageNum = doc.internal.getNumberOfPages();
        doc.setFontSize(7);
        doc.setTextColor(150, 150, 170);
        doc.text(
          `Akadmix Admin · Page ${data.pageNumber} of ${pageNum}`,
          pageWidth / 2, pageHeight - 8, { align: 'center' }
        );
      },
    });

    doc.save(`akadmix_${activeTab}_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const tabs = [
    { id: 'enrollments', label: 'Enrollments', icon: UserPlus, count: enrollments.length },
    { id: 'contacts', label: 'Messages', icon: MessageSquare, count: contacts.length },
    { id: 'subscribers', label: 'Newsletter', icon: Mail, count: subscribers.length },
  ];

  return (
    <div className="min-h-screen bg-[#060A1F]">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-electric/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#060A1F]/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-electric/10 border border-electric/20 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-electric" />
            </div>
            <div>
              <h1 className="font-heading text-lg font-bold text-white leading-none">
                Akad<span className="text-electric">mix</span>
              </h1>
              <p className="text-[10px] text-gray-600 font-body uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-gray-500 hover:text-red-400 transition-colors text-sm font-body px-3 py-2 rounded-lg hover:bg-white/[0.03]"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={UserPlus} label="Total Enrollments" value={enrollments.length} accent="bg-electric/10" delay={0} />
          <StatCard icon={MessageSquare} label="Contact Messages" value={contacts.length} accent="bg-purple-500/10" delay={0.1} />
          <StatCard icon={Mail} label="Subscribers" value={subscribers.length} accent="bg-gold/10" delay={0.2} />
          <StatCard icon={CalendarDays} label="Today's Submissions" value={todayTotal} accent="bg-emerald-500/10" delay={0.3} />
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-xl p-1 w-fit">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSearchQuery(''); setStatusFilter('all'); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-heading font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-electric/15 text-electric border border-electric/20'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-electric/20 text-electric' : 'bg-white/[0.06] text-gray-500'
                }`}>{tab.count}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Status Filter (not for newsletter) */}
            {activeTab !== 'subscribers' && (
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white/[0.03] border border-white/[0.06] text-gray-400 text-sm px-3 py-2.5 pr-8 rounded-lg outline-none focus:border-electric/30 font-body cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="contacted">Contacted</option>
                  <option value="enrolled">Enrolled</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            )}

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-600 text-sm pl-9 pr-4 py-2.5 rounded-lg outline-none focus:border-electric/30 w-44 sm:w-56 font-body transition-all duration-200"
              />
            </div>

            {/* Export */}
            <button
              onClick={exportPDF}
              className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/[0.12] px-3 py-2.5 rounded-lg text-sm font-body transition-all duration-200"
              title="Export as PDF"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden md:inline">Export PDF</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-electric/20 border-t-electric rounded-full"
              />
            </div>
          ) : filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-600">
              <Inbox className="w-12 h-12 mb-4 text-gray-700" />
              <p className="font-heading font-medium text-lg text-gray-500">No data found</p>
              <p className="text-sm font-body mt-1">
                {searchQuery ? 'Try a different search term' : 'Submissions will appear here in real-time'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    {activeTab === 'enrollments' && (
                      <>
                        <Th>Student</Th>
                        <Th>Program</Th>
                        <Th className="hidden md:table-cell">Phone</Th>
                        <Th className="hidden lg:table-cell">Grade</Th>
                        <Th>Status</Th>
                        <Th>Date</Th>
                        <Th></Th>
                      </>
                    )}
                    {activeTab === 'contacts' && (
                      <>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th className="hidden md:table-cell">Phone</Th>
                        <Th className="hidden lg:table-cell">Message</Th>
                        <Th>Status</Th>
                        <Th>Date</Th>
                        <Th></Th>
                      </>
                    )}
                    {activeTab === 'subscribers' && (
                      <>
                        <Th>Email</Th>
                        <Th>Source</Th>
                        <Th>Subscribed</Th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, idx) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      onClick={() => { setSelectedItem(item); setSelectedType(activeTab === 'enrollments' ? 'enrollment' : activeTab === 'contacts' ? 'contact' : 'newsletter'); }}
                      className="border-b border-white/[0.03] hover:bg-white/[0.03] cursor-pointer transition-colors group"
                    >
                      {activeTab === 'enrollments' && (
                        <>
                          <Td>
                            <div>
                              <p className="text-white font-medium text-sm">{item.studentName}</p>
                              <p className="text-gray-600 text-xs">{item.email}</p>
                            </div>
                          </Td>
                          <Td>
                            <div>
                              <p className="text-gray-300 text-sm">{item.programName}</p>
                              <p className="text-gray-600 text-xs">{item.programType}</p>
                            </div>
                          </Td>
                          <Td className="hidden md:table-cell"><span className="text-gray-400 text-sm">{item.phone}</span></Td>
                          <Td className="hidden lg:table-cell"><span className="text-gray-400 text-sm">{item.grade}</span></Td>
                          <Td><StatusBadge status={item.status || 'new'} /></Td>
                          <Td>
                            <div>
                              <p className="text-gray-400 text-sm">{formatDate(item.submittedAt)}</p>
                              <p className="text-gray-600 text-xs">{formatTime(item.submittedAt)}</p>
                            </div>
                          </Td>
                          <Td>
                            <Eye className="w-4 h-4 text-gray-700 group-hover:text-electric transition-colors" />
                          </Td>
                        </>
                      )}
                      {activeTab === 'contacts' && (
                        <>
                          <Td>
                            <div>
                              <p className="text-white font-medium text-sm">{item.name}</p>
                              <p className="text-gray-600 text-xs">{item.grade || '—'}</p>
                            </div>
                          </Td>
                          <Td><span className="text-gray-400 text-sm">{item.email}</span></Td>
                          <Td className="hidden md:table-cell"><span className="text-gray-400 text-sm">{item.phone}</span></Td>
                          <Td className="hidden lg:table-cell">
                            <p className="text-gray-500 text-sm truncate max-w-[200px]">{item.message}</p>
                          </Td>
                          <Td><StatusBadge status={item.status || 'new'} /></Td>
                          <Td>
                            <div>
                              <p className="text-gray-400 text-sm">{formatDate(item.submittedAt)}</p>
                              <p className="text-gray-600 text-xs">{formatTime(item.submittedAt)}</p>
                            </div>
                          </Td>
                          <Td>
                            <Eye className="w-4 h-4 text-gray-700 group-hover:text-electric transition-colors" />
                          </Td>
                        </>
                      )}
                      {activeTab === 'subscribers' && (
                        <>
                          <Td><span className="text-gray-300 text-sm">{item.email}</span></Td>
                          <Td><span className="text-gray-500 text-sm">{item.source || 'Website'}</span></Td>
                          <Td>
                            <div>
                              <p className="text-gray-400 text-sm">{formatDate(item.subscribedAt)}</p>
                              <p className="text-gray-600 text-xs">{formatTime(item.subscribedAt)}</p>
                            </div>
                          </Td>
                        </>
                      )}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer */}
          {filteredData.length > 0 && (
            <div className="px-6 py-4 border-t border-white/[0.04] flex items-center justify-between">
              <p className="text-gray-600 text-xs font-body">
                Showing {filteredData.length} {activeTab === 'enrollments' ? 'enrollment' : activeTab === 'contacts' ? 'message' : 'subscriber'}{filteredData.length !== 1 ? 's' : ''}
              </p>
              <p className="text-gray-700 text-xs font-body flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Real-time
              </p>
            </div>
          )}
        </motion.div>

        {/* New submissions indicator */}
        {activeTab === 'enrollments' && newCount(enrollments) > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 text-sm text-blue-400 font-body"
          >
            <span className="w-2 h-2 bg-electric rounded-full animate-pulse" />
            {newCount(enrollments)} new enrollment{newCount(enrollments) !== 1 ? 's' : ''} pending review
          </motion.div>
        )}
        {activeTab === 'contacts' && newCount(contacts) > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 text-sm text-blue-400 font-body"
          >
            <span className="w-2 h-2 bg-electric rounded-full animate-pulse" />
            {newCount(contacts)} new message{newCount(contacts) !== 1 ? 's' : ''} unread
          </motion.div>
        )}
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            type={selectedType}
            onClose={() => { setSelectedItem(null); setSelectedType(null); }}
            onStatusUpdate={handleStatusUpdate}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Table helper components ───
const Th = ({ children, className = '' }) => (
  <th className={`px-6 py-4 text-left text-[11px] font-heading font-semibold text-gray-500 uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

const Td = ({ children, className = '' }) => (
  <td className={`px-6 py-4 ${className}`}>
    {children}
  </td>
);

export default AdminDashboard;
