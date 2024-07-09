export interface DescribeRiskScoreResponse {
    /**
     * Id of the request
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果
     */
    Data: {
        /**
         * 风险评分
         * @example `100`
         */
        Score: number;
        /**
         * 明细数组
         */
        DetailList: string[];
        /**
         * 违规行为
         * @example `MMFinance Exploiter`
         */
        HackingEvent: string;
        /**
         * 风险等级
         * @example `Severe`
         */
        RiskLevel: string;
    };
}
