/**
 * Provides missing shadowRoot.elementFromPoint implementation
 *
 * Usage:
 *
 * <pre><code>
 * import { patch } from 'shadow-root-element-from-point-polyfill';
 * patch();
 * </pre></code>
 */
export function patch() {
    if (
        typeof ShadowRoot !== 'undefined' &&
        typeof ShadowRoot.elementFromPoint === 'undefined'
    ) {
        ShadowRoot.prototype.elementFromPoint = function() {
            return document.elementFromPoint.apply(document, arguments);
        };
    }
}
