import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

function isUsernameValid(username: string): boolean {
  const isValid =
    !!username.match(/^(?!\.)(?=.{4,30}$)(?!.*[.]{2})[a-zA-Z0-9_.]+(?<![.])$/) &&
    !!username.match(/[a-zA-Z0-9]/);

  return isValid;
}

export function IsUsername(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isUsername',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && isUsernameValid(value);
        },
      },
    });
  };
}
