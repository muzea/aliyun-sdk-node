export interface DescribeDcdnWafGroupsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * WAF规则组总数。
     * @example `16`
     */
    TotalCount: number;
    /**
     * WAF规则组列表。
     */
    WafGroups: {
        /**
         * 修改时间。
         * @example `2020-04-12 22:25:11`
         */
        GmtModified: string;
        /**
         * 自定义WAF规则组ID。
         * @example `30000156`
         */
        Id: number;
        /**
         * WAF规则名称。
         * @example `DCDN-test-operation-reports-1`
         */
        Name: string;
        /**
         * 规则数量。
         * @example `452`
         */
        RuleCount: number;
        /**
         * 模板ID。
         * @example `1012`
         */
        TemplateId: number;
        /**
         * 是否开启订阅。取值范围：
         * - **on**：开启订阅。
         * - **off**：关闭订阅。
         * @example `on`
         */
        Subscribe: string;
        /**
         * 绑定该WAF规则组的策略。
         */
        Policies: {
            /**
             * 策略ID。
             * @example `30000165`
             */
            Id: number;
            /**
             * 策略名称。
             * @example `wasm-testmaster`
             */
            Name: string;
            /**
             * 策略类型。取值范围：
             * - **custom**：自定义策略。
             * - **default**：默认策略。
             * @example `default`
             */
            Type: string;
        }[];
    }[];
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小，默认**20**。
     * @example `20`
     */
    PageSize: number;
}
