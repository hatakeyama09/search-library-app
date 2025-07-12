angular.module('app')
  .component('templateButton', {
    bindings: {
      label: '@',
      onClick: '&',
      bgColor: '@'
    },
    templateUrl: 'app/components/common/template-button/template-button.html',
    controller: function () {}
  });
