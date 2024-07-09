export interface PutExporterRuleRequest {
    /**
     * 规则名称。
     * > 如果该规则名称与现有的名称重复，则表示修改，否则表示创建。
     * @example `MyRuleName`
     */
    "RuleName"?: string;
    /**
     * 云服务的数据命名空间。
     * >详情请参见[云服务监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace"?: string;
    /**
     * 监控项名称。
     * >>详情请参见[云服务监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName"?: string;
    /**
     * 导出数据的时间窗口。单位：秒。
     * > - 如果需要导出多个窗口，则使用英文逗号（,）分隔。
     * - 不支持导出小于60秒的数据。
     * @example `60,300`
     */
    "TargetWindows"?: string;
    /**
     * 导出规则描述。
     * @example `导出CPU指标`
     */
    "Describe"?: string;
    /**
     * 数据导出的目的地。N的取值范围：1~20。
     * @example `distName1`
     */
    "DstNames": string[];
}
