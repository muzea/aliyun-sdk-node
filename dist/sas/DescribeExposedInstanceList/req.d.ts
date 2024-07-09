export interface DescribeExposedInstanceListRequest {
    /**
     * 分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定要查询的服务器分组ID。
     * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口查询服务器分组ID。
     * @example `9535356`
     */
    "GroupId"?: number;
    /**
     * 指定要查询的服务器是否存在漏洞。取值：
     * - **true**：存在
     * - **false**：不存在
     * @example `true`
     */
    "VulStatus"?: boolean;
    /**
     * ECS实例在伸缩组中的健康状态，未处于运行中（Running）状态的ECS实例会被判定为不健康的ECS实例，取值范围：
     * - Healthy：健康的ECS实例。
     * - Unhealthy：不健康的ECS实例。
     * 弹性伸缩会自动移出伸缩组中不健康的ECS实例，并释放自动创建的ECS实例。
     * 是否释放手动添加的ECS实例由其托管状态决定。如果实例生命周期未托管给伸缩组，只移出实例但不释放。如果实例生命周期托管给伸缩组，移出并释放实例。
     * > 请确保账号可用额度充足。如果账号欠费，所有后付费的ECS实例（包括按量付费实例和抢占式实例）都会停机，甚至被释放。欠费后伸缩组内ECS实例状态变化，请参见[欠费说明](~~170589~~)。
     * @example `Unhealthy`
     */
    "HealthStatus"?: boolean;
    /**
     * 指定要查询的暴露在互联网中的系统组件名称。
     * @example `openssl`
     */
    "ExposureComponent"?: string;
    /**
     * 指定要查询的暴露端口。
     * @example `22`
     */
    "ExposurePort"?: string;
    /**
     * 指定要查询的服务器公网IP。
     * @example `116.12.XX.XX`
     */
    "ExposureIp"?: string;
    /**
     * 指定要查询的服务器实例ID。
     * @example `i-bp1g6wxdwps7s9dz****`
     */
    "InstanceId"?: string;
    /**
     * 指定要查询的服务器名称。
     * @example `abc_centos7.2_005`
     */
    "InstanceName"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `16670360956*****`
     */
    "ResourceDirectoryAccountId"?: number;
}
