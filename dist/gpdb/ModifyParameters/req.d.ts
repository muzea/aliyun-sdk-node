export interface ModifyParametersRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 需要修改的参数名称和参数值。格式为`<参数名称>:<参数值>`。
     * 您可以通过[DescribeParameters](~~208310~~)接口查看支持修改的配置参数。
     * @example `{"statement_timeout":"11800010"}`
     */
    "Parameters": string;
    /**
     * 是否强制重启实例。取值说明：
     * - **true**：强制重启。
     * - **false**（默认）：不强制重启。
     * @example `false`
     */
    "ForceRestartInstance"?: boolean;
}
