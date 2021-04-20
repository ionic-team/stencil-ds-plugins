/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AutocompleteTypes, Color, ComponentProps, ComponentRef, OverlayEventDetail, TextFieldTypes } from "./interfaces";
import { CheckboxChangeEventDetail, Color as Color1, StyleEventDetail } from "./components/element-interface";
import { InputChangeEventDetail } from "./components/my-input/my-input";
import { RadioGroupChangeEventDetail } from "./components/my-radio-group/my-radio-group";
import { RangeChangeEventDetail, RangeValue } from "./components/my-range/my-range";
export namespace Components {
    interface MyButton {
        /**
          * The type of button.
         */
        "buttonType": string;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download": string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href": string | undefined;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong": boolean;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": 'submit' | 'reset' | 'button';
    }
    interface MyCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked": boolean;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled": boolean;
        /**
          * If `true`, the checkbox will visually appear as indeterminate.
         */
        "indeterminate": boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * The value of the toggle does not mean if it's checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`.
         */
        "value": string;
    }
    interface MyComponent {
        /**
          * The age
         */
        "age": number;
        /**
          * The first name
         */
        "first": string;
        /**
          * The array of child names
         */
        "kidsNames": string[];
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyInput {
        /**
          * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
         */
        "accept"?: string;
        /**
          * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        "autocapitalize": string;
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete": AutocompleteTypes;
        /**
          * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        "autocorrect": 'on' | 'off';
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus": boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        "clearOnEdit"?: boolean;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        /**
          * A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.
         */
        "enterkeyhint"?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        /**
          * Returns the native `<input>` element used under the hood.
         */
        "getInputElement": () => Promise<HTMLInputElement>;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * Sets focus on the specified `my-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * If `true`, the element will have its spelling and grammar checked.
         */
        "spellcheck": boolean;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type": TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface MyPopover {
        /**
          * If `true`, the popover will animate.
         */
        "animated": boolean;
        /**
          * If `true`, the popover will be dismissed when the backdrop is clicked.
         */
        "backdropDismiss": boolean;
        /**
          * The component to display inside of the popover.
         */
        "component": ComponentRef;
        /**
          * The data to pass to the popover component.
         */
        "componentProps"?: ComponentProps;
        /**
          * Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.
         */
        "cssClass"?: string | string[];
        /**
          * Dismiss the popover overlay after it has been presented.
          * @param data Any data to emit in the dismiss events.
          * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
         */
        "dismiss": (_data?: any, _role?: string) => Promise<boolean>;
        /**
          * The event to pass to the popover animation.
         */
        "event": any;
        /**
          * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        "keyboardClose": boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * Returns a promise that resolves when the popover did dismiss.
         */
        "onDidDismiss": () => Promise<OverlayEventDetail>;
        /**
          * Returns a promise that resolves when the popover will dismiss.
         */
        "onWillDismiss": () => Promise<OverlayEventDetail>;
        /**
          * Present the popover overlay after it has been created.
         */
        "present": () => Promise<void>;
        /**
          * If `true`, a backdrop will be displayed behind the popover.
         */
        "showBackdrop": boolean;
        /**
          * If `true`, the popover will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        "translucent": boolean;
    }
    interface MyRadio {
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the radio.
         */
        "disabled": boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * the value of the radio.
         */
        "value"?: any | null;
    }
    interface MyRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmptySelection": boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface MyRange {
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * How long, in milliseconds, to wait to trigger the `myChange` event after each change in the range value.
         */
        "debounce": number;
        /**
          * If `true`, the user cannot interact with the range.
         */
        "disabled": boolean;
        /**
          * Show two knobs.
         */
        "dualKnobs": boolean;
        /**
          * Maximum integer value of the range.
         */
        "max": number;
        /**
          * Minimum integer value of the range.
         */
        "min": number;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * If `true`, a pin with integer value is shown when the knob is pressed.
         */
        "pin": boolean;
        /**
          * If `true`, the knob snaps to tick marks evenly spaced based on the step property value.
         */
        "snaps": boolean;
        /**
          * Specifies the value granularity.
         */
        "step": number;
        /**
          * If `true`, tick marks are displayed based on the step value. Only applies when `snaps` is `true`.
         */
        "ticks": boolean;
        /**
          * the value of the range.
         */
        "value": RangeValue;
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCheckboxElement extends Components.MyCheckbox, HTMLStencilElement {
    }
    var HTMLMyCheckboxElement: {
        prototype: HTMLMyCheckboxElement;
        new (): HTMLMyCheckboxElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyPopoverElement extends Components.MyPopover, HTMLStencilElement {
    }
    var HTMLMyPopoverElement: {
        prototype: HTMLMyPopoverElement;
        new (): HTMLMyPopoverElement;
    };
    interface HTMLMyRadioElement extends Components.MyRadio, HTMLStencilElement {
    }
    var HTMLMyRadioElement: {
        prototype: HTMLMyRadioElement;
        new (): HTMLMyRadioElement;
    };
    interface HTMLMyRadioGroupElement extends Components.MyRadioGroup, HTMLStencilElement {
    }
    var HTMLMyRadioGroupElement: {
        prototype: HTMLMyRadioGroupElement;
        new (): HTMLMyRadioGroupElement;
    };
    interface HTMLMyRangeElement extends Components.MyRange, HTMLStencilElement {
    }
    var HTMLMyRangeElement: {
        prototype: HTMLMyRangeElement;
        new (): HTMLMyRangeElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-checkbox": HTMLMyCheckboxElement;
        "my-component": HTMLMyComponentElement;
        "my-input": HTMLMyInputElement;
        "my-popover": HTMLMyPopoverElement;
        "my-radio": HTMLMyRadioElement;
        "my-radio-group": HTMLMyRadioGroupElement;
        "my-range": HTMLMyRangeElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        /**
          * The type of button.
         */
        "buttonType"?: string;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download"?: string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href"?: string | undefined;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * Emitted when the button loses focus.
         */
        "onMyBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onMyFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong"?: boolean;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface MyCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked"?: boolean;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled"?: boolean;
        /**
          * If `true`, the checkbox will visually appear as indeterminate.
         */
        "indeterminate"?: boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the toggle loses focus.
         */
        "onMyBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the checked property has changed.
          * @bindAttr checked
          * @bindType boolean
         */
        "onMyChange"?: (event: CustomEvent<CheckboxChangeEventDetail>) => void;
        /**
          * Emitted when the toggle has focus.
         */
        "onMyFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the styles change.
         */
        "onMyStyle"?: (event: CustomEvent<StyleEventDetail>) => void;
        /**
          * The value of the toggle does not mean if it's checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`.
         */
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The age
         */
        "age"?: number;
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The array of child names
         */
        "kidsNames"?: string[];
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
        /**
          * Testing an event without value
         */
        "onMyCustomEvent"?: (event: CustomEvent<number>) => void;
    }
    interface MyInput {
        /**
          * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
         */
        "accept"?: string;
        /**
          * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        "autocapitalize"?: string;
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete"?: AutocompleteTypes;
        /**
          * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        "autocorrect"?: 'on' | 'off';
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus"?: boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        "clearOnEdit"?: boolean;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.
         */
        "enterkeyhint"?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onMyBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the value has changed.
          * @bindAttr value
          * @bindType text my-input[type=text]
          * @bindType number my-input[type=number]
         */
        "onMyChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onMyFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onMyInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * If `true`, the element will have its spelling and grammar checked.
         */
        "spellcheck"?: boolean;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface MyPopover {
        /**
          * If `true`, the popover will animate.
         */
        "animated"?: boolean;
        /**
          * If `true`, the popover will be dismissed when the backdrop is clicked.
         */
        "backdropDismiss"?: boolean;
        /**
          * The component to display inside of the popover.
         */
        "component": ComponentRef;
        /**
          * The data to pass to the popover component.
         */
        "componentProps"?: ComponentProps;
        /**
          * Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.
         */
        "cssClass"?: string | string[];
        /**
          * The event to pass to the popover animation.
         */
        "event"?: any;
        /**
          * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        "keyboardClose"?: boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * Emitted after the popover has dismissed.
         */
        "onMyPopoverDidDismiss"?: (event: CustomEvent<OverlayEventDetail>) => void;
        /**
          * Emitted after the popover has presented.
         */
        "onMyPopoverDidPresent"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted before the popover has dismissed.
         */
        "onMyPopoverWillDismiss"?: (event: CustomEvent<OverlayEventDetail>) => void;
        /**
          * Emitted before the popover has presented.
         */
        "onMyPopoverWillPresent"?: (event: CustomEvent<void>) => void;
        /**
          * If `true`, a backdrop will be displayed behind the popover.
         */
        "showBackdrop"?: boolean;
        /**
          * If `true`, the popover will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        "translucent"?: boolean;
    }
    interface MyRadio {
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the radio.
         */
        "disabled"?: boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the radio button loses focus.
         */
        "onMyBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the radio button has focus.
         */
        "onMyFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the radio button loses focus.
          * @bindAttr checked
          * @bindType radio
         */
        "onMySelect"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the styles change.
         */
        "onMyStyle"?: (event: CustomEvent<StyleEventDetail>) => void;
        /**
          * the value of the radio.
         */
        "value"?: any | null;
    }
    interface MyRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmptySelection"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the value has changed.
          * @bindAttr value
          * @bindType select
         */
        "onMyChange"?: (event: CustomEvent<RadioGroupChangeEventDetail>) => void;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface MyRange {
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * How long, in milliseconds, to wait to trigger the `myChange` event after each change in the range value.
         */
        "debounce"?: number;
        /**
          * If `true`, the user cannot interact with the range.
         */
        "disabled"?: boolean;
        /**
          * Show two knobs.
         */
        "dualKnobs"?: boolean;
        /**
          * Maximum integer value of the range.
         */
        "max"?: number;
        /**
          * Minimum integer value of the range.
         */
        "min"?: number;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the range loses focus.
         */
        "onMyBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the value property has changed.
          * @bindAttr value
          * @bindType select
         */
        "onMyChange"?: (event: CustomEvent<RangeChangeEventDetail>) => void;
        /**
          * Emitted when the range has focus.
         */
        "onMyFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the styles change.
         */
        "onMyStyle"?: (event: CustomEvent<StyleEventDetail>) => void;
        /**
          * If `true`, a pin with integer value is shown when the knob is pressed.
         */
        "pin"?: boolean;
        /**
          * If `true`, the knob snaps to tick marks evenly spaced based on the step property value.
         */
        "snaps"?: boolean;
        /**
          * Specifies the value granularity.
         */
        "step"?: number;
        /**
          * If `true`, tick marks are displayed based on the step value. Only applies when `snaps` is `true`.
         */
        "ticks"?: boolean;
        /**
          * the value of the range.
         */
        "value"?: RangeValue;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-checkbox": MyCheckbox;
        "my-component": MyComponent;
        "my-input": MyInput;
        "my-popover": MyPopover;
        "my-radio": MyRadio;
        "my-radio-group": MyRadioGroup;
        "my-range": MyRange;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-checkbox": LocalJSX.MyCheckbox & JSXBase.HTMLAttributes<HTMLMyCheckboxElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-popover": LocalJSX.MyPopover & JSXBase.HTMLAttributes<HTMLMyPopoverElement>;
            "my-radio": LocalJSX.MyRadio & JSXBase.HTMLAttributes<HTMLMyRadioElement>;
            "my-radio-group": LocalJSX.MyRadioGroup & JSXBase.HTMLAttributes<HTMLMyRadioGroupElement>;
            "my-range": LocalJSX.MyRange & JSXBase.HTMLAttributes<HTMLMyRangeElement>;
        }
    }
}
