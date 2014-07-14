'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(this).text("moo");
		$('.jumbotron h1').text("Javascript is connected");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);
}

function submitClick(e){
	e.preventDefault();
	var projName = $("#project").val();
	var projDescription = $("#description").val();
	var newWidth = $("#width").val();

	var description = $(projName).find(".project-description");
    if (description.length == 0) { 
       $(projName).append(projDescription); 
       
    } else { 
       description.html(projDescription);
    }

    $(projName).animate ( {
    	width: newWidth
    }, 1000);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

  	var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
       
    } else { 
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }

    if($(containingProject).find(".project-description").is(":visible"))
    {
    	$(containingProject).find(".project-description").fadeOut();
    }
    else
    {
    	$(containingProject).find(".project-description").fadeIn();
    }
}