export interface QueryPushRecordsResponse {
    /**
     * 废弃参数，不再使用。
     * @example `i91D***********kXIh/dVBEQ==`
     */
    NextToken: string;
    /**
     * 每页的条目数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `9B24B396-249D-55E4-8CA1-66C9B50BB734`
     */
    RequestId: string;
    /**
     * 记录总条数。
     * @example `193`
     */
    Total: number;
    /**
     * 推送记录的当前页数。
     * @example `11`
     */
    Page: number;
    PushInfos: {
        /**
         * 具体通知/消息的详情。
         */
        PushInfo: {
            /**
             * 消息状态。可取值：
             * - **WAITING**：等待中。
             * - **SENT**：已推送。
             * - **CANCELED**：已取消。
             * @example `SENT`
             */
            Status: string;
            /**
             * 消息ID。
             * @example `510431`
             */
            MessageId: string;
            /**
             * AppKey信息。
             * @example `333526247`
             */
            AppKey: number;
            /**
             * 设备类型。取值：
             * - **ALL**：所有类型。
             * - **IOS**：iOS设备。
             * - **ANDROID**：Android设备。
             * @example `ANDROID`
             */
            DeviceType: string;
            /**
             * 推送类型。取值：
             * - **MESSAGE**：消息。
             * - **NOTICE**：通知。
             * @example `NOTICE`
             */
            PushType: string;
            /**
             * 推送的body字段。
             * @example `abcd`
             */
            Body: string;
            /**
             * 推送的title字段。
             * @example `sssss`
             */
            Title: string;
            /**
             * 推送源类型。可取值：
             * - **API**：OpenAPI发起的推送，含OpenAPI平台控制台发起的推送。
             * - **CONSOLE**：通过移动推送控制台推送。
             * @example `DEVICE`
             */
            Source: string;
            /**
             * 推送时间，UTC时间，ISO-8601格式, 格式为 YYYY-MM-DDThh:mm:ssZ。
             * @example `2021-09-15T02:05:24Z`
             */
            PushTime: string;
            /**
             * 推送目标：
             * - **ACCOUNT**：根据账号推送。
             * - **ALIAS**：根据别名推送。
             * - **DEVICE**：根据设备推送。
             * - **TAG**：根据标签推送。
             * - **ALL**：推送给全部设备。
             * - **TBD**：初始化持续推送，推送目标由后续的ContinuouslyPush接口指定。
             * @example `DEVICE`
             */
            Target: string;
        }[];
    };
}
