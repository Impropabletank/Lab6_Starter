// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. Attach the shadow DOM in open mode
		this.shadow = this.attachShadow({ mode: 'open' });

		// A2. Create an <article> element
		this.article = document.createElement('article');
	
		// A3. Create a <style> element
		const style = document.createElement('style');
	
		// A4. Add styles from cardTemplate.html
		style.textContent = `
		  * {
			font-family: sans-serif;
			margin: 0;
			padding: 0;
		  }
	
		  article {
			align-items: center;
			border: 1px solid rgb(223, 225, 229);
			border-radius: 8px;
			display: grid;
			grid-template-rows: 118px 56px 14px 18px 15px 36px;
			height: auto;
			row-gap: 5px;
			padding: 0 16px 16px 16px;
			width: 178px;
		  }
	
		  article > img {
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
			height: 118px;
			object-fit: cover;
			margin-left: -16px;
			width: calc(100% + 32px);
		  }
	
		  p.title {
			display: -webkit-box;
			font-size: 16px;
			height: 36px;
			line-height: 18px;
			overflow: hidden;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		  }
	
		  p.title a {
			text-decoration: none;
			color: #000;
		  }
	
		  p.organization {
			color: black !important;
			font-size: 14px;
		  }
	
		  div.rating {
			align-items: center;
			column-gap: 5px;
			display: flex;
		  }
	
		  div.rating > img {
			height: auto;
			display: inline-block;
			object-fit: scale-down;
			width: 78px;
		  }
	
		  time {
			color: #70757A;
			font-size: 14px;
		  }
	
		  p.ingredients {
			height: 32px;
			line-height: 16px;
			padding-top: 4px;
			overflow: hidden;
		  }
		`;
	
		// A5. Append <style> and <article> to Shadow DOM
		this.shadow.appendChild(style);
		this.shadow.appendChild(this.article);
	  }
	
	  set data(data) {
		if (!data) return;
	
		// A6. Select the <article> (already saved as this.article)
		const article = this.article;
	
		// A7. Set the innerHTML of the article using template literals
		article.innerHTML = `
		  <img src="${data.imgSrc}" alt="${data.imgAlt}">
		  <p class="title">
			<a href="${data.titleLnk}">${data.titleTxt}</a>
		  </p>
		  <p class="organization">${data.organization}</p>
		  <div class="rating">
			<span>${data.rating}</span>
			<img src="./assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
			<span>(${data.numRatings})</span>
		  </div>
		  <time>${data.lengthTime}</time>
		  <p class="ingredients">
			${data.ingredients}
		  </p>
		`;
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
