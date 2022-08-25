//FETCHING THE WHOLE THING
const main = document.querySelector('main');
const projectsWrapper = document.querySelector('.projects-wrapper');
const projectsAlign = document.querySelector('.projects-align');
const projects = 12;

let projectsCategory;

const apiUrl = 'https://vmadev.com/wp-json/wp/v2/';
const renderPage = function () {
	fetch(`${apiUrl}posts?categories=${projects}&per_page=100`, {
		method: 'GET',
	})
		.then((response) => response.json())
		.then((data) => {
			projectsCategory = data.filter((element) => true);
			projectsCategory.forEach((project) => {

				//templating the clickable div that will be put over each project
				let clickable = document.createElement('div');
				clickable.classList.add('clickable');

				//adding event listener to the div
				clickable.addEventListener('click', function () {
					projectsWrapper.innerHTML = ``; // cleaning the projectwrapper div


					// Templating all the way down, basically html and css in javascript
					projectWrap = document.createElement('section');
					projectWrap.classList.add('projectWrap');

					let projectImgWrapper = document.createElement('div');
					projectImgWrapper.classList.add('projectImgWrapper');

					let projectImg = document.createElement('img');
					projectImg.classList.add('projectImg');
					projectImg.src = project.acf.image.sizes.medium_large;

					let projectName = document.createElement('p');
					projectName.classList.add('projectName');
					projectName.innerText = project.acf.name;

					let projectDate = document.createElement('p');
					projectDate.classList.add('projectDate');
					projectDate.innerText = project.acf.date;

					let materialP = document.createElement('p');
					materialP.classList.add('materialP');
					materialP.innerText = `Main Materials:`;

					let materialWrapper = document.createElement('div');
					materialWrapper.classList.add('materialWrapper');

					let material1 = document.createElement('div');
					material1.classList.add('material');

					let material2 = document.createElement('div');
					material2.classList.add('material');

					let material3 = document.createElement('div');
					material3.classList.add('material');

					let material4 = document.createElement('div');
					material4.classList.add('material');

					let material1Img = document.createElement('img');
					material1Img.classList.add('materialImg');
					material1Img.src = project.acf.material_img.url;
					let material1Name = document.createElement('p');
					material1Name.classList.add('materialName');
					material1Name.innerText = project.acf.material1_name;

					let material2Img = document.createElement('img');
					material2Img.classList.add('materialImg');
					material2Img.src = project.acf.material2_img.url;
					let material2Name = document.createElement('p');
					material2Name.classList.add('materialName');
					material2Name.innerText = project.acf.material2_name;

					let material3Img = document.createElement('img');
					material3Img.classList.add('materialImg');
					material3Img.src = project.acf.material3_img.url;
					let material3Name = document.createElement('p');
					material3Name.classList.add('materialName');
					material3Name.innerText = project.acf.material3_name;

					let material4Img = document.createElement('img');
					material4Img.classList.add('materialImg');
					material4Img.src = project.acf.material4_img.url;
					let material4Name = document.createElement('p');
					material4Name.classList.add('materialName');
					material4Name.innerText = project.acf.material4_name;

					let projectDesc0 = document.createElement('p');
					projectDesc0.classList.add('projectDesc');
					projectDesc0.innerText = project.acf.description;

					let projectDesc1 = document.createElement('p');
					projectDesc1.classList.add('projectDesc');
					projectDesc1.innerText = project.acf.description1;

					let cross = document.createElement('img');
					cross.classList.add('projectCross')
					cross.src = './assets/images/cross.svg'

					let nextProject = document.createElement('img');
					nextProject.src = './assets/images/arrowRight.svg'
					nextProject.classList.add('arrow')
					nextProject.classList.add('arrowRight')
					nextProject.classList.add('next')
					nextProject.classList.add('nextPr')

					let backProject = document.createElement('img');
					backProject.src = './assets/images/arrowRight.svg'
					backProject.classList.add('arrow')
					backProject.classList.add('arrowLeft')
					backProject.classList.add('back')
					backProject.classList.add('backPr')


					// as it has been done already for the index page but this time the variable
					// can t be used to automatically change the src of the img so it has to be
					// done with switch

					// console.log(`project.acf.image${pos}`);//ofc this returns a string ;.;

					let pos = 0
					let image0 = project.acf.image0.url
					nextProject.addEventListener('click', function(){
						pos++
						console.log(pos);
						switch (pos) {
							case 0:
								projectImg.src = project.acf.image.url
								break;
						
							case 1:
								projectImg.src = project.acf.image0.url
								break;

							case 2:
								projectImg.src = project.acf.image1.url
								break;

							case 3:
								projectImg.src = project.acf.image2.url
								break;
							
							case 4:
								projectImg.src = project.acf.image3.url
								break;

							case 5:
									projectImg.src = project.acf.image4.url
									nextProject.style.display = 'none'
									break;
						}

						// Setting limits for arrows
						if(pos < 5){
							nextProject.style.display = 'block'
						}
						if(pos >= 1){
							backProject.style.display = 'block'
						}
						

					})

					backProject.addEventListener('click', function(){
						pos--
						console.log(pos);
						switch (pos) {
							case 0:
								projectImg.src = project.acf.image.url
								break;
						
							case 1:
								projectImg.src = project.acf.image0.url
								break;

							case 2:
								projectImg.src = project.acf.image1.url
								break;

							case 3:
								projectImg.src = project.acf.image2.url
								break;
							
							case 4:
								projectImg.src = project.acf.image3.url
								break;

							case 5:
									projectImg.src = project.acf.image4.url
									nextProject.style.display = 'none'
									break;
						}
						if(pos < 5){
							nextProject.style.display = 'block'
						}
						if(pos === 0){
							backProject.style.display = 'none'
						}
					})
					

					// Templating the page
					let crossLink = document.createElement('a')
					crossLink.href = './projects.html'

					projectImgWrapper.appendChild(nextProject)
					projectImgWrapper.appendChild(backProject)
					projectImgWrapper.appendChild(crossLink)
					crossLink.appendChild(cross)

					let projectDesc2 = document.createElement('p');
					projectDesc2.classList.add('projectDesc');
					projectDesc2.innerText = project.acf.description2;
					projectImgWrapper.appendChild(projectImg);
					projectWrap.appendChild(projectImgWrapper);
					projectWrap.appendChild(projectName);
					projectWrap.appendChild(projectDate);
					projectWrap.appendChild(projectDesc0);
					projectWrap.appendChild(projectDesc1);
					projectWrap.appendChild(projectDesc2);
					projectWrap.appendChild(materialP);
					projectWrap.appendChild(materialWrapper);
					materialWrapper.appendChild(material1);
					material1.appendChild(material1Img);
					material1.appendChild(material1Name);
					materialWrapper.appendChild(material2);
					material2.appendChild(material2Img);
					material2.appendChild(material2Name);
					materialWrapper.appendChild(material3);
					material3.appendChild(material3Img);
					material3.appendChild(material3Name);
					materialWrapper.appendChild(material4);
					material4.appendChild(material4Img);
					material4.appendChild(material4Name);

					main.appendChild(projectWrap);
				});

				// templating the page
				let projectsImg = document.createElement('img');
				projectsImg.src = project.acf.image.sizes.medium_large;
				projectsImg.classList.add(`projects-img`);

				let projectsName = document.createElement('p');
				projectsName.classList.add('projectsName');
				projectsName.innerText = project.acf.name;

				let projectsDate = document.createElement('p');
				projectsDate.classList.add('projectsName');
				projectsDate.classList.add('projectsDate');
				projectsDate.innerText = project.acf.date;

				let gradient = document.createElement('div');
				gradient.classList.add('gradient');

				clickable.appendChild(gradient);
				gradient.appendChild(projectsImg);
				clickable.appendChild(projectsName);
				clickable.appendChild(projectsDate);

				projectsWrapper.appendChild(clickable);
			});
		});
};

renderPage();