export interface UpdateStoreConfigRequest {
    /**
     * 用户配置的静默期，不发通知消息，JSON列表，单位为分钟，每个JSON字段表示一个静默期时间段，里面的值为UTC时间下一天里面的分钟数，from为静默期的起始分钟数，to为结束分钟数。
     * @example `[{"from":960,"to":1320},{"from":1170,"to":1230}]`
     */
    "NotificationSilentTimes"?: string;
    /**
     * 是否启用钉钉异常消息通知，true 启用，false不启用。
     * @example `true`
     */
    "EnableNotification"?: boolean;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-sds1233****`
     */
    "StoreId": string;
    /**
     * 钉钉消息的webHook地址。
     * @example `https://oapi.dingtalk.com/robot/send?.`
     */
    "NotificationWebHook"?: string;
    /**
     * 系统扩展字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 订阅内容。
     */
    "SubscribeContents"?: string;
}
