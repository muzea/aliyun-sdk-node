export interface DescribeStoreConfigResponse {
    /**
     * 请求ID。
     * @example `E69C8998-1787-4999-8C75-D663FF1173CF`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求状态标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 内部错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 消息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态消息。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 门店配置信息列表。
     */
    StoreConfigInfo: {
        /**
         * 门店ID。
         * @example `s-dxsxx****`
         */
        StoreId: string;
        /**
         * 是否启用钉钉异常消息通知。
         * @example `true`
         */
        EnableNotification: boolean;
        /**
         * 钉钉消息的webHook地址。
         * @example `https://oapi.dingtalk.com/robot/send?.`
         */
        NotificationWebHook: string;
        /**
         * 用户配置的静默期，不发通知消息，JSON列表，单位为分钟，每个JSON字段表示一个静默期时间段，里面的值为UTC时间下一天里面的分钟数，from为静默期的起始分钟数，to为结束分钟数。
         * @example `[{"from":960,"to":1320},{"from":1170,"to":1230}]`
         */
        NotificationSilentTimes: string;
        SubscribeContents: {
            Category: string;
            Enable: boolean;
            Threshold: string;
            AtAll: boolean;
            AtMobileList: string;
        }[];
    };
}
