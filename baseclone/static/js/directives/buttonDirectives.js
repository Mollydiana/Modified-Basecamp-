baseclone.directive('button', function() {
    return {
        restrict: 'E',
        compile: function(element, attributes) {
            element.addClass('btn');
            if (attributes.type == 'submit') {
                element.addClass('btn-warning');
            }
            if (attributes.size) {
                element.addClass('btn-' + attributes.size);
            }
        }
    }
});