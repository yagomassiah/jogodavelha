import assert from 'assert';

export function sel(container, testId) {
  const element = find(container, testId);
  assert.ok(element, `element with data-testid "${testId}" not found`);

  return element;
}

export function find(container, testId) {
  return container.querySelector(`[data-testid="${testId}"]`);
}

export function clickOnElement(window, element) {
  const event = new window.MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  assert.ok(element, 'Element that should be clicked on does not exist');
  element.dispatchEvent(event);
}

export function triggerChange(element) {
  assert.ok(element, 'Element that the change event should be triggered on does not exist');

  element.dispatchEvent(new window.Event('change'));
}

export function selectByText(container, selector, text) {
  const elements = Array.from(container.querySelectorAll(selector)).filter(element => element.textContent === text);

  return elements.length > 0 ? elements[0] : null;
}

export function createAlertSpy() {
  const messageLog = [];
  const alertSpy = message => messageLog.push(message);
  alertSpy.getMessageLog = () => messageLog;

  return alertSpy;
}
