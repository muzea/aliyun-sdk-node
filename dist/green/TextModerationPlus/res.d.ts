export interface TextModerationPlusResponse {
    /**
     * Id of the request
     * @example `AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息
     * @example `OK`
     */
    Message: string;
    /**
     * 审核结果数据。
     */
    Data: {
        /**
         * 结果
         */
        Result: {
            /**
             * 标签
             * @example `porn`
             */
            Label: string;
            /**
             * 置信分值，0到100分，保留到小数点后2位。
             * @example `81.22`
             */
            Confidence: number;
            /**
             * 命中风险关键词
             * @example `XXX`
             */
            RiskWords: string;
            /**
             * 自定义关键词命中
             */
            CustomizedHit: {
                /**
                 * 库名称
                 * @example `测试词库`
                 */
                LibName: string;
                /**
                 * 命中的关键词，逗号分隔
                 * @example `xxx`
                 */
                KeyWords: string;
            }[];
        }[];
        /**
         * 建议
         */
        Advice: {
            /**
             * 回答
             * @example `XXX`
             */
            Answer: string;
            HitLabel: string;
            HitLibName: string;
        }[];
        /**
         * 分数。
         * @example `1`
         */
        Score: number;
        RiskLevel: string;
    };
}
