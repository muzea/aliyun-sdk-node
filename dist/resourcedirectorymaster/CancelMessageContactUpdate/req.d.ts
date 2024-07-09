export interface CancelMessageContactUpdateRequest {
    /**
     * 联系人ID。
     * @example `c-qL4HqKONzOM7****`
     */
    "ContactId"?: string;
    /**
     * 联系人的手机号码。
     * 格式：`<国家码>-<手机号码>`。
     * <props="china">
     * > 仅支持填写`86-<手机号码>`的中国内地手机号码。</props>
     * @example `86-139****1234`
     */
    "PhoneNumber"?: string;
    /**
     * 联系人的邮箱地址。
     * @example `someone***@example.com`
     */
    "EmailAddress"?: string;
}
