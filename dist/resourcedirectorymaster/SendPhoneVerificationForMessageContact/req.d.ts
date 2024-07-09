export interface SendPhoneVerificationForMessageContactRequest {
    /**
     * 联系人ID。
     * @example `c-qL4HqKONzOM7****`
     */
    "ContactId"?: string;
    /**
     * 联系人的手机号码。
     * 格式：`<国家码>-<手机号码>`
     * 该手机号码为您在[AddMessageContact](~~AddMessageContact~~)中设置的手机号码。
     * @example `86-139****1234`
     */
    "PhoneNumber"?: string;
}
