export interface SendEmailVerificationForMessageContactRequest {
    /**
     * 联系人ID。
     * @example `c-5gsZAGt***PGduDF`
     */
    "ContactId"?: string;
    /**
     * 联系人的邮箱地址。
     * 该邮箱地址为您在[AddMessageContact](~~AddMessageContact~~)中设置的邮箱地址。
     * @example `someone***@example.com`
     */
    "EmailAddress"?: string;
}
