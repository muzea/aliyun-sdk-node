export interface DescribeScalingInstancesRequest {
    /**
     * 伸缩组所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId"?: string;
    /**
     * 关联伸缩配置的ID。
     * @example `asc-bp1i65jd06v04vdh****`
     */
    "ScalingConfigurationId"?: string;
    /**
     * ECS实例在伸缩组中的健康状态，未处于运行中（Running）状态的ECS实例会被判定为不健康的ECS实例，取值范围：
     * - Healthy：健康的ECS实例。
     * - Unhealthy：不健康的ECS实例。
     * 弹性伸缩会自动移出伸缩组中不健康的ECS实例，并释放自动创建的ECS实例。
     * 是否释放手动添加的ECS实例由其托管状态决定。如果实例生命周期未托管给伸缩组，只移出实例但不释放。如果实例生命周期托管给伸缩组，移出并释放实例。
     * > 请确保账号可用额度充足。如果账号欠费，所有后付费的ECS实例（包括按量付费实例和抢占式实例）都会停机，甚至被释放。欠费后伸缩组内ECS实例状态变化，请参见[欠费说明](~~170589~~)。
     * @example `Healthy`
     */
    "HealthStatus"?: string;
    /**
     * ECS实例在伸缩组中的生命周期状态，取值范围：
     *
     * - InService：已成功加入伸缩组并正常提供服务。
     * - Pending：加入中。ECS实例加入伸缩组时包括加入负载均衡实例的后端服务器、RDS实例的访问白名单等过程。
     * - Pending:Wait：加入挂起中。如果伸缩组内创建了适用于弹性扩张活动的生命周期挂钩，ECS实例在加入伸缩组时被挂起并等待挂钩超时时间结束。
     * - Protected：保护中。ECS实例正常提供服务，但弹性伸缩不管理ECS实例的生命周期，而是由您手动管理。
     * - Standby：备用中。ECS实例不提供服务，负载均衡权重被置为零，且弹性伸缩不管理ECS实例的生命周期，而是由您手动管理。
     * - Stopped：停用中。ECS实例已停机，不提供服务。
     * - Removing：移出中。ECS实例移出伸缩组时包括移出负载均衡实例的后端服务器、RDS实例的访问白名单等过程。
     * - Removing:Wait：移出挂起中。如果伸缩组内创建了适用于弹性收缩活动的生命周期挂钩，ECS实例在移出伸缩组时被挂起并等待挂钩超时时间结束。
     * @example `InService`
     */
    "LifecycleState"?: string;
    /**
     * 伸缩组中实例的创建方式，取值范围：
     * - AutoCreated：弹性伸缩根据实例配置信息来源自动创建的ECS实例。
     * - Attached：不是通过弹性伸缩服务创建，而是由您手动添加到伸缩组中的ECS实例。
     * - Managed：不是通过弹性伸缩服务创建，而是由您手动添加到伸缩组中的托管实例。
     * @example `AutoCreated`
     */
    "CreationType"?: string;
    /**
     * ECS实例列表的页码，起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 伸缩活动的ID。
     * @example `asa-bp1c9djwrgxjyk31****`
     */
    "ScalingActivityId"?: string;
    /**
     * ECS实例的ID。
     * 返回查询结果时忽略失效的InstanceId，并且不报错。
     */
    "InstanceIds"?: string[];
    /**
     * 伸缩组中实例的创建方式，此参数和CreationType参数只能同时传入一个。
     */
    "CreationTypes"?: string[];
    /**
     * ECS实例在伸缩组中的生命周期状态列表，此参数和LifecycleState参数只能同时传入一个，建议您使用此参数。
     */
    "LifecycleStates"?: string[];
}
