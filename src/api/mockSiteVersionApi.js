import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const siteVersions = [{
  id: Math.floor((Math.random() * 1000) + 1),
  versionValue: '',
  modeValue: '',
  isActive: false,
}];

//This would be performed on the server in a real app. Just stubbing in.
class SiteVersionApi {
  static getAllSiteVersions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], siteVersions));
      }, delay);
    });
  }

  static saveSiteVersion(siteVersion) {
    siteVersion = Object.assign({}, siteVersion); // to avoid manipulating object passed in.
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate server-side validation
        if (siteVersion.id) {
          const existingSiteVersionIndex = siteVersions.findIndex(a => a.id == siteVersion.id);
          siteVersions.splice(existingSiteVersionIndex, 1, siteVersion);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new siteVersions in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          siteVersion.id = Math.floor((Math.random() * 1000) + 1);
          siteVersions.push(siteVersion);
        }
        resolve(siteVersion);
      }, delay);
    });
  }

  static deleteSiteVersion(siteVersionId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfSiteVersionToDelete = siteVersions.findIndex(siteVersion => {
          siteVersion.id == siteVersionId;
        });
        siteVersions.splice(indexOfSiteVersionToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SiteVersionApi;