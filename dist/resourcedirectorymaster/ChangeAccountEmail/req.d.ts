export interface ChangeAccountEmailRequest {
    /**
     * 成员ID。
     * @example `181761095690****`
     */
    "AccountId": string;
    /**
     * 成员邮箱。
     * > 系统将自动发送验证邮件到所填邮箱，通过验证后修改才会生效，验证通过后系统会同步修改该账号的邮箱和安全邮箱。
     * @example `someone@example.com`
     */
    "Email": string;
}
