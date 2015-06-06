angular
    .module('pepeApp')
        .factory(
            'DocumentsService',
            [
                function () {
                    
                    var that = {};
                    
                    var _documents = [
                        {
                            name: "Pierwszy"
                        },
                        {
                            name: "Drugi"
                        }
                    ]; 
                    
                    /**
                     * Zwraca listę dokumentów
                     */
                    that.getDocuments = function() {                        
                        return _documents;
                    };
                    
                    /**
                     * Dodaje dokument do listy
                     */
                    that.addDocument = function(document) {
                        _documents.push(document);
                    };
                    
                    /**
                     * Pobiera dokument ze wskazanej pozycji
                     */
                    that.getDocument = function(index) {
                        if (index < _documents.length) {
                            return _documents[index];
                        }
                    };
                    
                    return that;
                }
            ]
        );