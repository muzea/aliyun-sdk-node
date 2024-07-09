export interface QueryAttackCountResponse {
    /**
     * 查询到的安全告警次数信息。
     */
    Data: {
        /**
         * ATT&CK攻击阶段ID。
         * @example `TA0043`
         */
        TacticId: string;
        /**
         * ATT&CK攻击阶段类型名称。
         * @example `数据收集`
         */
        TacticType: string;
        /**
         * 安全告警发生次数。
         * @example `28`
         */
        EventCount: number;
    }[];
    /**
     * 分页查询时，显示的当前页的数据条数。
     * @example `0`
     */
    Count: number;
    /**
     * 异常事件处理的结果状态。取值：
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * Code码
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D4BE7D77-5B02-5126-A684-A73F6CD3XXXX`
     */
    RequestId: string;
}
