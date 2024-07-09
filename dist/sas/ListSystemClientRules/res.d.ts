export interface ListSystemClientRulesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C43CA30F-EF67-51BB-8C95-F31B8303****`
     */
    RequestId: string;
    /**
     * 查询结果页面的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `17`
         */
        TotalCount: number;
    };
    /**
     * 规则列表。
     */
    RuleList: {
        /**
         * 规则状态。取值：
         * - **online**：生效
         * - **offline**：未生效
         * @example `online`
         */
        Status: number;
        /**
         * 规则类型。取值：
         * - **1**：alihips
         * - **2**：alinet
         * - **3**：alidetect
         * - **4**：alisecguard
         * @example `alihips`
         */
        RuleType: number;
        /**
         * 操作系统类型。取值：
         * - **windows**：widows
         * - **linux**：linux
         * - **all**：全部
         * @example `linux`
         */
        Platform: string;
        /**
         * 规则对应的开关ID。
         * @example `USER-ENABLE-SWITCH-TYPE_****`
         */
        SwitchId: string;
        /**
         * 规则id。
         * @example `30****`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `规则****`
         */
        RuleName: string;
        /**
         * 规则聚类名称。
         * @example `初始入口`
         */
        AggregationName: string;
        /**
         * 规则的描述信息。
         * @example `支持告警或拦截存在高危漏洞的镜像在集****`
         */
        Description: string;
        /**
         * 策略列表。
         */
        Policies: {
            /**
             * 策略名称。
             * @example `系统自启动任务****`
             */
            PolicyName: string;
            /**
             * 策略键。
             * @example `system_auto_****`
             */
            PolicyKey: string;
        }[];
    }[];
}
