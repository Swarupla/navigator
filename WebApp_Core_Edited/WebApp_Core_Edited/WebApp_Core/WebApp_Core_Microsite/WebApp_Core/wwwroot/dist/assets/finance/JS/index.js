$(document).ready(function () {
  $('.flip-wrapper').click(function (e) {
    $(this).find('.card-item').toggleClass('active');
  });
  $('.list-wrapper').click(function (e) {
    $(this).find('.row-item').toggleClass('active');
  });
});
document.title = "VC - Banking";
$(window).scrollTop(0);



let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

const counter_section1 = document.querySelector(
  ".flip-wrapper:nth-child(1) .number-per"
);
const counter_section2 = document.querySelector(
  ".flip-wrapper:nth-child(2) .number-per"
);
const counter_section3 = document.querySelector(
  ".flip-wrapper:nth-child(3) .number-per"
);
const counter_section4 = document.querySelector(
  ".flip-wrapper:nth-child(4) .number-per"
);
const counter_section5 = document.querySelector(
  ".flip-wrapper:nth-child(5) .number-per"
);

const limitcounter1 = parseInt(counter_section1.getAttribute("data-val"));
const limitcounter2 = parseInt(counter_section2.getAttribute("data-val"));
const limitcounter3 = parseInt(counter_section3.getAttribute("data-val"));
const limitcounter4 = parseInt(counter_section4.getAttribute("data-val"));
const limitcounter5 = parseInt(counter_section5.getAttribute("data-val"));

function increaseCounters() {
  if (counter1 < limitcounter1) {
    counter_section1.textContent = counter1 + 1;
    counter1++;
  }

  if (counter2 < limitcounter2) {
    counter_section2.textContent = counter2 + 1;
    counter2++;
  }

  if (counter3 < limitcounter3) {
    counter_section3.textContent = counter3 + 1;
    counter3++;
  }

  if (counter4 < limitcounter4) {
    counter_section4.textContent = counter4 + 1;
    counter4++;
  }
  if (counter5 < limitcounter5) {
    counter_section5.textContent = counter5 + 1;
    counter5++;
  }


  if (
    counter1 >= limitcounter1 &&
    counter2 >= limitcounter2 &&
    counter3 >= limitcounter3 &&
    counter3 >= limitcounter4 &&
    counter3 >= limitcounter5
  ) {
    clearInterval(intervalId);
  }
}

let intervalId;
// main box navigation 
$('.block-wrapper .mainflexclick').click(function () {
  $('.parent-wrapper header').addClass('inactive');
  $('.parent-wrapper .main-header').hide();
  $('.parent-wrapper header .back-button').show();
  $('.screen1-content-inner1').hide();
  let blockatr = $(this).attr('data-link');
  $('.back-button').attr('data-nav', blockatr);
  $('.screen-wrapper').removeClass('active');
  $('.screen-wrapper[data-link=' + blockatr + ']').addClass('active');
  if (blockatr == 'click1') {
    intervalId = setInterval(increaseCounters, 100);
  }
  else if (blockatr == 'click3') {
    setTimeout(() => {
      $('.graph-block').addClass('active');
    }, 4000);
  }
  else {
    clearInterval(intervalId);
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;
    counter5 = 0;
    counter_section1.textContent = 0;
    counter_section2.textContent = 0;
    counter_section3.textContent = 0;
    counter_section4.textContent = 0;
    counter_section5.textContent = 0;
  }
});
$('.screen1-innerclick').click(function () {
  $('.screen1-innerclick').removeClass('active');
  $(this).addClass('active');
  let screen_inner = $(this).attr('data-attr');
  $('.screen1-inner').removeClass('active');
  $('.screen1-inner[data-attr=' + screen_inner + ']').addClass('active');
  if (screen_inner == 'screen1_inner1') {
    $('.impactgenaitabs').addClass('active');
  }
  else {
    $('.impactgenaitabs').removeClass('active');
  }
});
$('.linkback-nav').click(function () {
  let backnavatr = $(this).attr('data-attr');
  $('.clickedbacknavsec').removeClass('active');
  if ((backnavatr == 'linkback_click1_inner1') || (backnavatr == 'linkback_click1_inner3')) {
    $('.screen1-main-wrapper ').addClass('active');
    $('.screen1-main-wrapper .main-containers-wrapper').addClass('active-container');
  }
  $('.linkedcontent[data-val=' + backnavatr + ']').addClass('active');
});
let onboardingval = 2;
$('.onboardingcontent').click(function () {
  // Get the div element
  let myDiv = document.querySelector('.connecting-icon2');

  // Get the computed style of the div
  let computedStyle = window.getComputedStyle(myDiv);

  // Get the opacity value from the computed style
  let opacityValue = computedStyle.getPropertyValue('opacity');

  // Check if the opacity is equal to 1
  if (opacityValue === '1') {
    $('.clicked-grid' + onboardingval + '').addClass('active');
    onboardingval++;
  }
});
let skills_task = 1;
$('.parent-wrapper header .back-button').click(function () {
  $('.impactgenaitabs').addClass('active');
  $('.screen-wrapper').removeClass('active');
  $('.parent-wrapper header').removeClass('inactive');
  $('.parent-wrapper .main-header').show();
  $('.graph-block').removeClass('active');
  $('.child-clickdesc').removeClass('active');
  $('.data-core-childsec').removeClass('active');

  //circle reset
  onboardingval = 2;
  $('.clicked-grid').removeClass('active');
  $('.clicked-grid1').addClass('active');

  //data and ai deep dive reset
  $('.left-wrapper .para-wrapper').removeClass('active');
  $('.left-wrapper .para-wrapper[data-block="1"]').addClass('active');

  $('.panel-right .panel-final').removeClass('active');
  $('.panel-right .panel-final[data-block="1"]').addClass('active');
  // end 

  // flip reset 
  $('.card-item,.row-item').removeClass('active');
  // end 

  // reset counters 
  clearInterval(intervalId);
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0;
  counter5 = 0;
  counter_section1.textContent = 0;
  counter_section2.textContent = 0;
  counter_section3.textContent = 0;
  counter_section4.textContent = 0;
  counter_section5.textContent = 0;
  // lead with value back 
  $('.main-containers-wrapper').addClass('active-container');
  $('.btm-wrapper,.top-sub-wrapper').removeClass('active');
  $('.screen1-innerclick,.screen1-inner').removeClass('active');
  $('span.screen1-innerclick:nth-child(1),.screen1-content-innercont1').addClass('active');
  $('.child-clickdesc').removeClass('animactive');
  $('.screen1-main-wrapper').removeClass('clearpadding');
  // end

  //change and continous reset
  $('.innerscreen-item,.innerscreen-laydesc').removeClass('active');
  $('.innerscreen-item:first-child').addClass('active');
  $('.innerscreen-laydesc[data-val="innerscreen1"]').addClass('active');
  // end 

  //graph reset
  $('.graphtemplate').removeClass('active');
  $('.graphtemplate[data-attr="linegraph"]').addClass('active');
  $('.graphtemplate[data-attr="chartgraph"]').removeClass('activeanimations');
  $(".task-skillprofile-click").removeClass('active');
  $(".task-skillprofile-click").attr("data-action", "Skill Profile");
  skills_task = 1;
  // end 

  //animation reset data core
  $('.data-core-childsec').removeClass('animationelements');
  // end 
  $('.parent-wrapper header .back-button').hide();
  $('.screen1-content-inner1').show();
  $('.screen-wrapper').removeClass('active');

});
$('.top-sub-block-bg').click(function () {
  $(this).closest('.top-sub-wrapper').toggleClass('active');
  $('.btm-wrapper').toggleClass('active');
});
$('.inner-clickthrough').click(function () {
  $('.linkedcontent').removeClass('active')
  $('.main-containers-wrapper').removeClass('active-container');
  let atrclick = $(this).attr('data-attr');
  let tabClick = $(this).attr('data-tab');
  $('.back-button').attr('data-nav', atrclick);
  $('.child-clickdesc').removeClass('active');
  $('.child-clickdesc[data-attr=' + atrclick + ']').addClass('active');
  setTimeout(() => {
    $('.child-clickdesc').addClass('animactive');
  }, 500);
  if (tabClick) {
    $('.tab-selection .inner-tab-click li').removeClass('active');
    $('.tab-selection .tab-content-wrapper .tab-pane').removeClass('active in');
    $('.tab-selection .inner-tab-click li[data-tab =' + tabClick + ']').addClass('active');
    $('.tab-selection .tab-content-wrapper .tab-pane[data-tab =' + tabClick + ']').addClass('active in');
  }
});
$('.inner-clickthrough-data-core').click(function () {
  let atrclick = $(this).attr('data-attr');
  $('.data-core-childsec').removeClass('active');
  $('.data-core-childsec[data-attr=' + atrclick + ']').addClass('active');
  setTimeout(() => {
    $('.data-core-childsec').addClass('animationelements');
  }, 500);
});
$('.screen4-main-wrapper-innercontent1-tabheader-item').click(function () {
  let atrscr = $(this).attr('data-attr');
  $('.screen4-main-wrapper-innercontent1-tabheader-item').removeClass('active');
  $(this).addClass('active');
  $('.content-graph-content-desc,.content-graph-item').removeClass('active')
  $('.content-graph-content-desc[data-attr=' + atrscr + ']').addClass('active');
  $('.content-graph-item[data-attr=' + atrscr + ']').addClass('active');
});
$('.innerscreen-item').click(function () {
  $('.innerscreen-item').removeClass('active');
  $(this).addClass('active');
  let itematr = $(this).attr('data-attr');
  if (itematr == 'innerscreen2') {
    $('.screen-wrapper .headingwrapper h6').html('Harnessing the power of Generative AI to transform the sales process and enhance customer engagement');
    $('.screen5-main-wrapper.screen-wrapper .mainwrap-heading span').html('Investments');
  }
  else if (itematr == 'innerscreen3') {
    $('.screen-wrapper .headingwrapper h6').html('Harnessing the power of Generative AI to transform the sales process and enhance customer engagement');
    $('.screen5-main-wrapper.screen-wrapper .mainwrap-heading span').html('GenAI Economics');
  }
  else {
    $('.screen-wrapper .headingwrapper h6').html('Enhancing Mortgage Loan Fulfillment for Optimized Execution');
    $('.screen5-main-wrapper.screen-wrapper .mainwrap-heading span').html('Business Case');
  }
  $('.innerscreen-laydesc').removeClass('active');
  $('.innerscreen-laydesc[data-val=' + itematr + ']').addClass('active');


});
// toggle tab graphs 
$(".task-skillprofile-click").on("click", function () {
  skills_task++;
  $(this).toggleClass("active");
  $('.graphtemplate').removeClass('active');
  if (skills_task % 2 == 0) {
    $(this).attr("data-action", "Task Profile");
    $('.graphtemplate[data-attr="chartgraph"]').addClass('active');
    setTimeout(() => {
      $('.graphtemplate[data-attr="chartgraph"]').addClass('activeanimations');
    }, 500);
  }
  else {
    $(this).attr("data-action", "Skill Profile");
    $('.graphtemplate[data-attr="linegraph"]').addClass('active');
  }
});
// end 
// card2 inner screen 1 - 1(integrate) (modernize) (enhance) 
$('.para-wrapper').on("click", function () {
  var id = $(this).attr('data-block');
  $('.para-wrapper').removeClass('active');
  $('.panel-final').removeClass('active');
  $('.para-wrapper[data-block=' + id + ']').addClass('active');
  $('.panel-final[data-block=' + id + ']').addClass('active');

})
// end 

// genai wizard 
$('.open-genwizard').click(function () {
  $('.digital-core-screen1').addClass('inactive');
  $('.animatedloading').addClass('activated');
  setTimeout(() => {
    $('#main-screen').addClass('hide');
    let click_id = $(this).attr('data-attr');
    $('.genwizard-section[data-attr=' + click_id + ']').removeClass('hide');
  }, 3000);
});
$('.techarch-back-btn').click(function () {
  $('.digital-core-screen1').removeClass('inactive');
  $('.animatedloading').removeClass('activated');
  $('.genwizard-section').addClass('hide');
  $('#main-screen').removeClass('hide');
  //   let click_id=$(this).attr('data-attr');
  //   $('.genwizard-section[data-attr='+click_id+']').removeClass('hide');
});
$('.icons-display-content').click(function () {
  $(this).toggleClass('active');
  $('.top-wrapper .card-item').toggleClass('active');
  $('.bottom-wrapper .list-wrapper .row-item').toggleClass('active');
});