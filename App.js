import { useEffect, useMemo, useState } from "react";

const TIERS = {
  bronze: {
    label: "Bronze",
    emoji: "🥉",
    subtitle: "Essential foundations",
    tagline: "Get confident with daily Moodle tasks",
    description:
      "Core skills every teacher at ITM needs. Master these and you will be comfortable navigating, creating content, and managing courses independently.",
    color: {
      main: "#B8734A",
      light: "#FFF5EB",
      mid: "#FDEBD6",
      dark: "#6B3E12",
      border: "#D4956A",
      pill: "#FFF0E0",
    },
    skills: [
      {
        id: "b1",
        title: "Course navigation & settings",
        icon: "⚙️",
        description:
          "Understand the Edwiser dashboard, find your courses, and configure basic settings.",
        why:
          "Before you can teach, you need to find your way around. The Edwiser dashboard is your home base.",
        tips:
          "The Edwiser theme puts a Customise this page button on the dashboard. Use it to pin your most-used courses to the top.",
        steps: [
          {
            action: "Log in to ITM Moodle",
            detail:
              "Navigate to the ITM Moodle URL. After login, you land on the Edwiser dashboard showing your enrolled courses.",
          },
          {
            action: "Open your course",
            detail:
              "Click a course card or use the search bar. Note the left navigation panel with Participants, Grades, and course sections.",
          },
          {
            action: "Access Course Settings",
            detail:
              "Click the gear icon or navigate to Course administration → Edit settings.",
          },
          {
            action: "Set course format",
            detail:
              "Choose Topics format (sections by topic), Weekly (sections by date), or Single Activity. For most ITM courses, Topics works best.",
          },
          {
            action: "Configure visibility and dates",
            detail:
              "Set Course visibility to Show when ready. Set start and end dates to control when the course appears for students.",
          },
          {
            action: "Set up enrolment",
            detail:
              "Under Enrolment methods, enable Self-enrolment and set an enrolment key if needed.",
          },
          {
            action: "Add course image and summary",
            detail:
              "Upload a course image and write a summary. These appear in the course listing and help students find your course.",
          },
        ],
        checkQuestions: [
          "Can you find and edit your course settings without help?",
          "Do you know the difference between Topics and Weekly format?",
          "Can you set an enrolment key for your course?",
        ],
      },
      {
        id: "b2",
        title: "Adding content resources",
        icon: "📄",
        description:
          "Upload files, create pages, add labels, and link to external URLs.",
        why:
          "Students need materials. This is the most fundamental thing you will do in Moodle.",
        tips:
          "Use Pages instead of uploading Word docs whenever possible — they are mobile-friendly, searchable, and accessible.",
        steps: [
          {
            action: "Turn editing on",
            detail:
              "Toggle Edit mode (top-right switch in Edwiser) or click the gear icon and select Turn editing on.",
          },
          {
            action: "Add a File resource",
            detail:
              "In any section, click Add an activity or resource → File. Drag-and-drop your PDF, DOCX, or PPTX into the upload area.",
          },
          {
            action: "Add a Page resource",
            detail:
              "Choose Page. This creates formatted text directly in Moodle. Use for instructions, reading materials, or embedded media.",
          },
          {
            action: "Add a URL resource",
            detail:
              "Choose URL. Paste a link to an external website, YouTube video, or online resource. Set Display to Embed if you want it shown inline.",
          },
          {
            action: "Use Labels for structure",
            detail:
              "A Label is visible text or media placed directly on the course page. Use it for section headings, separators, or brief instructions.",
          },
          {
            action: "Organise with Folders",
            detail:
              "If you have many files for one topic, use a Folder resource rather than listing them individually.",
          },
          {
            action: "Set display options",
            detail:
              "For each resource, check Appearance settings. Choose whether it opens in-page, in a new window, or as a download.",
          },
        ],
        checkQuestions: [
          "Can you upload a PDF and make it visible to students?",
          "Do you know when to use a Page vs a File vs a URL?",
          "Can you add a descriptive Label to organise a topic section?",
        ],
      },
      {
        id: "b3",
        title: "Communication tools",
        icon: "💬",
        description:
          "Use announcements, messaging, and forums to communicate with students.",
        why:
          "Clear communication prevents confusion. Moodle has several channels — know which to use when.",
        tips:
          "Use the Q&A forum type for reflective exercises. Students must commit to their own answer before seeing peers' responses.",
        steps: [
          {
            action: "Find the Announcements forum",
            detail:
              "Every new course auto-creates an Announcements forum. It uses forced-subscription so all enrolled users receive email notifications.",
          },
          {
            action: "Post an announcement",
            detail:
              "Click Announcements → Add discussion topic. Write your subject and message. Students receive it by email within minutes.",
          },
          {
            action: "Send a direct message",
            detail:
              "Go to Participants, click a student name, then Message. Or use the messaging icon in the top navigation bar.",
          },
          {
            action: "Add a discussion Forum",
            detail:
              "Add activity → Forum. Choose type: Standard forum (open discussion), Q&A forum (students must post before seeing others), or Each person posts one discussion.",
          },
          {
            action: "Configure forum settings",
            detail:
              "Set subscription mode (Optional, Forced, Auto, Disabled). Set Read tracking to highlight unread posts.",
          },
          {
            action: "Moderate discussions",
            detail:
              "As teacher, you can edit or delete any post, pin discussions, and lock threads when discussion has concluded.",
          },
        ],
        checkQuestions: [
          "Can you post an announcement that all students will receive by email?",
          "Do you know how to message an individual student?",
          "Can you set up a Q&A forum?",
        ],
      },
      {
        id: "b4",
        title: "Basic assignment setup",
        icon: "📝",
        description:
          "Create assignments where students submit files for grading.",
        why:
          "Assignments are the backbone of assessment in Moodle. A well-configured assignment saves you hours of admin.",
        tips:
          "Always set a 'Remind me to grade by' date. Moodle will send you a notification so nothing falls through the cracks.",
        steps: [
          {
            action: "Add an Assignment activity",
            detail:
              "Add activity → Assignment. Give it a clear name and write detailed instructions in the description.",
          },
          {
            action: "Set submission types",
            detail:
              "Choose File submissions (students upload documents), Online text (they type directly), or both. Set max files and size limits.",
          },
          {
            action: "Configure dates",
            detail:
              "Due date is the deadline shown to students. Cut-off date is the hard stop after which no submissions are accepted.",
          },
          {
            action: "Set feedback types",
            detail:
              "Enable Feedback comments, Annotate PDF (markup directly on their submission), Feedback files (upload a marked copy), or Offline grading worksheet.",
          },
          {
            action: "Configure group submission",
            detail:
              "Under Group submission settings, enable if you want one submission per group.",
          },
          {
            action: "Review submissions",
            detail:
              "Click the assignment → View all submissions. Use the grading table to download, annotate, grade, and provide feedback.",
          },
          {
            action: "Use quick grading",
            detail:
              "In the grading table, enable Quick grading to enter grades and brief feedback directly in the table without opening each submission.",
          },
        ],
        checkQuestions: [
          "Can you create an assignment with a due date and file upload?",
          "Do you know the difference between due date and cut-off date?",
          "Can you use the PDF annotation feature to give feedback?",
        ],
      },
      {
        id: "b5",
        title: "Participant management",
        icon: "👥",
        description:
          "View, filter, and manage enrolled participants and understand roles.",
        why:
          "You need to know who is in your course, what role they have, and how to manage enrolments.",
        tips:
          "Non-editing teacher is perfect for guest lecturers or TAs who need to grade but should not modify your course structure.",
        steps: [
          {
            action: "Open Participants",
            detail:
              "From the course navigation, click Participants. You will see all enrolled users with their roles and last access time.",
          },
          {
            action: "Filter and search",
            detail:
              "Use the dropdown filters: by Role, Enrolment method, Groups, or Status (active or suspended). Use the search box for specific names.",
          },
          {
            action: "Enrol a user manually",
            detail:
              "Click Enrol users, search for the person, select their role (Student, Non-editing teacher, Teacher), and click Enrol.",
          },
          {
            action: "Understand the key roles",
            detail:
              "Teacher has full editing and grading rights. Non-editing teacher can grade but not modify course content. Student can view and submit.",
          },
          {
            action: "Manage enrolments",
            detail:
              "Click the pencil icon next to a user to edit their role or enrolment dates. Click the bin icon to unenrol.",
          },
          {
            action: "Bulk actions",
            detail:
              "Select multiple users with checkboxes to perform bulk operations like sending a message or editing enrolment.",
          },
        ],
        checkQuestions: [
          "Can you view all enrolled students and filter by role?",
          "Do you know how to enrol a colleague as non-editing teacher?",
          "Can you remove a student who enrolled by mistake?",
        ],
      },
      {
        id: "b6",
        title: "Basic gradebook use",
        icon: "📊",
        description:
          "Navigate the Gradebook, understand how grades flow, and export data.",
        why:
          "All graded activities feed into the Gradebook. Learn to read it, check individual students, and export data.",
        tips:
          "The Grader report can be overwhelming in large courses. Use Collapse on activity columns you don't need to see right now.",
        steps: [
          {
            action: "Open the Gradebook",
            detail:
              "From course navigation, click Grades. You land on the Grader report — a spreadsheet showing all students and all graded activities.",
          },
          {
            action: "Read the Grader report",
            detail:
              "Columns are graded activities. Rows are students. The rightmost column shows the course total. Grey cells mean not yet submitted or graded.",
          },
          {
            action: "Check one student's grades",
            detail:
              "Switch to User report (dropdown or tab) and select a student to see all their grades, feedback, and course total in one view.",
          },
          {
            action: "Use Single view for corrections",
            detail:
              "Switch to Single view, select an activity or a user, then override or adjust individual grades.",
          },
          {
            action: "Export grades",
            detail:
              "Go to Grades → Export and choose Excel or CSV. Select which activities to include and download.",
          },
          {
            action: "Understand aggregation",
            detail:
              "By default, the course total is the sum of all activity grades. You can change this at Silver level to weighted mean or other methods.",
          },
        ],
        checkQuestions: [
          "Can you find and read the Grader report?",
          "Can you check one student's grades across all activities?",
          "Can you export grades to Excel?",
        ],
      },
    ],
  },

  silver: {
    label: "Silver",
    emoji: "🥈",
    subtitle: "Active learning design",
    tagline: "Design courses that engage, not just deliver",
    description:
      "Move beyond content delivery. Structure interactive, well-paced courses that guide students through meaningful learning activities with feedback loops.",
    color: {
      main: "#5B5EA6",
      light: "#F5F5FF",
      mid: "#EAEAF8",
      dark: "#1E1E5A",
      border: "#9999CC",
      pill: "#EFEFFA",
    },
    skills: [
      {
        id: "s1",
        title: "Quiz design & question bank",
        icon: "❓",
        description:
          "Build quizzes with varied question types, manage a question bank, and configure quiz behaviour.",
        why:
          "Quizzes are not just for testing — they are one of the most powerful tools for active recall and formative assessment.",
        tips:
          "Random questions from a large bank mean each student gets a different quiz. Aim for 3× more questions than quiz slots.",
        steps: [
          {
            action: "Create a Quiz activity",
            detail:
              "Add activity → Quiz. Name it clearly, e.g. 'Week 3 Self-assessment quiz'.",
          },
          {
            action: "Configure quiz settings",
            detail:
              "Set time limit, number of attempts (unlimited for formative, 1 for summative), grading method (highest, average, first, last attempt).",
          },
          {
            action: "Open the Question Bank",
            detail:
              "Go to Question bank from course nav or via the quiz. Create categories to organise questions by topic or week.",
          },
          {
            action: "Create varied question types",
            detail:
              "Master these types: Multiple choice, True/False, Short answer, Matching, Essay, Drag-and-drop, Cloze (embedded answers).",
          },
          {
            action: "Add questions to the quiz",
            detail:
              "Edit quiz → Add. Choose from bank, add a random question (pulls randomly from a category), or create new.",
          },
          {
            action: "Set review options",
            detail:
              "Configure what students see after each attempt: their responses, correct answers, general feedback, specific feedback.",
          },
          {
            action: "Import questions in bulk",
            detail:
              "Question bank → Import. Use GIFT format (plain text) or Aiken format for quick multiple-choice creation.",
          },
          {
            action: "Test your quiz",
            detail:
              "Preview the quiz as a student (switch role or use a test account). Check timing, question display, and feedback.",
          },
        ],
        checkQuestions: [
          "Can you create a quiz with at least 4 different question types?",
          "Do you organise questions into categories in the Question Bank?",
          "Can you configure a quiz for both formative and summative purposes?",
        ],
      },
      {
        id: "s2",
        title: "Activity completion & progress tracking",
        icon: "✅",
        description:
          "Configure activity completion so students and teachers can monitor progress.",
        why:
          "Completion tracking turns a list of resources into a visible learning journey. Students see their progress and you see who is falling behind.",
        tips:
          "Use the Activity completion report weekly to spot students who are falling behind. Early intervention makes a big difference.",
        steps: [
          {
            action: "Enable completion tracking",
            detail:
              "Course settings → Completion tracking → Enable. This unlocks completion conditions on every activity.",
          },
          {
            action: "Set conditions per activity",
            detail:
              "Edit each activity → Activity completion. Choose: Student must view, submit, receive a grade, or receive a passing grade.",
          },
          {
            action: "Choose manual vs automatic",
            detail:
              "Manual means students tick a checkbox. Automatic means Moodle marks it complete based on your conditions. Automatic is more reliable.",
          },
          {
            action: "Add the completion status block",
            detail:
              "Turn editing on → Add a block → Course completion status. This shows students a checklist of their progress.",
          },
          {
            action: "View the completion report",
            detail:
              "Reports → Activity completion. This table shows every student and every tracked activity with green ticks and red crosses.",
          },
          {
            action: "Set course completion",
            detail:
              "Course settings → Course completion. Define: complete all activities, complete specific activities, or achieve a minimum grade.",
          },
        ],
        checkQuestions: [
          "Can you set automatic completion criteria for different activity types?",
          "Can you view which students have completed which activities?",
          "Have you configured overall course completion criteria?",
        ],
      },
      {
        id: "s3",
        title: "Restrict access & learning paths",
        icon: "🔓",
        description:
          "Control when and how students can access activities using restriction rules.",
        why:
          "Learning paths prevent overwhelm and ensure students build knowledge in the right order.",
        tips:
          "Show greyed-out items rather than hiding them. Students are more motivated when they can see what is coming next.",
        steps: [
          {
            action: "Find Restrict access",
            detail:
              "Edit any activity → scroll to Restrict access section → Add restriction.",
          },
          {
            action: "Add a date restriction",
            detail:
              "Choose Date. Set available from and available until. Great for releasing content week by week.",
          },
          {
            action: "Add a completion restriction",
            detail:
              "Choose Activity completion. Select another activity and condition (must be marked complete). This creates sequential paths.",
          },
          {
            action: "Add a grade restriction",
            detail:
              "Choose Grade. Select a graded activity and set a threshold, e.g. Quiz 1 must be 70% or higher.",
          },
          {
            action: "Combine with AND/OR logic",
            detail:
              "Click Add restriction multiple times. Use the restriction set to group conditions with AND (all required) or OR (any one sufficient).",
          },
          {
            action: "Set visibility for locked items",
            detail:
              "The eye icon next to each restriction controls whether locked activities show as greyed-out or are completely hidden.",
          },
          {
            action: "Design a complete pathway",
            detail:
              "Map your course flow: Pre-test → Content → Practice quiz → if pass: Advanced content; if not: Remedial materials → Retry.",
          },
        ],
        checkQuestions: [
          "Can you create a learning path where Activity B unlocks after Activity A?",
          "Can you restrict access based on a minimum grade?",
          "Do you understand the difference between greyed-out and hidden restrictions?",
        ],
      },
      {
        id: "s4",
        title: "Groups & groupings",
        icon: "🏘️",
        description:
          "Organise students into groups for differentiated activities and collaborative work.",
        why:
          "Groups let you run differentiated activities, separate cohorts, or collaborative projects within one course.",
        tips:
          "Groupings are underused but powerful. You can have the same students in different group configurations for different activities.",
        steps: [
          {
            action: "Set the course group mode",
            detail:
              "Course settings → Groups → Group mode. Choose: No groups, Separate groups (cannot see other groups), or Visible groups.",
          },
          {
            action: "Create groups",
            detail:
              "Participants → Groups tab. Click Create group and name it. Then Add/remove members to assign students.",
          },
          {
            action: "Auto-create groups",
            detail:
              "Click Auto-create groups. Choose by number of groups or number of members.",
          },
          {
            action: "Create Groupings",
            detail:
              "A Grouping is a named set of groups. Go to Participants → Groupings tab. Create one, then assign groups to it.",
          },
          {
            action: "Restrict activities by grouping",
            detail:
              "Edit an activity → Restrict access → Grouping. Only students in groups within that grouping can see or access the activity.",
          },
          {
            action: "Use group mode in forums",
            detail:
              "Set a Forum to Separate groups. Each group gets its own private discussion thread.",
          },
          {
            action: "Set up group assignments",
            detail:
              "In an Assignment, enable Group submission settings. One member submits and all members receive the grade.",
          },
        ],
        checkQuestions: [
          "Can you create groups and assign students automatically?",
          "Can you set up a forum with separate group discussions?",
          "Do you know the difference between Groups and Groupings?",
        ],
      },
      {
        id: "s5",
        title: "Rubrics & advanced grading",
        icon: "📐",
        description:
          "Create rubrics and marking guides for criteria-based assessment.",
        why:
          "Rubrics make your expectations transparent and grading consistent, especially with multiple assessors.",
        tips:
          "Share the rubric with students before the assignment is due. It becomes both your grading tool and their study guide.",
        steps: [
          {
            action: "Set grading method to Rubric",
            detail:
              "Edit Assignment → Grade → Grading method → Rubric. Save, then click Define rubric.",
          },
          {
            action: "Build rubric criteria",
            detail:
              "Add rows (criteria) and columns (levels). Write descriptors for each cell. Assign point values to each level.",
          },
          {
            action: "Preview the rubric",
            detail:
              "Click Preview to see how students will view the rubric. Ensure descriptors are clear and unambiguous.",
          },
          {
            action: "Grade with the rubric",
            detail:
              "Open a submission. The rubric appears as a grid. Click the appropriate level for each criterion. Total is calculated automatically.",
          },
          {
            action: "Try a Marking Guide",
            detail:
              "Alternative to rubric: a Marking Guide has criteria with max points and free-text remarks. More flexible, less structured.",
          },
          {
            action: "Set up grade categories",
            detail:
              "Grades → Gradebook setup. Create categories e.g. Assignments 40%, Quizzes 30%, Participation 30%. Set aggregation to Weighted mean.",
          },
          {
            action: "Configure grade display",
            detail:
              "Choose how students see grades: points, percentages, or letter grades. Go to Course grade settings to adjust.",
          },
        ],
        checkQuestions: [
          "Can you create a rubric with at least 3 criteria and 4 levels?",
          "Can you grade a student using the rubric interface?",
          "Do you understand how to set up weighted grade categories?",
        ],
      },
      {
        id: "s6",
        title: "Interactive content (H5P & Lessons)",
        icon: "🎮",
        description:
          "Create interactive learning experiences using H5P and the Lesson activity.",
        why:
          "Interactive content keeps students actively processing information instead of passively reading.",
        tips:
          "H5P Interactive Video is the single highest-impact content type — it turns passive video watching into active learning.",
        steps: [
          {
            action: "Add an H5P activity",
            detail:
              "Add activity → H5P. The built-in editor offers over 40 content types.",
          },
          {
            action: "Create an Interactive Video",
            detail:
              "Upload a video and add questions, pop-up text, or links at specific timestamps. Students must engage to continue.",
          },
          {
            action: "Create a Course Presentation",
            detail:
              "Build a slide deck with embedded quizzes, drag-and-drop, and summary slides.",
          },
          {
            action: "Configure H5P grading",
            detail:
              "In the H5P activity settings, set maximum grade and choose how completion and grading work.",
          },
          {
            action: "Create a Lesson activity",
            detail:
              "Add activity → Lesson. This is a branching content tool with content pages (information) and question pages (test understanding).",
          },
          {
            action: "Build branching paths",
            detail:
              "After each question page, set jump destinations: correct answer → next topic, incorrect → remedial page or repeat.",
          },
          {
            action: "Review Lesson reports",
            detail:
              "View Lesson reports to see which paths students took, where they got stuck, and their scores.",
          },
        ],
        checkQuestions: [
          "Can you create an H5P Interactive Video with embedded questions?",
          "Can you build a Lesson with at least one branching point?",
          "Do you know how H5P scores integrate with the Gradebook?",
        ],
      },
    ],
  },

  gold: {
    label: "Gold",
    emoji: "🥇",
    subtitle: "Advanced course architect",
    tagline: "Design scalable, data-driven learning",
    description:
      "Become a Moodle power user. Design sophisticated, scalable courses using analytics, peer assessment, automation, competencies, and universal design principles.",
    color: {
      main: "#9A7B00",
      light: "#FFFDF0",
      mid: "#FFF6D0",
      dark: "#4A3A00",
      border: "#C9A83A",
      pill: "#FFF8DC",
    },
    skills: [
      {
        id: "g1",
        title: "Learning analytics & reports",
        icon: "📈",
        description:
          "Use Moodle reporting tools to understand engagement and identify at-risk learners.",
        why:
          "Data helps you teach better. Spot struggling students early, find content that isn't working, and make evidence-based improvements.",
        tips:
          "Set a weekly 15-minute routine: check Activity Completion, message the bottom 10% of engaged students.",
        steps: [
          {
            action: "Explore the Reports menu",
            detail:
              "In your course navigation, find Reports. Key reports: Logs, Activity report, Course participation, Activity completion.",
          },
          {
            action: "Use Logs to investigate",
            detail:
              "Logs show every action by every user. Filter by specific student + date range + activity to understand their engagement pattern.",
          },
          {
            action: "Read the Activity report",
            detail:
              "Shows view count and last access for every resource and activity. Low-view items may need better positioning or promotion.",
          },
          {
            action: "Use Course participation",
            detail:
              "Select an activity and action type. Identify students who have or have not viewed or submitted. Great for targeted follow-up.",
          },
          {
            action: "Check Activity completion report",
            detail:
              "Visual grid of all students and tracked activities. Red and green at a glance. Sort by incomplete to find struggling students.",
          },
          {
            action: "Explore predictive analytics",
            detail:
              "If enabled at ITM: Analytics → Students at risk of dropping out uses machine learning on engagement patterns.",
          },
          {
            action: "Act on data",
            detail:
              "Use insights to message disengaged students, restructure underused sections, adjust timing of releases, and add scaffolding where students struggle.",
          },
        ],
        checkQuestions: [
          "Can you identify which students have not accessed a key resource?",
          "Can you use logs to investigate a specific student's activity pattern?",
          "Have you used analytics data to improve your course design?",
        ],
      },
      {
        id: "g2",
        title: "Workshop for peer assessment",
        icon: "🔄",
        description:
          "Set up the Workshop activity for structured peer assessment.",
        why:
          "Peer assessment develops critical thinking and gives students more feedback than any single teacher can provide.",
        tips:
          "Start small: 3 peer reviews per student, simple rubric. Expand complexity once students are comfortable with the process.",
        steps: [
          {
            action: "Add a Workshop activity",
            detail:
              "Add activity → Workshop. This is Moodle's most complex activity with 4 distinct phases.",
          },
          {
            action: "Setup phase",
            detail:
              "Define the assessment form (rubric, accumulative grading, comments, or number of errors). Write instructions for both submission and assessment.",
          },
          {
            action: "Submission phase",
            detail:
              "Students submit their work. Configure max files, late submissions, and self-assessment (yes or no).",
          },
          {
            action: "Allocate reviewers",
            detail:
              "Allocation strategy: Manual (you assign), Random (Moodle assigns), Scheduled (automatic after submission deadline).",
          },
          {
            action: "Assessment phase",
            detail:
              "Students review their peers using your assessment form. They see the rubric and must provide structured feedback.",
          },
          {
            action: "Grading evaluation phase",
            detail:
              "Moodle calculates final grades from peer scores. Students get two grades: one for their submission, one for the quality of their peer reviews.",
          },
          {
            action: "Manage phase transitions",
            detail:
              "Switch phases manually (recommended at first) or set scheduled transitions. You have full control.",
          },
        ],
        checkQuestions: [
          "Can you set up a Workshop with all four phases configured?",
          "Can you allocate peer reviewers and manage the assessment phase?",
          "Do you understand how the dual-grade system works?",
        ],
      },
      {
        id: "g3",
        title: "Backup, restore & templates",
        icon: "💾",
        description:
          "Create reusable course templates, back up courses, and roll over for new cohorts.",
        why:
          "A good template saves hours every semester and ensures consistency across your programme.",
        tips:
          "At ITM, agree on template standards across your programme. Consistent course structure helps students focus on content, not navigation.",
        steps: [
          {
            action: "Create a course backup",
            detail:
              "Course admin → Backup. Choose what to include: activities, blocks, filters. Critical: choose whether to include user data.",
          },
          {
            action: "Restore into a new course",
            detail:
              "In the target empty course: Restore → upload or choose your backup file → select what to restore.",
          },
          {
            action: "Use Import instead of backup",
            detail:
              "Faster for selective copying: Course admin → Import → select source course → choose specific activities to copy across.",
          },
          {
            action: "Build a template",
            detail:
              "Design a fully structured course with placeholder content, standard activities, and consistent formatting. Backup without user data.",
          },
          {
            action: "Reset for a new cohort",
            detail:
              "Course admin → Reset. Choose what to clear: enrolments, submissions, forum posts, completion data. The structure stays intact.",
          },
          {
            action: "Document your template",
            detail:
              "Add a hidden section at the top with a Page called 'Teacher README'. Explain the template structure and how to customise it.",
          },
        ],
        checkQuestions: [
          "Can you back up a course and restore it into a new shell?",
          "Can you selectively import activities from another course?",
          "Have you created a documented course template for your programme?",
        ],
      },
      {
        id: "g4",
        title: "Competency-based education",
        icon: "🎯",
        description:
          "Link course activities to competency frameworks and track student development.",
        why:
          "Linking activities to competencies makes learning outcomes visible and trackable across entire programmes.",
        tips:
          "This is most powerful when your programme has an agreed competency framework. Coordinate with ITM education coordinators.",
        steps: [
          {
            action: "Understand the framework hierarchy",
            detail:
              "Site-level: Competency Frameworks contain Competencies. Course-level: Competencies are linked to activities.",
          },
          {
            action: "Add competencies to your course",
            detail:
              "Course admin → Competencies. Select competencies from an existing framework to add to your course.",
          },
          {
            action: "Link competencies to activities",
            detail:
              "Edit any activity → Competencies section. Select which competencies this activity develops or assesses.",
          },
          {
            action: "Configure completion rules",
            detail:
              "When an activity is completed, Moodle can auto-rate the linked competency. Set the mapping: completion triggers proficient.",
          },
          {
            action: "Review student competency profiles",
            detail:
              "From the course, view competency breakdown per student: which competencies they have demonstrated and which are pending.",
          },
          {
            action: "Learning plans",
            detail:
              "Learning Plans span multiple courses. They map a student journey toward a set of competencies across an entire programme.",
          },
        ],
        checkQuestions: [
          "Can you link an activity to a competency from a framework?",
          "Can you view a student's competency progress?",
          "Do you understand how Learning Plans work across multiple courses?",
        ],
      },
      {
        id: "g5",
        title: "Automated workflows",
        icon: "⚡",
        description:
          "Use scheduling, conditional logic, and notifications to automate routine tasks.",
        why:
          "Automation frees you from repetitive admin so you can focus on teaching and feedback.",
        tips:
          "Build the entire semester timeline before the course starts. Front-load the work and Moodle runs on autopilot.",
        steps: [
          {
            action: "Design self-paced pathways",
            detail:
              "Combine Activity completion + Restrict access to create courses that auto-unlock content as students progress.",
          },
          {
            action: "Schedule content release",
            detail:
              "Use Date restrictions to release content week by week. Prepare everything in advance and let Moodle handle timing.",
          },
          {
            action: "Use timed quiz and forum settings",
            detail:
              "Set quiz open/close times, forum lock dates, and assignment availability windows to manage the course calendar.",
          },
          {
            action: "Configure notification preferences",
            detail:
              "Preferences → Notifications. Set how you receive alerts: assignment submissions, forum posts, quiz attempts.",
          },
          {
            action: "Set group-specific overrides",
            detail:
              "In quizzes and assignments, use Overrides to give specific groups or users different dates, time limits, or attempt limits.",
          },
          {
            action: "Combine tools for complex flows",
            detail:
              "Example: Quiz 1 auto-graded → completion triggers unlock of Module 2 → timed forum opens → closes after 1 week → Assignment 2 becomes available.",
          },
        ],
        checkQuestions: [
          "Can you design a course that progresses automatically based on student actions?",
          "Have you configured timed release of content using date restrictions?",
          "Can you set group-specific overrides for quizzes?",
        ],
      },
      {
        id: "g6",
        title: "Accessibility & universal design",
        icon: "♿",
        description:
          "Ensure your course is accessible following WCAG guidelines and UDL principles.",
        why:
          "Accessible courses are better courses for everyone, not just students with disabilities.",
        tips:
          "Test your course by navigating it using only a keyboard (Tab, Enter, Arrow keys). If you can't reach something, neither can a screen reader user.",
        steps: [
          {
            action: "Use the accessibility checker",
            detail:
              "When editing content in the Atto editor, click the accessibility icon. It checks for missing alt text, heading structure, and contrast issues.",
          },
          {
            action: "Add alt text to all images",
            detail:
              "Every image needs descriptive alt text. If decorative, mark it as such. Screen readers depend on this.",
          },
          {
            action: "Structure with proper headings",
            detail:
              "Use H3, H4, H5 in the editor for structure. Never use bold text as a heading substitute. Headings create a navigable outline.",
          },
          {
            action: "Provide captions and transcripts",
            detail:
              "All videos need captions. Provide text transcripts for audio content. YouTube auto-captions are a start but need editing.",
          },
          {
            action: "Offer multiple formats",
            detail:
              "UDL principle: provide materials in multiple representations — PDF + HTML page + audio recording where feasible.",
          },
          {
            action: "Check colour contrast",
            detail:
              "Any custom HTML or styled content must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).",
          },
          {
            action: "Apply UDL principles broadly",
            detail:
              "Multiple means of engagement (choice, relevance), representation (formats, languages), and action & expression (varied assessment types).",
          },
        ],
        checkQuestions: [
          "Do all images in your course have meaningful alt text?",
          "Is your content structured with proper headings?",
          "Have you provided materials in more than one format?",
        ],
      },
    ],
  },
};

const TABS = [
  { key: "steps", label: "Steps" },
  { key: "check", label: "Self-check" },
  { key: "scribe", label: "Scribe" },
  { key: "tips", label: "Tips" },
];

export default function App() {
  const [tier, setTier] = useState("bronze");
  const [skillId, setSkillId] = useState("b1");
  const [tab, setTab] = useState("steps");
  const [openStep, setOpenStep] = useState(null);
  const [completed, setCompleted] = useState({});
  const [scribeLinks, setScribeLinks] = useState({});
  const [scribeDraft, setScribeDraft] = useState("");
  const [selfChecks, setSelfChecks] = useState({});

  const tierData = TIERS[tier];
  const c = tierData.color;
  const skill = useMemo(
    () => tierData.skills.find((s) => s.id === skillId) || tierData.skills[0],
    [tierData, skillId]
  );
  const isComplete = Boolean(completed[skill.id]);

  useEffect(() => {
    setScribeDraft(scribeLinks[skill.id] || "");
  }, [skill.id, scribeLinks]);

  function selectSkill(id) {
    setSkillId(id);
    setTab("steps");
    setOpenStep(null);
  }

  function selectTier(nextTier) {
    const firstSkill = TIERS[nextTier]?.skills?.[0];
    setTier(nextTier);
    setSkillId(firstSkill?.id || "");
    setTab("steps");
    setOpenStep(null);
  }

  function toggleComplete() {
    setCompleted((prev) => ({
      ...prev,
      [skill.id]: !prev[skill.id],
    }));
  }

  function toggleSelfCheck(questionIndex) {
    setSelfChecks((prev) => {
      const currentSkillChecks = prev[skill.id] || {};
      return {
        ...prev,
        [skill.id]: {
          ...currentSkillChecks,
          [questionIndex]: !currentSkillChecks[questionIndex],
        },
      };
    });
  }

  function saveScribe() {
    const trimmed = scribeDraft.trim();
    if (!trimmed) return;

    setScribeLinks((prev) => ({
      ...prev,
      [skill.id]: trimmed,
    }));
  }

  function removeScribe() {
    setScribeLinks((prev) => {
      const next = { ...prev };
      delete next[skill.id];
      return next;
    });
    setScribeDraft("");
  }

  const totalDone = Object.keys(TIERS).reduce(
    (acc, key) => acc + TIERS[key].skills.filter((s) => completed[s.id]).length,
    0
  );

  const totalAll = Object.keys(TIERS).reduce(
    (acc, key) => acc + TIERS[key].skills.length,
    0
  );

  const overallPct = totalAll ? (totalDone / totalAll) * 100 : 0;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        background: "#F4F5F7",
        overflow: "hidden",
        fontSize: 14,
      }}
    >
      <div
        style={{
          width: 260,
          flexShrink: 0,
          background: "#1C2333",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #2E3952" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#8A9BC0",
              letterSpacing: 1.2,
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            ITM Antwerp
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>
            Moodle Mastery
          </div>
          <div style={{ fontSize: 11, color: "#6B7FA3", marginTop: 2 }}>
            Teacher training pathway
          </div>
        </div>

        <div style={{ padding: "12px 20px", borderBottom: "1px solid #2E3952" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <span style={{ fontSize: 11, color: "#8A9BC0", fontWeight: 500 }}>
              OVERALL PROGRESS
            </span>
            <span style={{ fontSize: 11, color: "#C5CEDF", fontWeight: 600 }}>
              {totalDone}/{totalAll}
            </span>
          </div>
          <div
            style={{
              background: "#2E3952",
              borderRadius: 99,
              height: 5,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${overallPct}%`,
                background: "#4A90D9",
                borderRadius: 99,
                transition: "width 0.3s",
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "8px 0 16px" }}>
          {Object.keys(TIERS).map((key) => {
            const td = TIERS[key];
            const tc = td.color;
            const isActiveTier = tier === key;
            const doneTier = td.skills.filter((s) => completed[s.id]).length;

            return (
              <div key={key}>
                <button
                  onClick={() => selectTier(key)}
                  style={{
                    width: "100%",
                    padding: "9px 20px",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    borderLeft: `3px solid ${isActiveTier ? tc.main : "transparent"}`,
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 16 }}>{td.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 12,
                        color: isActiveTier ? "#FFFFFF" : "#8A9BC0",
                        letterSpacing: 0.3,
                      }}
                    >
                      {td.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 10, color: "#6B7FA3", marginTop: 1 }}>
                      {td.subtitle}
                    </div>
                  </div>
                  <span style={{ fontSize: 10, color: "#6B7FA3", flexShrink: 0 }}>
                    {doneTier}/{td.skills.length}
                  </span>
                </button>

                {isActiveTier &&
                  td.skills.map((s) => {
                    const isActiveSkill = s.id === skillId;
                    const isDone = Boolean(completed[s.id]);

                    return (
                      <button
                        key={s.id}
                        onClick={() => selectSkill(s.id)}
                        style={{
                          width: "100%",
                          padding: "8px 20px 8px 46px",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          background: isActiveSkill ? "#263050" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          transition: "background 0.15s",
                        }}
                      >
                        <span style={{ fontSize: 14, flexShrink: 0 }}>{s.icon}</span>
                        <span
                          style={{
                            flex: 1,
                            fontSize: 12,
                            color: isActiveSkill ? "#FFFFFF" : "#A8B8D8",
                            lineHeight: 1.35,
                            fontWeight: isActiveSkill ? 500 : 400,
                          }}
                        >
                          {s.title}
                        </span>
                        {isDone && (
                          <span
                            style={{
                              flexShrink: 0,
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              background: "#4CAF50",
                              display: "block",
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div
          style={{
            background: "#FFFFFF",
            borderBottom: "1px solid #E2E5ED",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            height: 56,
            flexShrink: 0,
          }}
        >
          <div style={{ fontSize: 11, color: "#9BA3B4", fontWeight: 500 }}>
            {tierData.emoji} {tierData.label}
          </div>
          <div style={{ color: "#CBD0D8", fontSize: 12 }}>/</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1C2333", flex: 1 }}>
            {skill.title}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {isComplete && (
              <span
                style={{
                  background: "#E8F5E9",
                  color: "#2E7D32",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: 99,
                  border: "1px solid #C8E6C9",
                }}
              >
                ✓ Completed
              </span>
            )}

            {Object.keys(TIERS).map((k) => {
              const td = TIERS[k];
              const tc = td.color;
              const d = td.skills.filter((s) => completed[s.id]).length;

              return (
                <div
                  key={k}
                  style={{
                    fontSize: 11,
                    padding: "3px 8px",
                    borderRadius: 99,
                    background: tc.pill,
                    border: `1px solid ${tc.border}50`,
                    color: tc.dark,
                    fontWeight: 500,
                  }}
                >
                  {td.emoji} {d}/{td.skills.length}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          <div
            style={{
              background: c.light,
              border: `1px solid ${c.border}50`,
              borderRadius: 12,
              padding: "18px 22px",
              marginBottom: 20,
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: c.mid,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                flexShrink: 0,
              }}
            >
              {skill.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: c.dark, marginBottom: 4 }}>
                {skill.title}
              </div>
              <div style={{ fontSize: 13, color: "#5A6478", lineHeight: 1.6, marginBottom: 8 }}>
                {skill.description}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: c.dark,
                  lineHeight: 1.6,
                  background: c.pill,
                  borderRadius: 8,
                  padding: "8px 12px",
                  borderLeft: `3px solid ${c.main}`,
                }}
              >
                <strong>Why this matters: </strong>
                {skill.why}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 2,
              borderBottom: "2px solid #E2E5ED",
              marginBottom: 20,
            }}
          >
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{
                  padding: "9px 18px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 500,
                  borderBottom: tab === t.key ? `2px solid ${c.main}` : "2px solid transparent",
                  marginBottom: "-2px",
                  color: tab === t.key ? c.main : "#6B7FA3",
                  background: "transparent",
                  transition: "all 0.15s",
                  borderRadius: "6px 6px 0 0",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "steps" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 680 }}>
              {skill.steps.map((step, i) => {
                const open = openStep === i;

                return (
                  <div
                    key={i}
                    style={{
                      borderRadius: 10,
                      border: `1px solid ${open ? c.border : "#E2E5ED"}`,
                      overflow: "hidden",
                      background: "#FFFFFF",
                      transition: "all 0.15s",
                    }}
                  >
                    <button
                      onClick={() => setOpenStep(open ? null : i)}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "none",
                        cursor: "pointer",
                        background: open ? c.light : "transparent",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          flexShrink: 0,
                          background: open ? c.main : c.mid,
                          color: open ? "#fff" : c.dark,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 600,
                          transition: "all 0.15s",
                        }}
                      >
                        {i + 1}
                      </div>
                      <span
                        style={{
                          flex: 1,
                          fontWeight: 500,
                          color: "#1C2333",
                          fontSize: 14,
                        }}
                      >
                        {step.action}
                      </span>
                      <span
                        style={{
                          color: c.main,
                          fontSize: 14,
                          transform: open ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                      >
                        ▾
                      </span>
                    </button>

                    {open && (
                      <div
                        style={{
                          padding: "4px 16px 14px 54px",
                          fontSize: 13,
                          color: "#5A6478",
                          lineHeight: 1.7,
                        }}
                      >
                        {step.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {tab === "check" && (
            <div style={{ maxWidth: 680 }}>
              <p style={{ fontSize: 13, color: "#6B7FA3", marginBottom: 16 }}>
                Can you confidently answer yes to each of these?
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {skill.checkQuestions.map((q, i) => {
                  const checked = Boolean(selfChecks[skill.id]?.[i]);

                  return (
                    <label
                      key={i}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        background: "#FFFFFF",
                        border: "1px solid #E2E5ED",
                        borderRadius: 10,
                        padding: "12px 16px",
                        cursor: "pointer",
                        fontSize: 14,
                        color: "#1C2333",
                        lineHeight: 1.55,
                        fontWeight: 400,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleSelfCheck(i)}
                        style={{ marginTop: 3, flexShrink: 0, accentColor: c.main }}
                      />
                      {q}
                    </label>
                  );
                })}
              </div>

              <button
                onClick={toggleComplete}
                style={{
                  padding: "10px 22px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  background: isComplete ? "#F4F5F7" : c.main,
                  color: isComplete ? "#6B7FA3" : "#FFFFFF",
                  border: `1px solid ${isComplete ? "#CBD0D8" : c.main}`,
                  transition: "all 0.2s",
                }}
              >
                {isComplete ? "✓ Mark as incomplete" : "Mark skill as complete"}
              </button>
            </div>
          )}

          {tab === "scribe" && (
            <div style={{ maxWidth: 640 }}>
              {scribeLinks[skill.id] ? (
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E5ED",
                    borderRadius: 12,
                    padding: "18px 20px",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#1C2333",
                      marginBottom: 6,
                    }}
                  >
                    📎 Scribe guide linked
                  </div>
                  <a
                    href={scribeLinks[skill.id]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: 13, color: c.main, wordBreak: "break-all" }}
                  >
                    {scribeLinks[skill.id]}
                  </a>
                  <div style={{ marginTop: 12 }}>
                    <button
                      onClick={removeScribe}
                      style={{
                        fontSize: 12,
                        color: "#9BA3B4",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Remove link
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "2px dashed #CBD0D8",
                    borderRadius: 12,
                    padding: "28px 24px",
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>📸</div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 15,
                      color: "#1C2333",
                      marginBottom: 6,
                    }}
                  >
                    Add a Scribe walkthrough
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#6B7FA3",
                      lineHeight: 1.6,
                      maxWidth: 420,
                      margin: "0 auto",
                    }}
                  >
                    Record a Scribe guide using your ITM Moodle instance. Scribe captures each
                    click with a screenshot and auto-generates step-by-step instructions.
                  </div>
                </div>
              )}

              <div
                style={{
                  background: "#F8F9FC",
                  borderRadius: 10,
                  padding: "16px 18px",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#1C2333",
                    marginBottom: 8,
                  }}
                >
                  How to create a Scribe guide
                </div>

                {[
                  "Install the Scribe browser extension from scribehow.com",
                  "Click Start recording and perform the task in ITM Moodle",
                  "Scribe auto-generates the guide with screenshots",
                  "Click Share and copy the embed link or URL",
                  "Paste the Scribe URL below to link it to this skill",
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      marginBottom: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: c.mid,
                        color: c.dark,
                        fontSize: 11,
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </div>
                    <span style={{ fontSize: 13, color: "#5A6478", lineHeight: 1.5 }}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <input
                  value={scribeDraft}
                  onChange={(e) => setScribeDraft(e.target.value)}
                  placeholder="Paste your Scribe link here..."
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 8,
                    fontSize: 13,
                    border: "1px solid #CBD0D8",
                    background: "#FFFFFF",
                    color: "#1C2333",
                    outline: "none",
                  }}
                />
                <button
                  onClick={saveScribe}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 8,
                    background: c.main,
                    color: "#fff",
                    border: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Save link
                </button>
              </div>
            </div>
          )}

          {tab === "tips" && (
            <div style={{ maxWidth: 620 }}>
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 12,
                  border: `1px solid ${c.border}50`,
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: c.main,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                    marginBottom: 10,
                  }}
                >
                  Pro tip
                </div>
                <div style={{ fontSize: 15, color: "#1C2333", lineHeight: 1.75 }}>
                  {skill.tips}
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 32,
              maxWidth: 680,
              paddingTop: 20,
              borderTop: "1px solid #E2E5ED",
            }}
          >
            {(() => {
              const all = tierData.skills;
              const idx = all.findIndex((s) => s.id === skillId);
              const prev = all[idx - 1];
              const next = all[idx + 1];

              return (
                <>
                  {prev ? (
                    <button
                      onClick={() => selectSkill(prev.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "9px 16px",
                        borderRadius: 8,
                        border: "1px solid #E2E5ED",
                        background: "#FFFFFF",
                        cursor: "pointer",
                        fontSize: 13,
                        color: "#1C2333",
                        fontWeight: 500,
                      }}
                    >
                      ← <span>{prev.icon} {prev.title}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {next ? (
                    <button
                      onClick={() => selectSkill(next.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "9px 16px",
                        borderRadius: 8,
                        border: "1px solid #E2E5ED",
                        background: "#FFFFFF",
                        cursor: "pointer",
                        fontSize: 13,
                        color: "#1C2333",
                        fontWeight: 500,
                      }}
                    >
                      <span>{next.icon} {next.title}</span> →
                    </button>
                  ) : (
                    <div />
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}