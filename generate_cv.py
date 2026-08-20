import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, HRFlowable

def generate_pdf():
    pdf_path = "/media/sofi/NewVolume/portfolio/public/Kazi_Shofi_Ahmed_CV (1).pdf"
    image_path = "/media/sofi/NewVolume/portfolio/public/shofi_formal.png"

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#0F172A')
    )

    subtitle_style = ParagraphStyle(
        'SubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#2563EB')
    )

    meta_style = ParagraphStyle(
        'MetaText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#475569')
    )

    section_heading = ParagraphStyle(
        'SecHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=colors.HexColor('#0F172A'),
        spaceBefore=8,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#334155')
    )

    bold_body = ParagraphStyle(
        'BoldBody',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#0F172A')
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#334155'),
        leftIndent=10
    )

    story = []

    # Header Table with Formal Image & Contact info
    contact_text = """
    <b>Email:</b> frex19shofi@gmail.com | <b>Phone:</b> +8801830504351<br/>
    <b>LinkedIn:</b> linkedin.com/in/shofi-ahmed-sh351 | <b>GitHub:</b> github.com/shofiahmed69<br/>
    <b>Location:</b> Dhaka, Bangladesh | <b>Portfolio:</b> Live Web App
    """

    header_info = [
        [
            Paragraph("<b>KAZI SHOFI AHMED</b>", title_style),
            Image(image_path, width=70, height=85) if os.path.exists(image_path) else Paragraph("", body_style)
        ],
        [
            Paragraph("FULL-STACK SOFTWARE ENGINEER", subtitle_style),
            ""
        ],
        [
            Paragraph(contact_text, meta_style),
            ""
        ]
    ]

    header_table = Table(header_info, colWidths=[450, 90])
    header_table.setStyle(TableStyle([
        ('SPAN', (1, 0), (1, 2)),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ALIGN', (1, 0), (1, 2), 'RIGHT'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
        ('TOPPADDING', (0, 0), (-1, -1), 1),
    ]))

    story.append(header_table)
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#CBD5E1'), spaceAfter=8))

    # Executive Summary
    story.append(Paragraph("EXECUTIVE SUMMARY", section_heading))
    summary_p = "Results-driven Full-Stack Software Engineer with expertise in building high-performance web applications, scalable backend APIs, and cross-platform mobile products. Multi-time national and international hackathon winner with a proven track record across EdTech, POS systems, and E-Commerce platforms."
    story.append(Paragraph(summary_p, body_style))
    story.append(Spacer(1, 6))

    # Professional Experience
    story.append(Paragraph("WORK EXPERIENCE", section_heading))
    exp_header = Paragraph("<b>ScholarPASS (US EdTech Company)</b> — <i>Full-Stack Developer (Hybrid)</i>", bold_body)
    story.append(exp_header)
    exp_bullets = [
        "• Engineered full-stack features for an educational superapp offering interactive tutoring, test prep, coding programs, and scholarship discovery.",
        "• Developed high-performance REST and NestJS microservices with optimized MongoDB and PostgreSQL database queries.",
        "• Built modern, accessible web interfaces in Next.js and React, improving user onboarding flow and frontend performance.",
        "• Implemented cross-platform mobile capabilities in Flutter for seamless multi-device synchronization."
    ]
    for b in exp_bullets:
        story.append(Paragraph(b, bullet_style))
    story.append(Spacer(1, 6))

    # Featured Live Projects
    story.append(Paragraph("FEATURED LIVE PROJECTS", section_heading))
    
    projects = [
        ("Al-Libas BD E-Commerce Platform", "https://al-libasbd.com/", "React.js, Node.js, Express, MongoDB, Tailwind CSS", "Full-featured apparel e-commerce store with real-time product catalog, shopping cart, and order processing."),
        ("PC Master BD — Online Gadget Shop", "https://www.pcmasterbd.com/", "Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS", "High-performance tech and PC component store with dynamic search, cart management, and online checkout flow."),
        ("ScholarPASS EdTech & Scholarship Platform", "https://scholarpass.org", "Next.js, Node.js, PostgreSQL, Tailwind CSS", "All-in-one educational superapp connecting scholarship discovery with interactive tutoring and test prep."),
        ("Pharmacy Management & POS System", "GitHub: shofiahmed69", "React.js, Express.js, MongoDB, Chart.js", "Enterprise pharmacy management tool handling inventory tracking, digital prescription processing, and sales analytics."),
        ("Restaurant POS & Order System", "GitHub: shofiahmed69", "React.js, Node.js, WebSockets, MySQL", "Real-time restaurant management platform featuring live table tracking, order processing, and receipt generation.")
    ]

    for title, link, stack, desc in projects:
        p_title = Paragraph(f"<b>{title}</b> — <font color='#2563EB'><u>{link}</u></font>", bold_body)
        p_stack = Paragraph(f"<i>Tech Stack:</i> {stack}", meta_style)
        p_desc = Paragraph(f"• {desc}", bullet_style)
        story.append(p_title)
        story.append(p_stack)
        story.append(p_desc)
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 4))

    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills_data = [
        [Paragraph("<b>Frontend:</b>", bold_body), Paragraph("Next.js, React.js, TypeScript, Tailwind CSS, HTML5, CSS3, Framer Motion", body_style)],
        [Paragraph("<b>Backend & DB:</b>", bold_body), Paragraph("Node.js, Express.js, NestJS, MongoDB, PostgreSQL, MySQL, Firebase, REST APIs", body_style)],
        [Paragraph("<b>Mobile:</b>", bold_body), Paragraph("Flutter, Dart (Cross-Platform iOS & Android)", body_style)],
        [Paragraph("<b>Tools & Workflow:</b>", bold_body), Paragraph("Git, GitHub (40+ Public Repositories), VS Code, Cursor, Android Studio", body_style)]
    ]
    skills_table = Table(skills_data, colWidths=[90, 450])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 6))

    # Hackathon Honors & Awards
    story.append(Paragraph("HONORS & HACKATHON AWARDS (8+ PODIUMS)", section_heading))
    awards_list = [
        "🏆 <b>Champion (1st)</b> — Technovation 2025 National Hackathon",
        "🏆 <b>Champion (1st)</b> — Programming Hero Signature National Hackathon",
        "🏆 <b>Champion (1st)</b> — ARC 2.0 AUST Rover Challenge National Hackathon",
        "🥈 <b>Runner-Up (2nd)</b> — IUT Automech 2025 International Hackathon",
        "🥈 <b>Runner-Up (2nd)</b> — AUST CSE Fest Software Exhibition (National)",
        "🥈 <b>Runner-Up (2nd)</b> — 6th ECE Day IST National Project Showcase",
        "🥉 <b>Bronze Winner (3rd)</b> — Innovation Sparks (World Young Scientist Org - International)",
        "🥉 <b>Bronze Winner (3rd)</b> — International Science & Innovation Fair (IYSA - International)"
    ]
    for a in awards_list:
        story.append(Paragraph(a, bullet_style))

    story.append(Spacer(1, 6))

    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(Paragraph("<b>B.Sc. in Software Engineering</b> — Noakhali Science and Technology University (NSTU)", bold_body))
    story.append(Paragraph("Candidate (2023 – 2027) | Coursework: Data Structures, Algorithms, Software Architecture, Database Systems, Web Engineering", body_style))

    doc.build(story)
    print("PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
