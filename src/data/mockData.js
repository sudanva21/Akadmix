export const OFFLINE_BATCHES = [
  { id: 'batch-1', group: 'Group 1', range: 'LKG to 1st Standard', subjects: ['Maths', 'English', 'EVS', 'Basics'], timings: '3:00 PM - 5:00 PM', location: 'Main Center, Sector 14' },
  { id: 'batch-2', group: 'Group 2', range: '1st Standard to 5th Standard', subjects: ['Maths', 'English', 'Science', 'Social Studies'], timings: '4:00 PM - 6:30 PM', location: 'Main Center, Sector 14' },
  { id: 'batch-3', group: 'Group 3', range: '6th Standard to 10th Standard', subjects: ['Advanced Maths', 'Physics', 'Chemistry', 'English'], timings: '5:30 PM - 8:00 PM', location: 'Main Center, Sector 14' }
];

export const ONLINE_PROGRAMS = [
  { id: '1on1', title: '1-on-1 Tutoring', points: ['Personalized attention', 'Flexible scheduling', 'Custom tailored curriculum', 'Monthly progress reports'], platform: 'Google Meet / Zoom' },
  { id: 'group', title: 'Group Tutoring', points: ['Interactive group sessions', 'Peer learning', 'Fixed weekly schedule', 'Cost-effective pricing'], platform: 'Google Meet / Spaces' }
];

export const TESTIMONIALS = [
  { quote: "Akadmix completely transformed my daughter's approach to Science. She actually looks forward to her classes now!", name: "Sarah Jenkins", role: "Parent of 8th Grader" },
  { quote: "The 1-on-1 math sessions helped me jump two letter grades before final exams. The tutors are simply brilliant.", name: "Rahul Sharma", role: "10th Standard Student" },
  { quote: "It's rare to find an institution that focuses this heavily on real comprehension instead of rote memorization. Highly recommended.", name: "Dr. Ananya Rao", role: "Parent" },
  { quote: "The Hackathon Prep course pushed me out of my comfort zone and taught me how to code real projects. Amazing experience!", name: "Leo Martinez", role: "9th Standard Student" }
];

export const MATERIALS = [
  { id: 'm1', title: 'Maths Fundamentals Worksheet', category: 'By Subject', grade: 'Grade 5', description: 'Practice sheets covering fractions and decimals.', extension: 'PDF' },
  { id: 'm2', title: 'Science Mechanics Notes', category: 'Competitive Exams', grade: 'Grade 8', description: 'In-depth notes on Newton\'s laws and kinetics.', extension: 'PDF' },
  { id: 'm3', title: 'Hackathon Starter Kit', category: 'Hackathon Prep', grade: 'All Grades', description: 'Essential tools and boilerplates to win your first school hackathon.', extension: 'ZIP' },
  { id: 'm4', title: 'English Grammar Guide', category: 'By Subject', grade: 'Grade 6', description: 'Comprehensive guide covering past, present, and future tenses.', extension: 'PDF' },
  { id: 'm5', title: 'EVS Project Ideas', category: 'By Subject', grade: 'Grade 3', description: 'Creative and eco-friendly project ideas for school assignments.', extension: 'DOC' },
  { id: 'm6', title: 'Coding Basics for Beginners', category: 'Hackathon Prep', grade: 'Grade 7', description: 'Introduction to Python and basic logical reasoning.', extension: 'PDF' },
  { id: 'm7', title: 'History Quick Revision', category: 'By Subject', grade: 'Grade 10', description: 'A summarized timeline of modern history events for board exams.', extension: 'PDF' },
  { id: 'm8', title: 'Olympiad Math Puzzles', category: 'Competitive Exams', grade: 'Grade 4', description: 'Challenging puzzles designed to test critical thinking.', extension: 'PDF' },
  { id: 'm9', title: 'Physics Formula Sheet', category: 'Competitive Exams', grade: 'Grade 10', description: 'A handy cheat sheet containing all necessary formulas.', extension: 'PDF' },
  { id: 'm10', title: 'Literature Essay Examples', category: 'By Subject', grade: 'Grade 9', description: 'High-scoring analytical essays on classic literature pieces.', extension: 'PDF' },
];

export const BLOG_POSTS = [
  {
    id: 'b1',
    slug: 'how-to-choose-the-right-tutor',
    title: 'How to Choose the Right Tutor for Your Child',
    category: 'Parenting',
    excerpt: 'Finding the right fit can be daunting. Here are 5 key traits to look for.',
    author: 'Priya Narayanan',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    gradient: 'from-blue-500 to-indigo-600',
    image: '/images/blog/choosing-tutor.png',
    content: `
## Why the Right Tutor Makes All the Difference

Choosing a tutor for your child is one of the most impactful academic decisions you can make. A great tutor doesn't just drill formulas — they ignite curiosity, build confidence, and create a safe space for learning.

### 1. Look for Subject Mastery, Not Just Credentials

A tutor with a fancy degree but no ability to break down complex topics is not the right fit. Ask potential tutors how they would explain a difficult concept in their subject to a 10-year-old. Their response tells you everything.

### 2. Patience Is Non-Negotiable

Children learn at different speeds. Some grasp algebra in one session, others need three. A good tutor never rushes a student or makes them feel inadequate for needing more time. Watch how the tutor reacts when your child doesn't understand something the first time.

### 3. Structured Plans vs. Winging It

The best tutors come with a lesson plan. They assess your child's current level, identify gaps, and build a roadmap. Ask for a sample 4-week plan before committing. If they can't provide one, look elsewhere.

### 4. Communication With Parents

You should receive regular updates — not just report cards. Weekly progress notes, honest feedback on areas of difficulty, and actionable tips for home practice are hallmarks of a professional tutor.

### 5. Chemistry Matters

At the end of the day, your child needs to feel comfortable with their tutor. Schedule a trial session and observe the dynamic. Does your child open up? Do they ask questions freely? If the rapport isn't there, even the most qualified tutor won't be effective.

### The Akadmix Approach

At Akadmix, every tutor undergoes a rigorous selection process that evaluates subject mastery, teaching methodology, patience, and interpersonal skills. We also offer a free trial session so that you can see the fit before committing.

> "The best tutor is not the one who knows the most, but the one who makes the student want to know more."

---

*Ready to find the right tutor? Explore our programs or speak to an academic counselor today.*
    `
  },
  {
    id: 'b2',
    slug: 'online-vs-offline-learning',
    title: 'Online vs Offline Learning: What Works Best?',
    category: 'Education',
    excerpt: 'We break down the pros and cons of both mediums to help you decide.',
    author: 'Akadmix Editorial',
    date: 'Sep 28, 2026',
    readTime: '6 min read',
    gradient: 'from-purple-500 to-pink-500',
    image: '/images/blog/online-vs-offline.png',
    content: `
## The Great Debate: Digital Classrooms vs. Physical Ones

The pandemic accelerated the adoption of online learning, but now that the world has normalized, parents and students face a genuine choice: stick with online, go back to offline, or find a hybrid balance?

### The Case for Offline Learning

**Social Interaction:** Nothing replaces the energy of a classroom. Peer discussions, group activities, and the subtle art of learning by watching others struggle and succeed together are uniquely offline experiences.

**Structured Environment:** For younger children especially, a physical classroom provides structure. There are fewer distractions than at home (no TV, no siblings, no browsing temptation). The act of "going to class" creates a mental shift into learning mode.

**Hands-on Practice:** Lab experiments, group projects, and whiteboard problem-solving are far more effective in person.

### The Case for Online Learning

**Flexibility:** Online sessions can be scheduled around the student's peak attention hours. Morning person? Schedule at 7 AM. Night owl? 8 PM works too.

**Personalization:** In a 1-on-1 online session, the tutor adapts entirely to the student. There's no pressure to keep pace with a class. Every minute is productive.

**Access to the Best Tutors:** Geography is no longer a barrier. Your child in a small town can learn from a top tutor in a major city without commuting.

**Recorded Sessions:** Most online platforms allow session recordings, which students can revisit during revision.

### Our Recommendation

There's no universal answer. Consider these factors:

- **Age:** Children below Grade 3 generally benefit more from offline interaction.
- **Subject:** STEM subjects with practical components lean offline; language and humanities work well online.
- **Learning Style:** Introverted students often thrive in 1-on-1 online settings.
- **Availability:** If commuting to a center is impractical, online removes that barrier entirely.

### The Akadmix Hybrid Model

We offer both — and we encourage families to mix and match. Attend offline batches for core subjects, supplement with online 1-on-1 sessions for areas where extra focus is needed. It's the best of both worlds.

---

*Not sure which model suits your child? Take our free assessment quiz or book a counseling call.*
    `
  },
  {
    id: 'b3',
    slug: 'top-5-study-habits-grade-10',
    title: 'Top 5 Study Habits for Grade 10 Students',
    category: 'Study Tips',
    excerpt: 'Board exams require strategy. Learn the habits that toppers use daily.',
    author: 'Rohan Gupta',
    date: 'Sep 15, 2026',
    readTime: '4 min read',
    gradient: 'from-orange-400 to-red-500',
    image: '/images/blog/study-habits.png',
    content: `
## Cracking the Board Exam Code

Grade 10 board exams are often a student's first encounter with high-stakes testing. The syllabus is vast, the pressure is real, and the habits you build now will carry through to higher education. Here's what the toppers do differently.

### 1. The Pomodoro Technique 🍅

Study for 25 minutes with intense focus, then take a 5-minute break. After four cycles, take a longer 15-minute break. This technique prevents burnout and keeps your brain sharp.

**Pro Tip:** Use a physical timer, not your phone. Your phone is a distraction machine.

### 2. Active Recall Over Passive Reading

Don't just read your notes. Close the book and try to write down everything you remember. Then check what you missed. This forces your brain to retrieve information actively, which strengthens memory pathways.

### 3. Spaced Repetition

Cramming the night before doesn't work for board exams. Instead, review material at increasing intervals:

- Day 1: Learn the topic
- Day 3: Quick revision
- Day 7: Practice questions
- Day 14: Mock test

This ensures long-term retention.

### 4. Solve Previous Year Papers

Nothing predicts board exam patterns better than previous year question papers. Solve at least 5 years' worth for each subject. Time yourself strictly — it builds exam-day stamina.

### 5. The Power of Teaching

If you can explain a concept to someone else clearly, you truly understand it. Form study groups where each person teaches one topic per session. It's the fastest path to mastery.

### Bonus: Sleep Is Not Optional

Your brain consolidates memories during sleep. Students who sleep 7-8 hours consistently outperform those who pull all-nighters. Protect your sleep schedule fiercely during exam season.

---

*At Akadmix, our Grade 10 students follow a structured board exam preparation plan that incorporates all of these techniques. Join our batch to get guided support.*
    `
  },
  {
    id: 'b4',
    slug: 'how-akadmix-prepares-for-competitive-exams',
    title: 'How Akadmix Prepares Students for Competitive Exams',
    category: 'Methodology',
    excerpt: 'A deep dive into our rigorous and result-oriented curriculum.',
    author: 'Dr. Vivek Sharma',
    date: 'Aug 30, 2026',
    readTime: '8 min read',
    gradient: 'from-emerald-400 to-teal-500',
    image: '/images/blog/competitive-exams.png',
    content: `
## Beyond the Textbook: Our Competitive Exam Philosophy

Competitive exams like Olympiads, NTSE, and scholarship tests require a fundamentally different preparation strategy than school exams. While school exams test recall, competitive exams test application, speed, and lateral thinking.

### Our Three-Phase Approach

#### Phase 1: Foundation Building (Months 1-3)

We start by ensuring the student has absolute conceptual clarity in every topic. No formulas are memorized without understanding the derivation. No theorems are accepted without proof.

- Deep-dive into fundamentals
- Conceptual mapping exercises
- Cross-subject connections

#### Phase 2: Problem Solving & Pattern Recognition (Months 4-6)

Once fundamentals are rock-solid, we shift to intense problem-solving. Students encounter hundreds of problems across difficulty levels. The goal is pattern recognition — the ability to see a new problem and instantly identify which concept family it belongs to.

- Timed problem sets
- Difficulty-graded worksheets
- Error analysis journals

#### Phase 3: Mock Exams & Performance Optimization (Months 7+)

The final phase simulates the real exam environment. Full-length mock tests under strict time limits, followed by detailed performance analytics.

- Weekly full-length mocks
- Detailed error categorization
- Strategy sessions on time management
- Stress management workshops

### What Sets Us Apart

**Small Batch Sizes:** Our competitive exam cohorts are capped at 15 students to ensure individualized attention.

**Expert Faculty:** Every competitive exam tutor at Akadmix has either qualified for or coached qualifiers of national-level exams.

**Comprehensive Material:** We provide custom-designed workbooks, formula sheets, and digital resources — no need to buy expensive external material.

### Real Results

In the last academic year:
- 23 students qualified for state-level Olympiads
- 8 students received NTSE scholarships
- Average score improvement of 40% after our prep program

---

*Want to give your child a competitive edge? Enroll in our exam preparation program today.*
    `
  },
  {
    id: 'b5',
    slug: 'why-group-learning-builds-confidence',
    title: 'Why Group Learning Builds Confidence',
    category: 'Pedagogy',
    excerpt: 'Discover how peer interactions boost morale and public speaking skills.',
    author: 'Anita Desai',
    date: 'Aug 14, 2026',
    readTime: '5 min read',
    gradient: 'from-cyan-400 to-blue-500',
    image: '/images/blog/group-learning.png',
    content: `
## The Hidden Superpower of Learning Together

When people think of tutoring, they often imagine a one-on-one setup — a student and a tutor, heads bowed over a textbook. But there's a growing body of research that shows group learning has unique advantages that individual study simply cannot replicate.

### The Science Behind It

**Social Learning Theory**, proposed by psychologist Albert Bandura, suggests that people learn not just from direct instruction but by observing and interacting with others. In a group setting, students learn from their peers' questions, mistakes, and breakthroughs.

### How Group Learning Builds Confidence

#### 1. Normalizing Struggle

When a student struggles with a concept alone, they often think they're the only one who doesn't get it. In a group, they see that others struggle too. This normalizes the learning process and reduces anxiety.

#### 2. Public Speaking Practice

Group learning naturally creates opportunities for students to explain their thinking out loud. Whether it's presenting a solution or debating an answer, these moments build public speaking confidence that extends far beyond academics.

#### 3. Peer Teaching

When a student explains a concept to a classmate, they reinforce their own understanding while building leadership skills. The student who teaches gains just as much as the one who learns.

#### 4. Healthy Competition

A sprinkle of competition — solving problems fastest, presenting the most creative solution — motivates students to push harder than they would alone. Our group sessions use friendly challenges to keep energy high.

#### 5. Collaboration Skills

The modern workplace runs on collaboration. Students who learn to work in teams, divide problems, and synthesize group insights develop skills that serve them for life.

### The Akadmix Group Dynamic

Our group batches are intentionally designed with 6-12 students per session. This is large enough for diverse discussion but small enough for every voice to be heard. Tutors facilitate rather than lecture, creating an environment where students drive the learning.

---

*Explore our offline group batches and online group tutoring options. Your child might surprise you with how much they shine in a group setting.*
    `
  },
  {
    id: 'b6',
    slug: 'parents-guide-monitoring-academic-progress',
    title: "A Parent's Guide to Monitoring Academic Progress",
    category: 'Parenting',
    excerpt: "How to stay involved in your child's education without micromanaging.",
    author: 'Priya Narayanan',
    date: 'Jul 22, 2026',
    readTime: '6 min read',
    gradient: 'from-fuchsia-500 to-purple-600',
    image: '/images/blog/parent-guide.png',
    content: `
## Involved, Not Intrusive: The Modern Parent's Balancing Act

Every parent wants their child to succeed academically. But there's a fine line between supportive involvement and suffocating micromanagement. Cross it, and you risk damaging your child's motivation and your relationship.

### Signs You Might Be Micromanaging

- You check every homework answer before submission
- You hover during study time
- You compare your child's grades with their friends' openly
- You choose all their subjects and activities without input
- Your child seems stressed around you during study time

If any of these resonate, it's time to recalibrate.

### The Framework: Structure Without Control

#### 1. Set the Environment, Not the Agenda

Create a quiet, well-lit study space. Ensure basic supplies are available. Set a daily routine that includes study time. But let your child decide what to study during that time and in what order.

#### 2. Ask Questions, Don't Interrogate

Instead of "What did you score?", try:
- "What did you learn today that surprised you?"
- "Which subject felt challenging this week?"
- "Is there anything you'd like help with?"

These questions signal interest without pressure.

#### 3. Review Reports Together

When report cards arrive, sit with your child and review together. Celebrate improvements — even small ones. For areas of decline, collaboratively discuss what might have caused the dip and what adjustments could help.

#### 4. Communicate With Teachers Regularly

Don't wait for parent-teacher meetings. A quick email every month to check in shows your child's teacher that you're engaged, and gives them a chance to flag concerns early.

#### 5. Trust the Process

If you've chosen a good school and tutoring support, trust the professionals. Your role is to provide emotional support, stability, and encouragement. Not to become an unpaid teaching assistant.

### How Akadmix Keeps Parents Informed

We provide monthly progress reports, WhatsApp updates after each session, and quarterly parent-tutor meetings. You always know how your child is doing — without needing to hover.

---

*Parenting is a partnership. Let Akadmix handle the academics while you provide the love and encouragement your child needs to thrive.*
    `
  },
  {
    id: 'b7',
    slug: 'hackathon-tips-for-school-students',
    title: 'Hackathon Tips for School Students',
    category: 'Tech',
    excerpt: 'Coding is just half the battle. Here is how to present and win.',
    author: 'Leo T',
    date: 'Jun 10, 2026',
    readTime: '7 min read',
    gradient: 'from-yellow-400 to-orange-500',
    image: '/images/blog/hackathon-tips.svg',
    content: `
## Your First Hackathon: A Survival Guide

Hackathons are intense, exhilarating, and absolutely one of the best learning experiences a student can have. But walking in unprepared can turn excitement into overwhelm fast. Here's everything you need to know.

### Before the Hackathon

#### 1. Build Your Team Wisely

The best hackathon teams have diverse skills. You need:
- A **coder** who can build quickly
- A **designer** who makes things look good
- A **presenter** who can pitch confidently
- A **domain expert** who understands the problem space

Don't team up with four coders. You'll build something functional but ugly, and struggle to explain why it matters.

#### 2. Learn the Basics of Git

You will be collaborating on code. If you don't know basic Git (clone, commit, push, pull, merge), learn it before the event. It will save hours of confusion.

#### 3. Prepare Your Toolkit

Have your development environment set up and tested. Install necessary IDEs, frameworks, and libraries beforehand. Download offline documentation if WiFi might be unreliable.

### During the Hackathon

#### 4. Spend 30% of Time on the Idea

Most teams jump straight into coding. Big mistake. Spend the first hour (or more) deeply understanding the problem, brainstorming solutions, and sketching your approach on paper.

A brilliant idea with mediocre code beats mediocre idea with brilliant code — every time.

#### 5. Build an MVP, Not a Masterpiece

You have limited time. Build the core feature that demonstrates your idea. Skip the login system, skip the landing page, skip the admin dashboard. Focus on the one thing that makes your project unique.

#### 6. Eat and Sleep

Seriously. The all-nighter culture of hackathons is overhyped. A 20-minute power nap and regular meals keep your brain sharp. Exhausted teams make mistakes that cost hours to fix.

### The Presentation

#### 7. Tell a Story

Don't start with "We used React and Firebase and..." Nobody cares about the tech stack in the first 30 seconds. Start with the problem. Make the judges feel the pain point. Then reveal your solution like a plot twist.

#### 8. Demo, Don't Slideshow

Live demos are 10x more compelling than screenshots on slides. If your demo might crash, record a backup video. But always attempt the live demo first.

### After the Hackathon

Win or lose, you've gained:
- Portfolio-worthy projects
- Teamwork experience
- Technical skills under pressure
- Connections with like-minded peers

---

*Our Hackathon Prep program teaches students the full spectrum: coding fundamentals, design thinking, project management, and presentation skills. Join us for the next cohort.*
    `
  },
  {
    id: 'b8',
    slug: 'the-power-of-one-on-one-tutoring',
    title: 'The Power of One-on-One Tutoring',
    category: 'Education',
    excerpt: "How personalized focus can unblock a student's true potential.",
    author: 'Akadmix Editorial',
    date: 'May 05, 2026',
    readTime: '4 min read',
    gradient: 'from-blue-600 to-indigo-800',
    image: '/images/blog/one-on-one.svg',
    content: `
## Why One Student, One Tutor Changes Everything

In a classroom of 30-40 students, each child gets roughly 1-2 minutes of the teacher's individual attention per hour. That's not enough. Not for the student who needs concepts re-explained differently. Not for the advanced student who's bored and unchallenged.

One-on-one tutoring flips this equation entirely.

### The Undivided Attention Advantage

When a tutor works with a single student, every minute is productive. There's no waiting for the class to settle down. No moving on before the student is ready. No holding back because others haven't caught up.

The tutor observes the student's facial expressions, notices hesitation, picks up on confusion before the student even articulates it. This level of attentiveness is impossible in a group setting.

### Customized Learning Pace

Every student has a unique learning curve. Some grasp geometry intuitively but struggle with algebra. Others breeze through grammar but freeze during creative writing. A 1-on-1 tutor designs each session around the student's specific strengths and weaknesses.

**Example:** If a Grade 8 student joins with a weak foundation in fractions (a Grade 5 topic), a classroom teacher can't go back to teach Grade 5 material. A 1-on-1 tutor can — and should.

### Building a Safe Learning Space

Many students are afraid to ask questions in class for fear of judgment. In a private session, there's no such barrier. Students ask freely, make mistakes openly, and develop confidence that eventually transfers to classroom participation too.

### Accountability and Consistency

When it's just you and your tutor, there's no hiding. You can't zone out in the back row. This accountability drives consistent effort, which is the single most important factor in academic improvement.

### Flexibility That Fits Your Life

Online 1-on-1 sessions can be scheduled at times that suit the student. Early mornings, late evenings, weekends — the tutor adapts to the student's calendar, not the other way around.

### Who Should Consider 1-on-1 Tutoring?

- Students with significant learning gaps
- Students preparing for competitive exams
- Students who are shy or introverted
- Students who need help with specific subjects
- Advanced students who need extra challenges

### The Akadmix 1-on-1 Experience

Our online 1-on-1 sessions are 60 minutes each, conducted on Google Meet or Zoom. After each session, parents receive a brief summary of what was covered and what needs home practice. Monthly progress reports track improvement over time.

---

*Book a free trial 1-on-1 session today and experience the Akadmix difference firsthand.*
    `
  }
];

export const TEAM_MEMBERS = [
  { name: 'Arjun Mehta', subject: 'Advanced Mathematics', bio: 'Former software engineer turned passionate math educator with 8+ years experience.', initials: 'AM', color: 'bg-electric' },
  { name: 'Dr. Sneha Patil', subject: 'Physics & Science', bio: 'Holds a Ph.D. in Physics. Expert at making complex concepts simple and relatable.', initials: 'SP', color: 'bg-navy-900' },
  { name: 'David Chen', subject: 'English & Literature', bio: 'Award-winning essayist aiming to foster critical thinking and stellar writing.', initials: 'DC', color: 'bg-charcoal' },
  { name: 'Radhika Iyer', subject: 'Early Education (LKG - 5th)', bio: 'Specialist in childhood cognitive development. Makes learning feel like play.', initials: 'RI', color: 'bg-gold' },
  { name: 'Vikram Singh', subject: 'Coding & Hackathon Prep', bio: 'Tech Lead bringing real-world programming practices into the classroom.', initials: 'VS', color: 'bg-blue-400' }
];
