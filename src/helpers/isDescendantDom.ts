export const isDescendant = function (parent: HTMLElement, child: HTMLElement) {

	let node = child.parentNode;
	while (node) {
		if (node === parent) {
			return true;
		}

		// Traverse up to the parent
		node = node.parentNode;
	}

	// Go up until the root but couldn't find the `parent`
	return false;
};

export default isDescendant;