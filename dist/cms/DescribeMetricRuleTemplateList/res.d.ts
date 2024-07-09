export interface DescribeMetricRuleTemplateListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `659401C0-6214-5C02-972A-CFA929D717B7`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `2`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Templates: {
        /**
         * 报警模板列表。
         */
        Template: {
            /**
             * 报警模板描述信息。
             * @example `ECS的CPU使用率`
             */
            Description: string;
            /**
             * 创建报警模板的时间戳。
             * 单位：毫秒。
             * @example `1646018798000`
             */
            GmtCreate: number;
            /**
             * 报警模板名称。
             * @example `ECS_Template1`
             */
            Name: string;
            /**
             * 报警模板版本。
             * 默认值：0。
             * @example `0`
             */
            RestVersion: number;
            /**
             * 修改报警模板的时间戳。
             * 单位：毫秒。
             * @example `1646054798000`
             */
            GmtModified: number;
            /**
             * 报警模板ID。
             * @example `70****`
             */
            TemplateId: number;
            ApplyHistories: {
                /**
                 * 报警模板应用到应用分组的历史记录。
                 */
                ApplyHistory: {
                    /**
                     * 应用分组ID。
                     * @example `3607****`
                     */
                    GroupId: number;
                    /**
                     * 应用分组名称。
                     * @example `ECS_Group`
                     */
                    GroupName: string;
                    /**
                     * 报警模板应用到应用分组的时间戳。
                     * 单位：毫秒。
                     * @example `1646055898000`
                     */
                    ApplyTime: number;
                }[];
            };
        }[];
    };
}
