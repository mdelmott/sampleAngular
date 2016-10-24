module.exports = function () {
    return {
        restrict : "E",
        template : "<div class='combobox' ng-controller='commonCtrl'> " +
        "<button class='text' ng-click='click()' ng-bind='text'></button> " +
        "<div ng-show='isShown'  ng-repeat='(name,checked) in items'> " +
        "<input type='checkbox' ng-model='checked' ng-change='changeCheckedValues(name)'> " +
        "<span class='item' ng-bind='name'></span> " +
        "</div></div>",
        scope : {
            items : "="
        },
        link : function (scope) {
            scope.listItem = scope.items;
        }
    };
};
