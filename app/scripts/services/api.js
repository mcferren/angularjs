

app.service('api', function ($http) {
    this.get = function (path) {
        return $http.get("/api/1/"+path);
    };
    this.post = function (path,object) {
        return $http.post("/api/1/"+path,object);
    };
    this.put = function (path,object) {
        return $http.put("/api/1/"+path,object);
    };
    this.delete = function (path) {
        return $http.delete("/api/1/"+path)
    };
} );
