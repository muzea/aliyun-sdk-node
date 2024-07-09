export interface DescribeScalingInstancesResponse {
    /**
     * 请求ID。
     * @example `B13527BF-1FBD-4334-A512-20F5E9D3****`
     */
    RequestId: string;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前伸缩组中，运行状态的抢占式实例总数。
     * @example `4`
     */
    TotalSpotCount: number;
    /**
     * ECS实例的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * ECS实例信息组成的集合。
     */
    ScalingInstances: {
        /**
         * ECS实例加入伸缩组的时间，精确到分钟。
         * @example `2020-05-18T03:11Z`
         */
        CreationTime: string;
        /**
         * 负载均衡实例权重。
         * @example `50`
         */
        LoadBalancerWeight: number;
        /**
         * 实例启动模板的ID。
         * @example `lt-m5e3ofjr1zn1aw7****`
         */
        LaunchTemplateId: string;
        /**
         * ECS实例的ID。
         * @example `i-bp109k5j3dum1ce6****`
         */
        InstanceId: string;
        /**
         * 抢占式实例的抢占策略。可能值：
         * - SpotWithPriceLimit：设置上限价格的抢占式实例。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
         * @example `SpotWithPriceLimit`
         */
        SpotStrategy: string;
        /**
         * 实例启动模板的版本。
         * @example `1`
         */
        LaunchTemplateVersion: string;
        /**
         * ECS实例在伸缩组中的健康状态，未处于运行中（Running）状态的ECS实例会被判定为不健康的ECS实例，可能值：
         * - Healthy：健康的ECS实例。
         * - Unhealthy：不健康的ECS实例。
         * 弹性伸缩会自动移出伸缩组中不健康的ECS实例，并释放自动创建的ECS实例。
         * 是否释放手动添加的ECS实例由其托管状态决定。如果实例生命周期未托管给伸缩组，只移出实例但不释放。如果实例生命周期托管给伸缩组，移出并释放实例。
         * > 请确保账号可用额度充足。如果账号欠费，所有后付费的ECS实例（包括按量付费实例和抢占式实例）都会停机，甚至被释放。欠费后伸缩组内ECS实例状态变化，请参见[欠费说明](~~170589~~)。
         * @example `Healthy`
         */
        HealthStatus: string;
        /**
         * 所属伸缩组的ID。
         * @example `asg-bp1igpak5ft1flyp****`
         */
        ScalingGroupId: string;
        /**
         * ECS实例的预热状态，可能值：
         *
         * - NoNeedWarmup：不需要预热。
         * - WaitingForInstanceWarmup：等待预热结束。
         * - InstanceWarmupFinish：预热结束。
         *
         * @example `NoNeedWarmup`
         */
        WarmupState: string;
        /**
         * ECS实例在伸缩组中的生命周期状态，可能值：
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
        LifecycleState: string;
        /**
         * ECS实例的创建方式，可能值：
         * - AutoCreated：弹性伸缩根据实例配置信息来源自动创建的ECS实例。
         * - Attached：不是通过弹性伸缩服务创建，而是由您手动添加到伸缩组中的ECS实例。
         * @example `AutoCreated`
         */
        CreationType: string;
        /**
         * ECS实例所属的可用区ID。
         * @example `cn-hangzhou-g`
         */
        ZoneId: string;
        /**
         * 关联伸缩配置的ID。
         * @example `asc-bp1i65jd06v04vdh****`
         */
        ScalingConfigurationId: string;
        /**
         * 手动添加实例到伸缩组时，是否将实例托管给伸缩组，托管状态的手动添加实例，在移除伸缩组（不包括手动移除）时，将执行释放操作。可能值：
         * -  true：将实例托管给伸缩组。
         * -  false：不将实例托管给伸缩组。
         * @example `true`
         */
        Entrusted: boolean;
        /**
         * 实例规格的权重，即实例规格的单台实例在伸缩组中表示的容量大小。权重越大，满足期望容量所需的本实例规格的实例数量越少。
         * @example `4`
         */
        WeightedCapacity: number;
        /**
         * ECS实例加入伸缩组的时间，精确到秒。
         * @example `2020-05-18T03:11:39Z`
         */
        CreatedTime: string;
        /**
         * ECS实例加入伸缩组时，伸缩活动的ID。
         * @example `asa-bp1c9djwrgxjyk31****`
         */
        ScalingActivityId: string;
        /**
         * 伸缩组内的实例标识，与ECS实例或ECI实例的ID一一对应。
         * @example `asi-j6cj1gcte640ekhb****`
         */
        ScalingInstanceId: string;
        /**
         * 伸缩组中实例的内网IP地址。
         * @example `1**.2*.1**.2**`
         */
        PrivateIpAddress: string;
    }[];
}
