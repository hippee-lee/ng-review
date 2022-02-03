import { Directive, HostListener } from '@angular/core';

// Disallow invalid characters: n ' ' ( )
// Formatting characters are only inserted preceding digits
// Deleting a digit also removes any immediately preceding formatting characters
// Pasting a full/partial number into the input should work
/**
 * @class PhoneFormat
 */
@Directive({
  selector: '[appPhoneFormat]',
})
export class PhoneFormatDirective {
  formattedString = '';
  @HostListener('input', ['$event'])
  formatValue(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    if (
      event.inputType === 'deleteContentBackward' &&
      this.formattedString.length > 0
    ) {
      this.formattedString = this.formattedString?.substring(
        0,
        this.formattedString?.length - 1
      );
    } else {
      const sanitizedInput = input.value.replace(/\D/g, '').substring(0, 10);
      this.formattedString = sanitizedInput.replace(
        /^(\d{0,3})(\d{0,3})(\d{0,4})/,
        '($1) $2-$3'
      );
    }
    input.value = this.formattedString;
  }
}
