export interface SendTTSVerifyLinkRequest {
    /**
     * 告警联系人ID。
     * @example `123`
     */
    "ContactId": number;
    /**
     * 告警联系人手机号码。
     * @example `1381111****`
     */
    "Phone": string;
}
