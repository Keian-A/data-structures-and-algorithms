const HashMap = require('../hash-table/hash-table.js');

module.exports = function TreeIntersection(tree1, tree2) {
    let obj = new HashMap();
    let resultArr = [];
    FirstTreeTraversal(tree1.root);
    SecondTreeTraversal(tree2.root);

    function FirstTreeTraversal(root) {
        obj.set(root.value, true);
        if (root.left) FirstTreeTraversal(root.left);
        if (root.right) FirstTreeTraversal(root.right);
    }

    function SecondTreeTraversal(root) {
        if (obj.contains(root.value)) resultArr.push(root.value);
        if (root.left) SecondTreeTraversal(root.left);
        if (root.right) SecondTreeTraversal(root.right);
    }
    return resultArr;
}