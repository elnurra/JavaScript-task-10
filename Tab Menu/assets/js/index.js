$(document).ready(function () {
  let showedContent = "";

  $(".tab-header ul li").click(function () {
    let activeTab = $(".active-tab");
    activeTab.removeClass("active-tab");
    $(this).addClass("active-tab");
    // console.log(activeTab);
    showedContent = $(this).attr("data-id");
    // console.log(showedContent);
    console.log($(".tab-content div"));
    $(".tab-content div");
    for (let i = 0; i < $(".tab-content div").length; i++) {
      console.log($(".tab-content div")[i].id);
      if ($(".tab-content div")[i].id === showedContent) {
        $($(".tab-content div")[i]).removeClass("disp-none");
      } else {
        $($(".tab-content div")[i]).addClass("disp-none");
      }
    }
  });
});
