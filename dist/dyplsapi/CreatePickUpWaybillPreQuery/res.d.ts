export interface CreatePickUpWaybillPreQueryResponse {
    /**
     * 请求ID。
     * @example `9FC30594-3841-43AD-9008-03393BCB5CD2`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 结果集。
     */
    Data: {
        /**
         * 是否成功。
         * @example `true`
         */
        Success: boolean;
        /**
         * 错误码。
         * @example `无`
         */
        ErrorCode: string;
        /**
         * 错误信息。
         * @example `无`
         */
        ErrorMsg: string;
        /**
         * 响应码。
         * @example `0`
         */
        Code: string;
        /**
         * 响应内容。
         * @example `Success`
         */
        Message: string;
        /**
         * 查询快递公司是否可下单的信息列表。
         */
        CpTimeSelectList: {
            /**
             * 实时单可选信息。
             */
            RealTime: {
                /**
                 * 实时单服务类型名称。
                 * @example `2小时上门`
                 */
                Name: string;
                /**
                 * 超过实时单下单的时间，是否能再下实时单。
                 * @example `false`
                 */
                Selectable: boolean;
                /**
                 * 不可选文案提示。
                 * @example `超过实时单下单时间范围`
                 */
                SelectDisableTip: string;
            };
            /**
             * 预约单可选时间信息，当前快递公司如果不能下预约单，则该字段值为空。
             */
            AppointTimes: {
                /**
                 * YYYY-MM-DD格式的日期字符串。
                 * @example `2022-04-28`
                 */
                Date: string;
                /**
                 * 该日期是否可选。
                 * @example `true`
                 */
                DateSelectable: boolean;
                /**
                 * 当天的下单时间段列表.
                 */
                TimeList: {
                    /**
                     * 时间段的开始时间。
                     * @example `10:00:00`
                     */
                    StartTime: string;
                    /**
                     * 时间段的结束时间。
                     * @example `12:00:00`
                     */
                    EndTime: string;
                    /**
                     * 该预约时段是否可以选择。
                     * @example `true`
                     */
                    Selectable: boolean;
                    /**
                     * 不可选文案提示。
                     * @example `约满`
                     */
                    SelectDisableTip: string;
                }[];
            }[];
            /**
             * 预估价格，单位：元，保留到小数点后两位。当入参传入预估重量时该字段有值。
             * @example `12.50`
             */
            PrePrice: string;
        }[];
    };
}
