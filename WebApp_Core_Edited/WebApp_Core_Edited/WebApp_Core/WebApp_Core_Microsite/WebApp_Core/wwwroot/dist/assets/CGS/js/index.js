$(document).ready(function () {

  var navdata = [
    {
      "id": "mainscreen1_1",
      "content": "Impact of Gen AI",
      "boxcontent": "1",
      "key": "1",
    },
    {
      "id": "mainscreen1_2",
      "content": "Impact of Gen AI",
      "boxcontent": "2",
      "key": "1",
    },
    {
      "id": "mainscreen1_3",
      "content": "Reinvent Business Capabilities",
      "boxcontent": "3",
      "key": "1",
    },
    {
      "id": "mainscreen2_1",
      "content": "Reference Architecture",
      "boxcontent": "1",
      "key": "2",
    },
    {
      "id": "mainscreen2_2",
      "content": "Data",
      "boxcontent": "2",
      "key": "2",
    },
    {
      "id": "mainscreen2_3",
      "content": "Foundational Model",
      "boxcontent": "3",
      "key": "2",
    },
    {
      "id": "mainscreen3_1",
      "content": "Talent and New ways of Working",
      "boxcontent": "1",
      "key": "3",
    }, {
      "id": "mainscreen4_1",
      "content": "Responsible AI",
      "boxcontent": "1",
      "key": "4",
    },
    {
      "id": "mainscreen4_2",
      "content": "In Action",
      "boxcontent": "2",
      "key": "4",
    },
    {
      "id": "mainscreen4_3",
      "content": "AI Risks for Consumer Goods",
      "boxcontent": "3",
      "key": "4",
    },
    {
      "id": "mainscreen5_1",
      "content": "Value Realisation",
      "boxcontent": "1",
      "key": "5",
    },
  ];


  $('.flip-wrapper').click(function (e) {
    $(this).find('.card-item').toggleClass('active');
  });
  $('.list-wrapper').click(function (e) {
    $(this).find('.row-item').toggleClass('active');
  });

  document.title = "CG&S";
  $(window).scrollTop(0);



  let counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, counter5 = 0, counter6 = 0, counter7 = 0;

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
  const counter_section6 = document.querySelector(
    ".flip-wrapper:nth-child(6) .number-per"
  );
  const counter_section7 = document.querySelector(
    ".flip-wrapper:nth-child(7) .number-per"
  );

  const limitcounter1 = parseInt(counter_section1.getAttribute("data-val"));
  const limitcounter2 = parseInt(counter_section2.getAttribute("data-val"));
  const limitcounter3 = parseInt(counter_section3.getAttribute("data-val"));
  const limitcounter4 = parseInt(counter_section4.getAttribute("data-val"));
  const limitcounter5 = parseInt(counter_section5.getAttribute("data-val"));
  const limitcounter6 = parseInt(counter_section6.getAttribute("data-val"));
  const limitcounter7 = parseInt(counter_section7.getAttribute("data-val"));

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
    if (counter6 < limitcounter6) {
      counter_section6.textContent = counter6 + 1;
      counter6++;
    }
    if (counter7 < limitcounter7) {
      counter_section7.textContent = counter7 + 1;
      counter7++;
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


  let currentIndexLeft = 0;
  $(".navigation-control.left").click(function () {

    let navvalue = $(".screen-wrapper.active").attr('data-value');
    let navContent = navdata.filter((item, index) =>
      item.key === navvalue
    )
    if ($(".screen-wrapper.active .child-screenwrapper:first-child").hasClass('active')) {
      currentIndexLeft = 0;
      $(".parent-wrapper header .back-button").click();
    }
    else if ((currentIndexLeft !== 0) && (currentIndexLeft < navContent.length)) {
      currentIndexLeft--;
      $(".content-nav p").html(navContent[currentIndexLeft].content);
      $('.screen-wrapper.active').children().removeClass('active');
      $('.screen-wrapper.active').children().eq(currentIndexLeft).addClass('active');
    }
    // currentIndexLeft++; //1
    $('.screen1-content-inner5').removeClass('animactive');

    setTimeout(() => {
      $('.screen1-content-inner5').addClass('animactive');
    }, 500);
    $('.panel-final-innerCircle1').removeClass('animationelements');
    setTimeout(() => {
      $('.panel-final-innerCircle1').addClass('animationelements');
    }, 500);


  });
  let currentIndexRight = 0;
  $(".navigation-control.right").click(function () {
    currentIndexRight++;
    currentIndexLeft++
    let navvalue = $(".screen-wrapper.active").attr('data-value');
    let navContent = navdata.filter((item, index) =>
      item.key === navvalue
    )
    if (currentIndexRight < navContent.length) {
      $(".content-nav p").html(navContent[currentIndexRight].content);
      $('.screen-wrapper.active').children().removeClass('active');
      $('.screen-wrapper.active').children().eq(currentIndexRight).addClass('active');
    }
    else {
      currentIndexRight = 0;
      $(".parent-wrapper header .back-button").click();
    }

    $('.screen1-content-inner5').removeClass('animactive');

    setTimeout(() => {
      $('.screen1-content-inner5').addClass('animactive');
    }, 500);
    $('.panel-final-innerCircle1').removeClass('animationelements');
    setTimeout(() => {
      $('.panel-final-innerCircle1').addClass('animationelements');
    }, 500);

  });


  let intervalId;
  // main box navigation 
  $('.block-wrapper .mainflexclick').click(function () {
    $('.parent-wrapper header').addClass('inactive');
    $('.parent-wrapper .main-header').hide();
    $('.parent-wrapper header .back-button').show();
    $(".homescreen-wrapper").removeClass("active");
    $('.screen1-content-inner1').hide();
    let blockatr = $(this).attr('data-link');
    let contentName = $(this).attr('data-value');
    $('.screen-wrapper').removeClass('active');
    $('.screen-wrapper[data-link=' + blockatr + ']').addClass('active');

    let navContent = navdata.filter((item, index) =>
      item.key === contentName
    )
    $(".content-nav p").html(navContent[0].content);

    if (blockatr == 'click1') {
      intervalId = setInterval(increaseCounters, 100);
    }
    else if (blockatr == 'click3') {
      setTimeout(() => {
        $('.graph-block').addClass('active');
      }, 500);
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

    let linkedatr = $(this).attr("data-link");
    //navigation top select
    $(navdata).each(function (index, value) {
      if (navdata[index].id == linkedatr) {
        console.log(navdata[index].content);
        $(".content-nav p").html(navdata[index].content);
      }
    });

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
  $('.clickablearrowcont').click(function () {
    $(this).removeClass('active');
    $('.clickablearrowcont-desc,.right-active-cont').addClass('active');
  });
  $('.clickablearrowcont-desc').click(function () {
    $(this).removeClass('active');
    $('.right-active-cont').removeClass('active');
    $('.clickablearrowcont').addClass('active');
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
    currentIndexRight = 0;
    currentIndexLeft = 0;
    $('.screen-wrapper .child-screenwrapper').removeClass('active');
    $('.screen-wrapper .child-screenwrapper:first-child').addClass('active');
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

  $('.tab-new-click').click(function () {
    let atrclick = $(this).attr('data-attr');
    let tabClick = $(this).attr('data-tab');
    currentIndexRight++;
    currentIndexLeft++;
    $(".content-nav p").html('Impact of Gen AI');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + atrclick + ']').addClass('active');

    $('.tab-selection .inner-tab-click li').removeClass('active');
    $('.tab-selection .tab-content-wrapper .tab-pane').removeClass('active in');
    $('.tab-selection .inner-tab-click li[data-tab =' + tabClick + ']').addClass('active');
    $('.tab-selection .tab-content-wrapper .tab-pane[data-tab =' + tabClick + ']').addClass('active in');
  });

  $('.circle-click-1').click(function () {
    let tempid2 = $(this).attr('data-attr');
    currentIndexRight++;
    currentIndexLeft++;
    $(".content-nav p").html('In Action');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + tempid2 + ']').addClass('active');
  });
  $('.circle-click-2').click(function () {
    let tempid3 = $(this).attr('data-attr');
    currentIndexRight++;
    currentIndexLeft++;
    $(".content-nav p").html('AI Risks for Consumer Goods');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + tempid3 + ']').addClass('active');
  });

  $('.data-click-1').click(function () {
    let tempid4 = $(this).attr('data-attr');
    currentIndexRight++;
    currentIndexLeft++;
    $(".content-nav p").html('Data');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + tempid4 + ']').addClass('active');
  });
  $('.data-click-2').click(function () {
    let tempid5 = $(this).attr('data-attr');
    currentIndexRight++;
    currentIndexLeft++;
    $(".content-nav p").html('Foundational Model');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + tempid5 + ']').addClass('active');
  });


  $('.box-panel-click-1').click(function () {
    let tempid6 = $(this).attr('data-attr');
    currentIndexRight++;
    currentIndexLeft++;
    $(".content-nav p").html('Reinvent Business Capabilities');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + tempid6 + ']').addClass('active');
  });
  $('.box-panel-click-2').click(function () {
    let tempid7 = $(this).attr('data-attr');
    currentIndexRight++;
    currentIndexLeft++;
    $(".content-nav p").html('Reinvent Business Capabilities');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + tempid7 + ']').addClass('active');
  });




  $('.screen1-click1').click(function () {
    currentIndexRight++;
    currentIndexRight++;
    currentIndexLeft++;
    currentIndexLeft++;
    let gettempid = $(this).attr('data-attr');
    $(".content-nav p").html('Reinvent Business Capabilities');
    $('.child-screenwrapper').removeClass('active');
    $('.child-screenwrapper[data-val=' + gettempid + ']').addClass('active');
    setTimeout(() => {
      $('.screen1-content-inner5').addClass('animactive');
    }, 500);
  });

  $('.screen1-click2').click(function () {
    currentIndexRight = 0;
    currentIndexLeft = 0;
    let getscreenid = $(this).attr('data-link');
    $(".content-nav p").html('Value Realisation');
    $('.screen-wrapper .child-screenwrapper').removeClass('active');
    $('.screen-wrapper .child-screenwrapper:nth-child(1)').addClass('active');
    $('.screen-wrapper').removeClass('active');
    $('.screen-wrapper[data-link=' + getscreenid + ']').addClass('active');
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
    $('.content-first-nw').addClass('active');
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

  $("body").click(function (event) {
    if ($(event.target).closest(".body-click-animation").length > 0) {
      $(".grid-container-6.circle-grid .btm-grid-item").addClass("block-show");
    }
  });
  // toggle tab graphs 
  $(".graph-data").on("click", function () {
    skills_task++;

    var attrval = $(this).attr('data-attr');
    $('.graphtemplate').removeClass('active activeanimations');
    $('.graph-data').removeClass('active');
    $('.graphtemplate[data-attr=' + attrval + ']').addClass('active activeanimations');
    $('.graph-data[data-attr=' + attrval + ']').addClass('active');
    // if (skills_task % 2 == 0) {
    //     $(this).attr("data-action", "Task Profile");
    //     $('.graphtemplate[data-attr="chartgraph"]').addClass('active');
    //     setTimeout(() => {
    //       $('.graphtemplate[data-attr="chartgraph"]').addClass('activeanimations');
    //     }, 500);
    // }
    // else {
    //     $(this).attr("data-action", "Skill Profile");
    //     $('.graphtemplate[data-attr="linegraph"]').addClass('active');
    // }
  });

  //search bar 
  const searchIcon = $(".search-icon");
  const searchInput = $(".search-input");
  const clearIcon = $(".clear-icon");
  const searchContainer = $('.search-container');

  searchIcon.click(function () {
    searchContainer.addClass('fullwidth');
    searchInput.removeClass("hidden");
    clearIcon.removeClass("hidden");
    searchInput.focus();
  });

  clearIcon.click(function () {
    searchContainer.removeClass('fullwidth');
    searchInput.val("");
    searchInput.addClass("hidden");
    clearIcon.addClass("hidden");
  });

  //tool tip 
  $('.screen1-content-inner5 .grid-item').click(function () {

    $('.tooltip-text').removeClass('active');
    $(this).children($('.tooltip-text')).addClass('active');
  })

})
