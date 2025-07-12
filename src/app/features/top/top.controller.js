angular.module('app')
  .controller('TopCtrl', function($scope) {
    $scope.addLibrary = function () {
      alert('追加ボタンがクリックされました！');
    };
    $scope.sampleList = ["サンプル１", "サンプル２", "サンプル３"];
  });