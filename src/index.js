/**
 *  Small library to create html tags and manipulate
 *  the DOM just using javascript.
 *  
 *  For practices purposes only.
 */
const selfClosingTags = ['img', 'link', 'input', 'br'];

export function attributesToString(attributes = {}) {
  return Object.keys(attributes)
    .map((key) => ` ${key}="${attributes[key]}"`)
    .join(' ');
}

export function createTagWithAttributes(element = {}) {
  const { tag, attributes } = element;
  return function(content = '') {
    const stringFromAttributes = attributes
      ? attributesToString(attributes)
      : '';
    if (selfClosingTags.includes(tag)) {
      return `<${tag}${stringFromAttributes}/>`;
    }
    return `<${tag}${stringFromAttributes}>${content}</${tag}>`;
  };
}

export function createTag(tag) {
  return typeof tag === 'string'
    ? createTagWithAttributes({ tag })
    : createTagWithAttributes(tag);
}

export function createElement(tag, attributes = {}, content) {
  return createTag({ tag, attributes })(content);
}

// Specify what do you want to render and where
export function render(element, target) {
  target.innerHTML = element;
}
