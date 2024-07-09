export interface UpdateMessageContactRequest {
    /**
     * 联系人ID。
     * @example `c-qL4HqKONzOM7****`
     */
    "ContactId"?: string;
    /**
     * 联系人的名称。
     * @example `tom`
     */
    "Name"?: string;
    /**
     * 联系人的邮箱地址。
     * 添加邮箱地址后，您需要继续调用[SendEmailVerificationForMessageContact](~~SendEmailVerificationForMessageContact~~)向该邮箱地址发送验证信息，通过验证后，该联系人的邮箱地址才能生效。
     * @example `someone***@example.com`
     */
    "EmailAddress"?: string;
    /**
     * 联系人的手机号码。
     * 格式：`<国家码>-<手机号码>`。
     * <props="china">
     * > 仅支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * 添加手机号码后，您需要继续调用[SendPhoneVerificationForMessageContact](~~SendPhoneVerificationForMessageContact~~)向该手机号码发送验证信息，通过验证后，该联系人的手机号码才能生效。
     * @example `86-139****1234`
     */
    "PhoneNumber"?: string;
    /**
     * 联系人的职位。
     * @example `TechnicalDirector`
     */
    "Title"?: string;
    /**
     * 联系人接收的消息分类。
     */
    "MessageTypes"?: string[];
}
