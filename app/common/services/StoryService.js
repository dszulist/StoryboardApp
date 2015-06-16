'use strict';

angular.module('StoryboardApp.Common')
    .service('StoryService', function () {
        var service = this;
        service.stories = [
            {
                id: 1,
                title: 'Pierwsza historyjka',
                description: 'Jakiś opis 1',
                status: 'To do',
                type: 'Spike',
                reporter: 2,
                assignee: 1,
                criteria: 'Kryteria a b i c'

            },
            {
                id: 2,
                title: 'Druga historyjka',
                description: 'Jakiś opis 2',
                status: 'In Progress',
                type: 'Enhancement',
                reporter: 2,
                assignee: 1,
                criteria: 'Kryteria a b'
            }
        ];
        service.getStories = function() {
            return service.stories;
        }
    });