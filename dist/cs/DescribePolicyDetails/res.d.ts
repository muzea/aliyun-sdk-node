export interface DescribePolicyDetailsResponse {
    /**
     * 策略治理规则名称
     * @example `ACKAllowedRepos`
     */
    name: string;
    /**
     * 规则模板类型
     * @example `k8s-general`
     */
    category: string;
    /**
     * 规则模板描述
     * @example `Requires container images to begin with a repo string from a specified list`
     */
    description: string;
    /**
     * 规则治理动作，取值：
     * - `enforce`：拦截违规部署
     * - `inform`：告警
     * @example `enforce`
     */
    action: string;
    /**
     * 规则治理等级，取值：
     * * `high`：高危
     * * `medium`：中危
     * * `low`：低危
     * @example `high`
     */
    severity: string;
    /**
     * 规则模板详情
     * @example `详情请参见请求示例`
     */
    template: string;
    /**
     * 是否需要配置策略，取值：
     * - 0：表示需要参数配置
     * - 1：表示无需参数配置
     * @example `0`
     */
    no_config: number;
    /**
     * 是否删除标志，取值：
     * - 0：表示未删除。
     * - 1：表示删除。
     * @example `0`
     */
    is_deleted: number;
}
