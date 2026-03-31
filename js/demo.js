// 功能演示页脚本：模拟识别流程
(function () {
  var uploadInput = document.getElementById("imageUpload");
  var identifyBtn = document.getElementById("identifyBtn");
  var result = document.getElementById("result");

  if (!uploadInput || !identifyBtn || !result) return;

  identifyBtn.addEventListener("click", function () {
    if (!uploadInput.files || uploadInput.files.length === 0) {
      result.textContent = "请先上传苹果叶片或果实图片。";
      return;
    }

    var labels = [
      "腐烂病",
      "蚜虫",
      "红蜘蛛",
      "斑点落叶病",
      "白粉病"
    ];
    var label = labels[Math.floor(Math.random() * labels.length)];
    var confidence = (88 + Math.random() * 11).toFixed(1);
    result.textContent =
      "识别完成：疑似 " + label + "，置信度 " + confidence + "%（演示数据）";
  });
})();
