export interface ModifyContainerDefenseRuleRequest {
    /**
     * 规则ID。
     * > 您可以调用[ListContainerDefenseRule](~~2590599~~)接口获取该参数。
     * @example `123`
     */
    "RuleId"?: number;
    /**
     * 规则动作，取值：
     * - **1**：告警。
     * - **2**：拦截。
     * @example `1`
     */
    "RuleAction"?: number;
    /**
     * 规则的开关状态。取值：
     * - **1**：表示开启。
     * - **0**：表示关闭。
     * @example `1`
     */
    "RuleSwitch"?: number;
    /**
     * 规则名称。
     * @example `text-001`
     */
    "RuleName"?: string;
    /**
     * 规则描述。
     * @example `防御规则。`
     */
    "Description"?: string;
    /**
     * 规则类型。取值：
     * - 1: 系统规则
     * - 2: 用户规则
     * @example `1`
     */
    "RuleType"?: number;
    /**
     * 白名单
     */
    "Whitelist"?: {
        /**
         * 文件hash。><notice>暂不支持此参数。></notice>
         */
        Hash: string[];
        /**
         * 加入白名单的文件路径列表。
         */
        Path: string[];
        /**
         * 需要加白的镜像。
         */
        Image: string[];
    };
    /**
     * 规则生效范围列表。
     */
    "Scope"?: {
        /**
         * 指定要生效的集群的ID。
         * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
         * @example `c54b***1501`
         */
        ClusterId: string;
        /**
         * 是否包含所有命名空间，取值：
         * - **0**：否。
         * - **1**：是。
         * @example `1`
         */
        AllNamespace: number;
        /**
         * 命名空间列表。
         */
        Namespaces: string[];
    }[];
}
