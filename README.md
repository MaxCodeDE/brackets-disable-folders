# brackets-disable-folders

Brackets extension that disable node_modules, bower_components, dist and tmp folder.

## Usage

You can edit the extension and add or delete folders from the filter.

Defaults the folders `node_modules`, `dist`, `bower_components` and `tmp` are disabeld.

```javascript
return !name.match(/node_modules|dist|bower_components|tmp/);
```
