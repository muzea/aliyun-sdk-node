export interface AddContainerDefenseRuleRequest {
    /**
     * 规则ID，创建时无需传入。
     * @example `500018`
     */
    "RuleId"?: number;
    /**
     * 规则命中时执行操作。取值：
     * - **1**：告警。
     * - **2**：阻断。
     * @example `1`
     */
    "RuleAction"?: number;
    /**
     * 规则开关。取值：
     * - **0**：关闭。
     * - **1**：开启。
     * @example `1`
     */
    "RuleSwitch"?: number;
    /**
     * 规则名称。
     * @example `auto-test-rule-lt9umq`
     */
    "RuleName"?: string;
    /**
     * 描述。
     * @example `test-proc-defense`
     */
    "Description"?: string;
    /**
     * 规则类型。取值：
     * - 2： 用户规则
     * ><notice>仅支持取值2。></notice>
     * @example `2`
     */
    "RuleType"?: number;
    /**
     * 白名单。
     */
    "Whitelist"?: {
        /**
         * 文件hash。><notice>暂不支持此参数。></notice>
         */
        Hash: string[];
        /**
         * 需要加白的文件路径列表。
         */
        Path: string[];
        /**
         * 需要加白的镜像列表。
         */
        Image: string[];
    };
    /**
     * 作用域。
     */
    "Scope"?: {
        /**
         * 集群ID。
         * > 您可以调用[DescribeGroupedContainerInstances](~~182997~~)接口获取该参数。
         * @example `8e2***75b`
         */
        ClusterId: string;
        /**
         * 是否包含所有命名空间。取值：
         * - **0**：（用Namespaces参数）指定需要包含的命名空间。
         * - **1**：包含所有命名空间。
         * @example `0`
         */
        AllNamespace: number;
        /**
         * 包含的命名空间列表。
         */
        Namespaces: string[];
    }[];
}
