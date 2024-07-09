export interface QueryResellerUserAlarmThresholdResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 报警类型：0（数值）、1（比例）
         * @example `0`
         */
        ThresholdType: number;
        /**
         * 预警额度（预警类型为0时有效）
         * @example `100`
         */
        ThresholdAmount: string;
        /**
         * 预警百分比，代表分子数值（预警类型为1时有效）
         * @example `10`
         */
        Numerator: number;
        /**
         * 预警百分比，代表分母数值（预警类型为1时有效）
         * @example `100`
         */
        Denominator: number;
    }[];
    /**
     * 总数量
     * @example `1`
     */
    Count: number;
    /**
     * 标识本次调用是否返回
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用返回code，一般为错误代码
     * @example `200`
     */
    Code: string;
    /**
     * 本次调用返回的消息，一般为错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 请求Id
     * @example `EAE08A27-386C-579E-966D-8853EC3C5D0E`
     */
    RequestId: string;
}
