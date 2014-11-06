baseclone.filter('topicTypeFilter', function(){
    return function(topicList, topicType) {
        var filtered = [];
        angular.forEach(topicList, function(topic){
            if (topic.topicable.type == topicType) {
                filtered.push(topic);
            }
        });
        return filtered;
 };
});