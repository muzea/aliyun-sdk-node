export interface GetSensitiveDefineRuleConfigResponse {
    /**
     * 返回数据详情。
     */
    Data: {
        /**
         * 自定义配置ID。
         * @example `44616`
         */
        Id: number;
        /**
         * 检查项总数。
         * @example `100`
         */
        RuleCount: number;
        /**
         * 已选择的检查项数量。
         * @example `99`
         */
        SelectedCount: number;
        /**
         * 检查项规则树。
         */
        RuleTree: {
            /**
             * 检查项分类关键字。
             * @example `password`
             */
            ClassKey: string;
            /**
             * 检查项分类名称。
             * @example `password`
             */
            ClassName: string;
            /**
             * 检查项规则列表。
             */
            RuleList: {
                /**
                 * 规则关键字。
                 * @example `huaweicloud_ak`
                 */
                RuleKey: string;
                /**
                 * 规则名称。
                 * @example `huaweicloud_ak`
                 */
                RuleName: string;
                /**
                 * 是否勾选。取值：
                 * - **true**：已选。
                 * - **false**：未选。
                 * @example `true`
                 */
                Selected: boolean;
            }[];
        }[];
    };
    /**
     * 本次查询是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92****`
     */
    RequestId: string;
}
