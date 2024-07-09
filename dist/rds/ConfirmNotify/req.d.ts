export interface ConfirmNotifyRequest {
    /**
     * 通知确认人的阿里云账号ID。您也可以传入**0**，代表该通知被系统自动确认。
     * @example `0`
     */
    "Confirmor": number;
    /**
     * 通知ID列表。
     */
    "NotifyIdList": number[];
}
