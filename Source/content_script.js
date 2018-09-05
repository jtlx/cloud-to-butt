walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bdead frontier 2\b/g, "dead frontier 2 free-to-play early access violent zombie gore rpg indie survival horror first/third-person shooter online co-op MMORPG");
	v = v.replace(/\bDead Frontier 2\b/g, "Dead Frontier 2 free-to-play early access violent zombie gore rpg indie survival horror first/third-person shooter online co-op MMORPG");
	v = v.replace(/\bdead Frontier\b/g, "dead Frontier 2 free-to-play early access violent zombie gore rpg indie survival horror first/third-person shooter online co-op MMORPG");
	v = v.replace(/\bDead frontier\b/g, "Dead frontier 2 free-to-play early access violent zombie gore rpg indie survival horror first/third-person shooter online co-op MMORPG");
	
	textNode.nodeValue = v;
}


