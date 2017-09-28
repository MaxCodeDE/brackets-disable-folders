define(function(require, exports, module) {
    "use strict";

    var FileSystem = brackets.getModule("filesystem/FileSystem");
    var filterBefore = FileSystem._FileSystem.prototype._indexFilter;

    FileSystem._FileSystem.prototype._indexFilter = function(path, name) {
        if (!filterBefore.apply(this, arguments)) return false;

        return !name.match(/node_modules|dist|bower_components|tmp/);
    };
});