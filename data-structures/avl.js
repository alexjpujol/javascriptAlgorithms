//an avl tree becomes out of balance when the height of one 
//of its branches is two higher than another

// binary search trees have fast lookups - O(log n). Unbalanced trees skew towards O(n) worst case,
// so good to keep your trees balanced

class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = 1;
    }

    add(value) {
        if (value < this.value) {
            if (this.left) {
                this.left.add(value);
            } else {
                this.left = new Node(value);
            }
            if (!this.right || this.right.height < this.left.height) {
                this.height = this.left.height + 1;
            }
        } else {
            if (this.right) {
                this.right.add(value);
            } else {
                this.right = new Node(value);
            }
            if (!this.left || this.right.height > this.left.height) {
                this.height = this.right.height + 1;
            }
        }
        this.balance();
    }

    balance() {
        const rightHeight = (this.right) ? this.right.height : 0;
        const leftHeight = (this.left) ? this.left.height : 0;

        if (leftHeight > rightHeight + 1) {
            const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
            const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;

            if (leftRightHeight > leftLeftHeight) {
                this.left.rotateRR();
            }

            this.rotateLL();
        } else {
            const rightRightHeight = (this.right)
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this.root.add(value);
        }   
    }
    
    toObject() {
        return this.root;
    }
}