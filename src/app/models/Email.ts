export class Email {
  private _email: string;

  constructor(email: string) {
    if (!Email.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }
    this._email = email;
  }

  get email(): string {
    return this._email;
  }

  public static isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }
}
