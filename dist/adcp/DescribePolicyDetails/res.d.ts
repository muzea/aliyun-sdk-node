export interface DescribePolicyDetailsResponse {
    /**
     * 请求ID。
     * @example `2D676EFC-8C04-5CCE-A08E-BB97D24B47E8`
     */
    RequestId: string;
    /**
     * 策略治理规则。
     */
    Policy: {
        /**
         * 策略治理规则名称。
         * @example `ACKAllowedRepos`
         */
        Name: string;
        /**
         * 规则模板类型。
         * @example `k8s-general
        `
         */
        Category: string;
        /**
         * 规则模板描述。
         * @example `Requires container images to begin with a repo string from a specified list
        `
         */
        Description: string;
        /**
         * 规则治理动作，取值：
         * - enforce：拦截违规部署。
         * - inform：告警。
         * @example `enforce`
         */
        Action: string;
        /**
         * 规则治理等级。
         * @example `high`
         */
        Severity: string;
        /**
         * 规则模板详情。
         * @example `详情参考返回内容。`
         */
        Template: string;
        /**
         * 是否需要配置策略，取值：
         * - 0：表示需要参数配置。
         * - 1：表示无需参数配置。
         * @example `0`
         */
        NoConfig: number;
        /**
         * 创建时间。
         * @example `2021-11-18T10:52:17+08:00`
         */
        Created: string;
        /**
         * 最后更新时间。
         * @example `2021-11-18T10:52:17+08:00`
         */
        Updated: string;
    };
}
