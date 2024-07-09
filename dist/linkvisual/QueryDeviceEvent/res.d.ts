export interface QueryDeviceEventResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request forbidden`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 每页显示的记录数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 总条数。
         * @example `2`
         */
        Total: number;
        /**
         * 当前页面号。
         * @example `1`
         */
        Page: number;
        /**
         * 返回的智能告警事件列表。
         */
        List: {
            /**
             * 智能告警事件ID。
             * @example `ae6b74f1dc7d****85d32c210185967f_16080****9471`
             */
            EventId: string;
            /**
             * 智能告警事件发生时间。
             * @example `2020-12-15 20:40:49`
             */
            EventTime: string;
            /**
             * 智能告警事件类型。
             * @example `1`
             */
            EventType: number;
            /**
             * 智能告警事件对应的图片ID。
             * @example `aEtMSm9****ORTFxcGpTbDZ****6eTk0`
             */
            EventPicId: string;
            /**
             * 智能告警事件描述。
             * @example `移动侦测`
             */
            EventDesc: string;
            /**
             * 智能告警事件附加信息。
             * @example `{}`
             */
            EventData: string;
        }[];
    };
}
