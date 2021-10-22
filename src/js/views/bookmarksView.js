import View from './view.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  // _parentEle = document.querySelector('.nav__btn--bookmarks');
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet! ';
  _message = '';

  addHandlerDisplayBookmarks(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
