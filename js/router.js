function router(view){
    
    /* Hide All Views */
    sections_about.classList.add("d-none");
    sections_virtualreality.classList.add("d-none");
    sections_tangiblereality.classList.add("d-none");
    
    section_home.classList.add("d-none");
    section_overview.classList.add("d-none");
    section_people.classList.add("d-none");
    section_acknowledgements.classList.add("d-none");
    section_vr_setup.classList.add("d-none");
    section_vr_toolkit.classList.add("d-none");
    section_vr_model.classList.add("d-none");
    section_vr_boundingbox.classList.add("d-none");
    section_vr_loginteractions.classList.add("d-none");
    section_tan_setup.classList.add("d-none");
    section_tan_program.classList.add("d-none");
    section_tan_loginteractions.classList.add("d-none");
    
    switch(view){
        case "about-home":
            sections_about.classList.remove("d-none");
            section_home.classList.remove("d-none");
            break;
        case "about-overview":
            sections_about.classList.remove("d-none");
            section_overview.classList.remove("d-none");
            break;
        case "about-people":
            sections_about.classList.remove("d-none");
            section_people.classList.remove("d-none");
            break;
        case "about-acknowledgements":
            sections_about.classList.remove("d-none");
            section_acknowledgements.classList.remove("d-none");
            break;
        case "virtualreality-setup":
            sections_virtualreality.classList.remove("d-none");
            section_vr_setup.classList.remove("d-none");
            break;
        case "virtualreality-toolkit":
            sections_virtualreality.classList.remove("d-none");
            section_vr_toolkit.classList.remove("d-none");
            break;
        case "virtualreality-model":
            sections_virtualreality.classList.remove("d-none");
            section_vr_model.classList.remove("d-none");
            break;
        case "virtualreality-boundingbox":
            sections_virtualreality.classList.remove("d-none");
            section_vr_boundingbox.classList.remove("d-none");
            break;
        case "virtualreality-loginteractions":
            sections_virtualreality.classList.remove("d-none");
            section_vr_loginteractions.classList.remove("d-none");
            break;
        case "tan-setup":
            sections_tangiblereality.classList.remove("d-none");
            section_tan_setup.classList.remove("d-none");
            break;
        case "tan-program":
            sections_tangiblereality.classList.remove("d-none");
            section_tan_program.classList.remove("d-none");
            break;
        case "tan-loginteractions":
            sections_tangiblereality.classList.remove("d-none");
            section_tan_loginteractions.classList.remove("d-none");
            break;
    }
}