// Changes login label from "Email" to "Username"
$(document).ready(function(){
	$('div.description').css('font-size','12pt');
	console.log("Execution for DIV tag");
  if(window.location.pathname.search('login')){
	  if ($('#f1_container').length == 0) {  // not a mobile browser
	    var sp = $('#login_form label[for=pseudonym_session_unique_id]>span');
		sp.text('Username');
	  } else {    // mobile browser
	  	$('input[name="pseudonym_session[unique_id]"]').attr("placeholder", "Username");
	  }
  }
});

// Add on to support Blackboard Ally Accesibility Scanner

window.ALLY_CFG = {
    'baseUrl': 'https://prod.ally.ac',
    'clientId': 4825
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');


// Hide the delete account link on the Profile page

if (window.location.href.indexOf("profile") > 0 || window.location.href.indexOf("about") > 0) {

     $("a:contains('Delete My Account')").hide();

}


// disable links in course settings page
onPage(/\/courses\/\d+\/settings/, function(){ // call onPage function to verify the page is in courses/settings
	hasAnyRole('admin', function (hasRole){ // proceed only if the user's role is admin
		if (hasRole) return;
		$('.reset_course_content_button').remove();
		$('a:contains("Conclude this Course")').remove();
		$('.delete_course_link').remove();
		$('.add_tool_link').remove();
	});
});

onPage(/\/accounts\/\d+\/settings/, function(){ // call onPage function to verify the page is in account/settings
	hasAnyRole('admin', function (hasRole){ // proceed only if the user's role is admin
		if (hasRole) return;
		$('.reset_course_content_button').remove();
		$('a:contains("Conclude this Course")').remove();
		$('.delete_course_link').remove();
	});
});


onPage(/\/courses\//, function(){ // call onPage function to verify the page is in courses
	hasAnyRole('teacher', function (hasRole){

		if (hasRole) // proceed only if the user's role is teacher
		{
			/*$('a.context_external_tool_228').css('visibility','visible');
			$('a.context_external_tool_228').css('color','#cccccc');

			$('a.context_external_tool_231').css('visibility','visible');
			$('a.context_external_tool_231').css('color','#cccccc');

			$('a.context_external_tool_236').css('visibility','visible');
			$('a.context_external_tool_236').css('color','#cccccc');*/

			//Push Grades (Dev) link
			$('a.context_external_tool_224').css('visibility','visible');
			$('a.context_external_tool_224').css('color','#cccccc');

			return;

		}



		//$('a:contains("My Media")').remove();

$('a.context_external_tool_433').css('visibility','hidden');

	});

});
var refe = document.referrer;
var pathArray = window.location.pathname.split( 'courses/' );
if (pathArray[1] != undefined)
{

	var coursePathArray = pathArray[1].split('/');
	var courseCode;
	if (coursePathArray[1] == undefined)
	{
		//alert ("Undefine");
		courseCode = pathArray[1];
	}
	{
		//alert("course code is " + coursePathArray[0]);
			courseCode = coursePathArray[0];
	}

	$('a:contains("Push Grades (Dev)")').attr("href","https://webdev.admin.miamioh.edu/phpapps/gradeSubmission?system=canvas&coursekey="+courseCode);
	$('a:contains("Push Grades (Dev)")').attr("target","_blank");
	$('a:contains("Push Grades (TestServer)")').attr("href","https://webtest.admin.miamioh.edu/phpapps/gradeSubmission?system=canvas&coursekey="+courseCode);
	$('a:contains("Push Grades (TestServer)")').attr("target","_blank");

$('a:contains("Send Grades to Banner")').attr("href","https://www.admin.miamioh.edu/phpapps/gradeSubmission?system=canvas&coursekey="+courseCode);
	$('a:contains("Send Grades to Banner")').attr("target","_blank");
$('a:contains("Publish grades to SIS")').attr("href","http://webdev.admin.miamioh.edu/phpapps/gradeSubmission?system=canvas&coursekey="+courseCode);
	$('a:contains("Publish grades to SIS")').attr("target","_blank");
//if ($("#course_restrict_enrollments_to_course_dates").attr ("checked"))
//{
	//$('label[for= course_restrict_enrollments_to_course_dates]').text('Section dates take priority above dates');
	//$('label[for= course_restrict_enrollments_to_course_dates]').hide();
	//$("#course_restrict_enrollments_to_course_dates").hide();
	//$("#course_start_at").hide();
	//$('label[for=course_start_at]').hide();
	//$("#course_start_at").parents("tr").hide();
	//$("#course_conclude_at").parents("tr").hide();
	$("#course_section_restrict_enrollments_to_section_dates").attr('checked', true);
$("#course_section_restrict_enrollments_to_section_dates").attr('disabled', true);
	//$("#course_section_restrict_enrollments_to_section_dates").parents("tr").hide();
	//$("#course_restrict_enrollments_to_course_dates").parents("tr").hide();
	//$('label[for=course_conclude_at]').hide();
	//document.getElementsByClassName('aside palign')[0].style.display='none';

	//alert("Selct option Selected");*/
//}

}


// check current user's role is same as roles(send from calling function)
function hasAnyRole(/*roles, cb*/){
	var roles = [].slice.call(arguments, 0);

	var cb = roles.pop();
	for (var i = 0; i < arguments.length; i++)
	{
	if (ENV.current_user_roles.indexOf(arguments[i]) !== -1)
		{
			return cb(true);

		}
	}
	return cb(false);
}

function onPage(regex, fn)
{
	if (location.pathname.match(regex)) fn();
}

function waitForElementToLoad(elementID, loopBack){
  setTimeout(function(){
    if($(elementID).length){
      loopBack(elementID, $(elementID));
    }else{
      waitForElementToLoad(elementID, loopBack);
    }
  },500)
}

	 waitForElementToLoad("#assignment_description_ifr",function(){
    console.log("Iframe loaded = "+ $('#assignment_description_ifr').contents().find('#tinymce').length);
    $('#assignment_description_ifr').contents().find('#tinymce').css('font-size','12pt');
    });


//For Badges
$(function() {
  console.log("CANVABADGES: Loaded!");
  // NOTE: if pasting this code into another script, you'll need to manually change the
  // next line. Instead of assigning the value null, you need to assign the value of
  // the Canvabadges domain, i.e. "https://www.canvabadges.org". If you have a custom
  // domain configured then it'll be something like "https://www.canvabadges.org/_my_site"
  // instead.
  var protocol_and_host = "https://www.canvabadges.org/_MiamiOH";
  if(!protocol_and_host) {
    var $scripts = $("script");
    $("script").each(function() {
      var src = $(this).attr('src');
      if(src && src.match(/canvas_profile_badges/)) {
        var splits = src.split(/\//);
        protocol_and_host = splits[0] + "//" + splits[2];
      }
      var prefix = src && src.match(/\?path_prefix=\/(\w+)/);
      if(prefix && prefix[1]) {
        protocol_and_host = protocol_and_host + "/" + prefix[1];
      }
    });
  }
  if(!protocol_and_host) {
    console.log("CANVABADGES: Couldn't find a valid protocol and host. Canvabadges will not appear on profile pages until this is fixed.");
  }
  var match = location.href.match(/\/(users|about)\/(\d+)$/);
  if(match && protocol_and_host) {
    console.log("CANVABADGES: This page shows badges! Loading...");
    var user_id = match[2];
    var domain = location.host;
    var url = protocol_and_host + "/api/v1/badges/public/" + user_id + "/" + encodeURIComponent(domain) + ".json";
console.log("CANVABADGES: Url loaded is: " +url);
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: url,
      success: function(data) {
        console.log("CANVABADGES: Data retrieved!");
        if(data.objects && data.objects.length > 0) {
          console.log("CANVABADGES: Badges found! Adding to the page...");
          var $box = $("<div/>", {style: 'margin-bottom: 20px;'});
          $box.append("<h2 class='border border-b'>Badges</h2>");
          for(idx in data.objects) {
            var badge = data.objects[idx];
            var $badge = $("<div/>", {style: 'float: left;'});
            var link = protocol_and_host + "/badges/criteria/" + badge.config_id + "/" + badge.config_nonce + "?user=" + badge.nonce;
            var $a = $("<a/>", {href: link});
            $a.append($("<img/>", {src: badge.image_url, style: 'width: 72px; height: 72px; padding-right: 10px;'}));
            $badge.append($a);
            $box.append($badge);
          }
          $box.append($("<div/>", {style: 'clear: left'}));
          $("#edit_profile_form,fieldset#courses,.more_user_information + div").after($box);
        } else {
          console.log("CANVABADGES: No badges found for the user: " + user_id + " at " + domain);
        }
      },
      error: function(err) {
        console.log("CANVABADGES: Badges failed to load, API error response");
        console.log(err);
      },
      timeout: 5000
    });
  } else {
    console.log("CANVABADGES: This page doesn't show badges");
  }
});


/* to target specific user
function isUser(id, cb)
{
	cb(ENV.current_user_id == id);
}

isUser(1, function(isRyan){
	if (isRyan)
	{
		// do something
	}
	else
	{
		// so something else
	}
});

*/

/*jslint browser: true, sloppy: false, eqeq: false, vars: false, maxerr: 50, indent: 4, plusplus: true */
/*global $, jQuery, alert, console */
// These tools were designed to facilitate rapid course development in the Canvas LMS
// Copyright (C) 2014 Kenneth Larsen - Center for Innovative Design and Instruction
// Utah State University
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
// http://www.gnu.org/licenses/agpl-3.0.html
///////////////////////////////////
// Kenneth's Custom Canvas Tools //
///////////////////////////////////
// Path to where the canvasCustomTools folder is located

var klToolsPath = "https://mualwebt01.mcs.miamioh.edu/kennethware/",
globalCSSPath = "https://niihka.miamioh.edu/access/content/public/Canvas/miamioh_override.css";
console.log('miamioh_override.css loading ...');
//Parse Course Number - It is stored in the variable "coursenum"//
var coursenum, matches, killspot;
coursenum = null;
matches = location.pathname.match(/\/courses\/(.*)/);
if (matches) {
coursenum = matches[1];
killspot = coursenum.indexOf("/", 0);
if (killspot >= 0) {
coursenum = coursenum.slice(0, killspot);
}
}
(function () {
'use strict';
// Get Current Users Canvas ID
var userID = $(".user_id").text(),
// Comma seperated list of courses to allow custom tools access
// Any user who edits a page in this course will have the tools
courseArray = [
"12345", // Allowed course Canvas ID
"37890", // Another allowed course Canvas ID
"732", //Vijay's test course
"771", // Amy liu's   CP1A
"826" // Amy liu's   CP2A
],
// Comma seperated list of user Canvas ID's to allow custom tools access
// Tools can be used in any course this user edits
userArray = [
//"123", // John Doe
//"456" // Jane Doe
//"275", // Vijay
//"649" // Amy Liu
],
timestamp = +(new Date());
// Only Allow tool access if course or user is one of the arrays above
if ($.inArray(coursenum, courseArray) !== -1 || $.inArray(userID, userArray) !== -1) {
// Identify if editing a wiki-page
setTimeout(function () {
if ($('.new_page').length > 0 || ($('#editor_tabs').length > 0 && $('.edit_link').length === 0)) {
// Include Font-Awesome icons
$("head").append($("<link/>", { rel: "stylesheet", href: "//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"}));
// Load tools js
$.getScript(klToolsPath + "js/tools_variables.js", function () {
console.log("tools_variables loaded");
});
$.getScript(klToolsPath + "js/tools_main.js", function () {
console.log("tools_main loaded");
});
// Spectrum color picker
$.getScript(klToolsPath + "js/spectrum.js", function () {
console.log("spectrum loaded");
});
$("head").append($("<link/>", { rel: "stylesheet", href: klToolsPath + "css/spectrum.css?" + timestamp }));
}
// Live view for tools
if ($('#kl_wrapper').length > 0) {
$.getScript(klToolsPath + "/js/tools_liveView.js", function () {
console.log("tools_liveView.js Loaded.");
});
}
}, 1000);
}
setTimeout(function () {
// Front Page Custom banner image
if ($("#kl_banner_image").length > 0) {
$('head').prepend('<style>#kl_banner_image {background: url(/courses/' + coursenum + '/file_contents/course%20files/global/css/images/homePageBanner.jpg) no-repeat center center; }</style>');
}
if ($("#usu-home-img").length > 0) {
$('head').prepend('<style>#usu-home-img {background: url(/courses/' + coursenum + '/file_contents/course%20files/global/css/images/homePageBanner.jpg) no-repeat center center; }</style>');
}
}, 1000);
// add css for font-awesome if a course is using any of their icons
if ($(".fa").length > 0) {
$("head").append($("<link/>", { rel: "stylesheet", href: "//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css?" + timestamp }));
}
// The following provides the tooltip instructions for updating grade scheme
function getURLParameter(name) {
return decodeURI(
(new RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [null])[1]
);
}
// Step by step instructions for creating grading scheme
(function () {
var task = getURLParameter("task");
if (task === "setGradeScheme") {
console.log('Show how to set grade scheme');
setTimeout(function () {
$(".edit_course_link").get(0).scrollIntoView();
$("#course_details_tabs").tabs("option", "active", 0);
$(".edit_course_link").attr({"data-tooltip": "top", "title": "Click Here"}).trigger('mouseenter').click(function () {
setTimeout(function () {
$(".grading_standard_checkbox").get(0).scrollIntoView();
$(".grading_standard_checkbox").attr({"data-tooltip": "top", "title": "Check this box"}).trigger('mouseenter').change(function () {
setTimeout(function () {
$(".edit_letter_grades_link").attr({"data-tooltip": "top", "title": "Click this link"}).trigger('mouseenter').click(function () {
setTimeout(function () {
$(".edit_grading_standard_link").attr({"data-tooltip": "top", "title": "Click this link if you want to make changes."}).trigger('mouseenter');
$(".display_grading_standard .done_button").attr({"data-tooltip": "top", "title": "When you are finished, click here."}).trigger('mouseenter').click(function () {
$(".edit_letter_grades_link").trigger("mouseout");
$(".edit_grading_standard_link").trigger("mouseout");
setTimeout(function () {
$(".coursesettings .form-actions .btn-primary").get(0).scrollIntoView();
$(".coursesettings .form-actions .btn-primary").attr({"data-tooltip": "top", "title": "<strong>Next Steps:</strong><ol style='text-align:left;'><li>Click this button to save changes.</li><li>Wait for the page to save.</li><li>Close this tab.</li></ol>"}).trigger('mouseenter');
}, 600);
});
}, 600);
});
}, 600);
});
}, 600);
});
}, 1000);
}
}());
}());
