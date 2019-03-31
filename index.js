function collapse(elmt) {
    $(elmt).toggle();
}

function DisplayContact(resume) {
    //Contact Section
    $('#name').html('<h1>' + resume.contact.name + '</h1>');
    $('#number').html(resume.contact.number);
    $('#email').html(resume.contact.email);
    $('#linkedin').html('<a href="' + resume.contact.linkedIn +
        '">' + resume.contact.linkedIn + '</a>');
}

function DisplaySoftSkills(resume) {
    //Soft Skills Section
    var list = "";
    for (let i=0; i<resume.SoftSkills.length; ++i) {
        list += '<li>' + resume.SoftSkills[i] + '</li>';
    }
    $('#SoftSkillsList').html(list);
}

function DisplayTechSkills(resume) {
    //Tech Skills Section
    //Languages
    var list = "";
    var innerlist = "";
    for (let i=0; i<resume.TechnicalSkills.length; ++i) {
        list += '<li><h4>' + resume.TechnicalSkills[i].language + ' : ' +
            resume.TechnicalSkills[i].course + '</h4></li>' + '<ul id="' +
                resume.TechnicalSkills[i].language + '">';
        //Language Experience
        for (let j=0; j<resume.TechnicalSkills[i].examples.length; ++j) {
            innerlist += '<li>' + resume.TechnicalSkills[i].examples[j] + '</li>';
        }
        list += innerlist;
        list += '</ul>';
    }
    $('#TechSkillsList').html(list);
}

function DisplayEducation(resume) {
    //Education Section
    $('#School').html(resume.Education.currentSchool);
    $('#Major').html(resume.Education.major);
    $('#Graduation').html(resume.Education.graduation);
}

function DisplayProjects(resume) {
    //Projects Section
    var list = '';
    for (let i=0; i<resume.Projects.length; ++i) {
    list += '<p>' + resume.Projects[i].project + '<br><a href="' +
            resume.Projects[i].link + '"target="_blank">URL Link</a> <br></p>';
    }
    $('#ProjectsContent').html(list);
}

function DisplayExperience(resume) {
    //Experience Section
    var list = '';
    var innerlist = '';
    for (let i=0; i<resume.Experience.length; ++i) {
        list += '<div onclick="collapse(children[1])"><h4 class="clickable">' + resume.Experience[i].company  + 
                ' - ' + resume.Experience[i].position + ' - Employed: ' + 
                resume.Experience[i].dateRange + '</h4><ul id="' + 
                resume.Experience[i].company + '">';

        //Duties of each job
        for (let j=0; j<resume.Experience[i].duties.length; ++j) {
            innerlist += '<li>' + resume.Experience[i].duties[j] + '</li>';
        }
        list += innerlist
        list += '</div>';
    }
    $('#ExperienceContent').html(list);
}

function displayFromJSON(resume) {
    DisplayContact(resume);
    DisplaySoftSkills(resume);
    DisplayTechSkills(resume);
    DisplayEducation(resume);
    DisplayProjects(resume);
    DisplayExperience(resume);
    
    $('#SoftSkillsHeader').click(function() {$('#SoftSkillsContent').toggle();});
    $('#TechSkillsHeader').click(function() {$('#TechSkillsContent').toggle();});
    $('#EducationHeader').click(function() {$('#EducationContent').toggle();});
    $('#ProjectsHeader').click(function() {$('#ProjectsContent').toggle();});
    $('#ExperienceHeader').click(function() {$('#ExperienceContent').toggle();});
};

//displays JSON on load
var resume;
$(function() {
    $.getJSON('index.json', function(resumeData) {
        resume = resumeData;
        displayFromJSON(resume);
    })
});