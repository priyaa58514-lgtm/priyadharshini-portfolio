import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def build_pdf(output_path):
    # Margins: 0.35 inches (25 points)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=24,
        bottomMargin=24
    )

    styles = getSampleStyleSheet()

    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=22,
        leading=25,
        alignment=TA_CENTER,
        textColor=colors.black
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=colors.black
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=10,
        leading=12,
        alignment=TA_LEFT,
        textTransform='uppercase',
        textColor=colors.black
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=10.5,
        alignment=TA_LEFT,
        textColor=colors.black
    )

    body_justify = ParagraphStyle(
        'BodyJustify',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=10.8,
        alignment=TA_JUSTIFY,
        textColor=colors.black
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=10.5,
        alignment=TA_LEFT,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=colors.black
    )

    bold_text = ParagraphStyle(
        'BoldText',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=8.5,
        leading=10.8,
        textColor=colors.black
    )

    italic_text = ParagraphStyle(
        'ItalicText',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=8.5,
        leading=10.8,
        textColor=colors.black
    )

    right_bold = ParagraphStyle(
        'RightBold',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=8.5,
        leading=10.8,
        alignment=TA_RIGHT,
        textColor=colors.black
    )

    right_italic = ParagraphStyle(
        'RightItalic',
        parent=styles['Normal'],
        fontName='Times-Italic',
        fontSize=8.5,
        leading=10.8,
        alignment=TA_RIGHT,
        textColor=colors.black
    )

    def section_header(title):
        elements = []
        elements.append(Spacer(1, 3))
        elements.append(Paragraph(f"<b>{title}</b>", section_heading_style))
        elements.append(HRFlowable(width="100%", thickness=0.6, color=colors.black, spaceBefore=1, spaceAfter=2))
        return elements

    story = []

    # 1. Header
    story.append(Paragraph("Priyadharshini", name_style))
    story.append(Spacer(1, 3))
    contact_text = (
        "Chennai, Tamil Nadu &nbsp;|&nbsp; 9360656502 &nbsp;|&nbsp; "
        "priyaa58514@gmail.com &nbsp;|&nbsp; GitHub &nbsp;|&nbsp; LinkedIn &nbsp;|&nbsp; Portfolio"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 4))

    # 2. Objective
    story.extend(section_header("OBJECTIVE"))
    obj_text = (
        "Motivated B.Sc. Computer Science with Artificial Intelligence student and aspiring Full Stack Developer "
        "passionate about transforming innovative ideas into impactful digital experiences. Eager to combine web "
        "development skills, AI-driven thinking, and creative problem-solving to build intuitive applications that "
        "address real-world challenges while exploring emerging technologies and continuously growing as a developer."
    )
    story.append(Paragraph(obj_text, body_justify))

    # 3. Education
    story.extend(section_header("EDUCATION"))
    edu_data = [
        [
            Paragraph("<b>Dwaraka Doss Goverdhan Doss Vaishnav College</b>", bold_text),
            Paragraph("<b>2025 – 2028</b>", right_bold)
        ],
        [
            Paragraph("<i>Bachelor of Science in Computer Science with Artificial Intelligence</i>", italic_text),
            Paragraph("<i>Chennai, Tamil Nadu</i>", right_italic)
        ]
    ]
    t_edu = Table(edu_data, colWidths=[380, 160])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_edu)

    # 4. Experience
    story.extend(section_header("EXPERIENCE"))
    exp_data = [
        [
            Paragraph("<b>Interain AI</b>", bold_text),
            Paragraph("<b>Jun 2026 – Jul 2026</b>", right_bold)
        ],
        [
            Paragraph("<i>Data Analyst Intern</i>", italic_text),
            Paragraph("<i>Chennai, Tamil Nadu</i>", right_italic)
        ]
    ]
    t_exp = Table(exp_data, colWidths=[380, 160])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_exp)
    story.append(Spacer(1, 2))

    exp_bullets = [
        "Worked with structured datasets to explore data analysis concepts and identify patterns that improved decision-making insights.",
        "Performed data cleaning and preprocessing tasks, ensuring datasets were consistent, accurate, and analysis-ready.",
        "Assisted in creating clear reports and visual summaries to communicate findings in a structured manner.",
        "Gained exposure to data handling, analytics workflows, and introductory AI-related concepts across multiple domains."
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"&bull;&nbsp;&nbsp;{b}", bullet_style))

    # 5. Technical Skills
    story.extend(section_header("TECHNICAL SKILLS"))
    skills = [
        ("Programming Languages", "Python, SQL, Java"),
        ("Data Structures & Algorithms", "Arrays, Stacks, Queues, Linked Lists, Trees, Searching, Sorting"),
        ("Data Analytics & AI/ML", "Data Analysis, Data Cleaning, Data Visualization, Machine Learning Fundamentals, Artificial Intelligence, Deep Learning Basics"),
        ("Web Development", "HTML, CSS, JavaScript, React.js, Node.js, Express.js, REST APIs, Django"),
        ("Databases & Tools", "MySQL, MySQL Workbench, Jupyter Notebook, Visual Studio Code, IDLE, DrJava, Antigravity IDE"),
        ("Programming Concepts", "Object-Oriented Programming (OOP), Functions, Control Flow, Exception Handling, Loops, Database Queries"),
        ("Soft Skills", "Communication, Problem Solving, Team Collaboration, Leadership, Critical Thinking")
    ]
    for cat, items in skills:
        story.append(Paragraph(f"<b>{cat}:</b> {items}", body_style))
        story.append(Spacer(1, 1))

    # 6. Certifications & Achievements
    story.extend(section_header("CERTIFICATIONS & ACHIEVEMENTS"))
    cert_data_1 = [
        [
            Paragraph("<b>Value-Added Course – Web App Development using Django (50 Hrs)</b> | <i>Futuro Focus</i>", body_style),
            Paragraph("<b>Nov – Dec 2025</b>", right_bold)
        ],
        [
            Paragraph("<b>Special Mention – BuildX 2026 Hackathon (24-Hr Virtual Hackathon)</b> | <i>Vernatech LLP</i>", body_style),
            Paragraph("<b>Jun 2026</b>", right_bold)
        ]
    ]
    t_c1 = Table(cert_data_1, colWidths=[430, 110])
    t_c1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_c1)
    story.append(Paragraph("&bull;&nbsp;&nbsp;Recognized for active participation in a 24-hour hackathon focused on problem-solving and innovation, contributing to ideation and solution development under time constraints.", bullet_style))
    story.append(Spacer(1, 1))

    cert_data_2 = [
        [
            Paragraph("<b>Complete DBMS: ER Modeling, SQL and Concurrency Control</b> | <i>Udemy</i>", body_style),
            Paragraph("<b>Jul 2026</b>", right_bold)
        ],
        [
            Paragraph("<b>Data Analytics Session – Brainstorming Agent Hackforge 2025</b> | <i>Vaishnav College</i>", body_style),
            Paragraph("<b>2025</b>", right_bold)
        ]
    ]
    t_c2 = Table(cert_data_2, colWidths=[430, 110])
    t_c2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_c2)

    # 7. Projects
    story.extend(section_header("PROJECTS"))

    # Project 1: Contact Management System
    story.append(Paragraph("<b>Contact Management System</b> | <i>HTML, CSS, JS, Bootstrap, Django</i>", body_style))
    p1_bullets = [
        "Developed a full-stack web application to manage contacts with complete CRUD (Create, Read, Update, Delete) functionality.",
        "Designed a responsive user interface using HTML, CSS, Bootstrap, and JavaScript for an improved user experience.",
        "Implemented the backend using Django for secure data storage and retrieval.",
        "Added search and structured categorization features for efficient contact management."
    ]
    for b in p1_bullets:
        story.append(Paragraph(f"&bull;&nbsp;&nbsp;{b}", bullet_style))
    story.append(Spacer(1, 2))

    # Project 2: TN Healthcare Scheme Decoder
    story.append(Paragraph("<b>TN Healthcare Scheme Decoder</b> | <i>React, Node.js, Express.js, Groq API, Overpass API</i>", body_style))
    p2_bullets = [
        "Built an AI-powered web application that simplifies Tamil Nadu healthcare schemes into user-friendly information.",
        "Integrated the Groq API for intelligent query processing and response generation.",
        "Used the Overpass API for location-based data enhancement, improving contextual relevance.",
        "Developed a full-stack system using React and Node.js with a responsive UI and smooth navigation via React Router."
    ]
    for b in p2_bullets:
        story.append(Paragraph(f"&bull;&nbsp;&nbsp;{b}", bullet_style))
    story.append(Spacer(1, 2))

    # Project 3: SchemeMatch AI
    story.append(Paragraph("<b>SchemeMatch AI</b> | <i>React, Tailwind CSS, Node.js, Express.js, SQLite, Groq API</i>", body_style))
    p3_bullets = [
        "Proposed an AI-driven scheme-matching system to help marginalized entrepreneurs identify suitable government schemes based on their needs and eligibility.",
        "Designed an explainable, rule-based recommendation approach to improve transparency and user trust.",
        "Planned an AI layer for natural-language interaction and an SQLite database for structured scheme information.",
        "Explored multilingual accessibility and location-based assistance for improved usability."
    ]
    for b in p3_bullets:
        story.append(Paragraph(f"&bull;&nbsp;&nbsp;{b}", bullet_style))

    # Page Break to Page 2
    story.append(PageBreak())

    # Page 2: ACHIEVEMENTS
    story.extend(section_header("ACHIEVEMENTS"))
    ach_data = [
        [
            Paragraph("<b>Special Mention – BuildX 2026 Hackathon (24-Hour Virtual Hackathon)</b> | <i>Vernatech LLP</i>", body_style),
            Paragraph("<b>Jun 2026</b>", right_bold)
        ]
    ]
    t_ach = Table(ach_data, colWidths=[430, 110])
    t_ach.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_ach)
    story.append(Paragraph(
        "&bull;&nbsp;&nbsp;Received Special Mention for developing an innovative AI-powered healthcare solution "
        "at the BuildX 2026 24-Hour Virtual Hackathon, recognized for the project’s creativity, technical implementation, and real-world impact.",
        bullet_style
    ))

    doc.build(story)
    print(f"Resume generated successfully at: {output_path}")

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pub_path = os.path.join(base_dir, 'public', 'assets', 'Priyadharshini_Resume.pdf')
    dist_path = os.path.join(base_dir, 'dist', 'assets', 'Priyadharshini_Resume.pdf')
    build_pdf(pub_path)
    if os.path.exists(os.path.join(base_dir, 'dist', 'assets')):
        build_pdf(dist_path)
