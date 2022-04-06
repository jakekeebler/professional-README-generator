// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(license) { 
    if (license !== '') {
      return `![Generic badge](https://img.shields.io/badge/license-${license}-green.svg)`;
    } 
    else {
      return ' ';
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } 
  else {
      return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `The application is covered under the following license:
    ${renderLicenseLink(license)}`;
  } 
  else {
      return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.projectTitle}

  ${renderLicenseBadge(response.projectLicense)}

  #### Table of Contents
  
  1. [Description](#description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Questions](#questions)
  
  ## Description
  * ${response.projectDescription}
  
  ## Installation Instructions
  * ${response.projectInstall}
  
  ## Usage
  * ${response.projectUsage}
  
  ## Contributor Guidelines
  * ${response.projectGuidelines}
  
  ## Test Instructions
  * ${response.projectTest}
  
  ## License
  * ${renderLicenseSection(response.projectLicense)}
  
  ## Questions
  * Follow me on GitHub for updates and future projects at (http://github.com/${response.projectUsername})
  
  * If you have any questions on this project, email me at ${response.projectEmail}`;;
}

module.exports = generateMarkdown;
