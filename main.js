$("#rstop-btn").click(function () {
  var rstop1 = $("#txt1").val();
  var rstop2 = $("#txt2").val();
  var rstopTotal = ((rstop1 / rstop2) * 100).toFixed(2).concat("%");
  $(".rstop_ans").html(
    '<p class=" text-capitalize alert alert-info mb-0 font-weight-bold">percent - \'' +
      rstopTotal +
      "' </p>"
  );
});
$("#ptors-btn").click(function () {
  var ptors1 = $("#txt3").val();
  var ptors2 = $("#txt4").val();
  var ptorsTotal = (ptors1 * ptors2) / 100;
  var newT = "₹" + ptorsTotal;
  // console.log(ptorsTotal.concat(''));
  $(".ptors_ans").html(
    '<p class=" text-capitalize alert alert-info mb-0 font-weight-bold">amount - \'' +
      newT +
      "' </p>"
  );
});
