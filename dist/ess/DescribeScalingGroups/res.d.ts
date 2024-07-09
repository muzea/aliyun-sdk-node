export interface DescribeScalingGroupsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 伸缩组的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 伸缩组信息的集合。
     */
    ScalingGroups: {
        /**
         * 伸缩组所属VPC的ID。
         * @example `vpc-bp1vwnn14rqpyiczj****`
         */
        VpcId: string;
        /**
         * 伸缩组的创建时间。
         * @example `2014-08-14T10:58Z`
         */
        CreationTime: string;
        /**
         * 伸缩组内所有ECS实例的数量。
         * @example `1`
         */
        TotalInstanceCount: number;
        /**
         * 伸缩组的名称。
         * @example `dyrSuvBOtO1dEdIlIbp****`
         */
        ScalingGroupName: string;
        /**
         * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：0~10。
         * @example `5`
         */
        SpotInstancePools: number;
        /**
         * 伸缩组中处于节省停机效果的实例数量。
         * @example `1`
         */
        StoppedCapacity: number;
        /**
         * 伸缩组满足最小按量实例数（ondemandbasecapacity）要求后，超出的实例中按量实例应占的比例，取值范围：0～100。
         * @example `20`
         */
        OnDemandPercentageAboveBaseCapacity: number;
        /**
         * 修改时间。
         * @example `2014-08-14T10:58Z`
         */
        ModificationTime: string;
        /**
         * 伸缩组内ECS实例台数的最小值。
         * @example `1`
         */
        MinSize: number;
        /**
         * 伸缩组的ID。
         * @example `asg-bp14wlu85wrpchm0****`
         */
        ScalingGroupId: string;
        /**
         * 当MultiAZPolicy取值为COST_OPTIMIZED时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。可能值：
         * - true：允许。
         * - false：不允许。
         * @example `true`
         */
        CompensateWithOnDemand: boolean;
        /**
         * 指定伸缩组的回收模式。可能值：
         *
         * - recycle：伸缩组的回收模式为停机回收模式。
         * - release：伸缩组的回收模式为释放模式。
         * - forcerelease：伸缩组的回收模式为强制释放模式。
         * 关于被移出实例的动作，请参见[RemoveInstances](~~25955~~)。
         * @example `recycle`
         */
        ScalingPolicy: string;
        /**
         * 伸缩组中处于移除挂起状态的ECS实例的数量。
         * @example `1`
         */
        RemovingWaitCapacity: number;
        /**
         * 已成功加入伸缩组，并正常运行的ECS实例数量。
         * @example `1`
         */
        ActiveCapacity: number;
        /**
         * 已有伸缩组内所需要的按量实例数的最小值，取值范围：0~1000。即当伸缩组内按量实例个数少于该最小值时，系统将优先创建按量实例。
         * @example `30`
         */
        OnDemandBaseCapacity: number;
        /**
         * 伸缩组中处于保护中状态的ECS实例的数量。
         * @example `1`
         */
        ProtectedCapacity: number;
        /**
         * 伸缩组的健康检查方式。可能值：
         * - NONE：不做健康检查。
         * - ECS：对伸缩组内的ECS实例做健康检查。
         * - LOAD_BALANCER: 根据负载均衡（暂不支持clb负载均衡类型）健康检查结果判断实例健康状态。
         * @example `ECS`
         */
        HealthCheckType: string;
        /**
         * 伸缩组的状态信息。可能值：
         * - Active：生效状态，处于生效状态的伸缩组才能接收执行伸缩规则的请求并触发伸缩活动。
         * - Inactive：失效状态，处于失效状态的伸缩组不接收任何执行伸缩规则的请求。
         * - Deleting：伸缩组正在删除，处于删除中状态的伸缩组不接收任何执行伸缩规则的请求，并且不能修改伸缩组相关参数。
         * @example `Active`
         */
        LifecycleState: string;
        /**
         * 是否开启了伸缩组删除保护。可能值：
         * - true：开启伸缩组删除保护，此时不能删除该伸缩组。
         * - false：关闭伸缩组删除保护。
         * @example `true`
         */
        GroupDeletionProtection: boolean;
        /**
         * 伸缩组内生效的伸缩配置的ID。
         * @example `asc-bp1et2qekq3ojr33****`
         */
        ActiveScalingConfigurationId: string;
        /**
         * 伸缩组管理的实例类型。
         * @example `ECS`
         */
        GroupType: string;
        /**
         * 多可用区伸缩组ECS实例扩缩容策略。可能值：
         *
         * - PRIORITY：根据您定义的虚拟交换机（VSwitchIds）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。
         * - COST_OPTIMIZED：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过CompensateWithOnDemand参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。
         *     > COST_OPTIMIZED仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
         * - BALANCE：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API RebalanceInstance平衡资源。
         * @example `PRIORITY`
         */
        MultiAZPolicy: string;
        /**
         * 正在移出伸缩组的ECS实例的数量。
         * @example `0`
         */
        RemovingCapacity: number;
        /**
         * 伸缩组中处于加入挂起状态的ECS实例的数量。
         * @example `1`
         */
        PendingWaitCapacity: number;
        /**
         * 伸缩组中处于备用状态的实例数量。
         * @example `1`
         */
        StandbyCapacity: number;
        /**
         * >该参数未开放使用。
         * @example `hostname`
         */
        CurrentHostName: string;
        /**
         * 正在加入伸缩组，还未完成相关配置的ECS实例的数量。
         * @example `0`
         */
        PendingCapacity: number;
        /**
         * 伸缩组使用的实例启动模板的ID。
         * @example `lt-m5e3ofjr1zn1aw7****`
         */
        LaunchTemplateId: string;
        /**
         * 当伸缩组设置了实例规格权重，表示伸缩组内所有ECS实例的加权容量总和。否则，表示伸缩组内所有ECS实例的数量
         * @example `1`
         */
        TotalCapacity: number;
        /**
         * 伸缩组内ECS实例的期望数量，伸缩组会自动将ECS实例数量维持在期望实例数。
         * @example `5`
         */
        DesiredCapacity: number;
        /**
         * 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。
         * @example `true`
         */
        SpotInstanceRemedy: boolean;
        /**
         * 伸缩组使用的实例启动模板的版本。
         * @example `Default`
         */
        LaunchTemplateVersion: string;
        /**
         * 伸缩组所属的地域的ID。
         * @example `cn-qingdao`
         */
        RegionId: string;
        /**
         * 伸缩组关联虚拟交换机的ID。
         * @example `vsw-bp1whw2u46cn8zubm****`
         */
        VSwitchId: string;
        /**
         * 伸缩组内ECS实例台数的最大值。
         * @example `2`
         */
        MaxSize: number;
        /**
         * 伸缩组默认的冷却时间。冷却时间内，该伸缩组不执行其它的伸缩活动，仅针对[云监控](~~35170~~)报警任务触发的伸缩活动有效。
         * @example `60`
         */
        DefaultCooldown: number;
        /**
         * 后端服务器组列表。
         */
        VServerGroups: {
            /**
             * 后端服务器组所属的负载均衡实例的ID。
             * @example `147b46d767c-cn-qingdao-cm5****`
             */
            LoadBalancerId: string;
            /**
             * 后端服务器组属性。
             */
            VServerGroupAttributes: {
                /**
                 * 后端服务器组属性。
                 * @example `rsp-bp12bjrny****`
                 */
                VServerGroupId: string;
                /**
                 * 后端服务器组的权重。
                 * @example `1`
                 */
                Weight: number;
                /**
                 * 负载均衡实例对外提供服务的端口号。
                 * @example `22`
                 */
                Port: number;
            }[];
        }[];
        /**
         * 扩展启动模板的实例规格信息。
         */
        LaunchTemplateOverrides: {
            /**
             * 指定实例规格的权重，即实例规格的单台实例在伸缩组中表示的容量大小。权重越大，满足期望容量所需的本实例规格的实例数量越少。
             * @example `4`
             */
            WeightedCapacity: number;
            /**
             * 指定的实例规格，会覆盖启动模板中的实例规格。
             * @example `ecs.c5.xlarge`
             */
            InstanceType: string;
            /**
             * 本参数用于指定实例启动模板覆盖规格（即`LaunchTemplateOverride.InstanceType`）的竞价价格上限。
             * >仅当`LaunchTemplateId`参数指定了启动模板时，该参数才生效。
             * @example `0.025`
             */
            SpotPriceLimit: number;
        }[];
        /**
         * ALB服务器组的相关信息集合。
         */
        AlbServerGroups: {
            /**
             * ALB服务器组的ID。
             * @example `sgp-ddwb0y0g6y9bjm****`
             */
            AlbServerGroupId: string;
            /**
             * 弹性伸缩将ECS实例添加到ALB服务器组后，ECS实例作为后端服务器的权重。
             * @example `100`
             */
            Weight: number;
            /**
             * 弹性伸缩将ECS实例添加到ALB服务器组后，ECS实例使用的端口号。
             * @example `80`
             */
            Port: number;
        }[];
        /**
         * 负载均衡服务器组的相关信息集合。
         * > 您可以通过此参数获取伸缩组关联的ALB类型服务组和NLB类型服务器组的相关信息集合。
         * >
         */
        ServerGroups: {
            /**
             * 服务器组ID。
             * @example `sgp-i9ouakeaerr*****`
             */
            ServerGroupId: string;
            /**
             * 服务器组类型。可能值：
             * - ALB：表示应用型负载均衡（Application Load Balancer）。
             * - NLB：表示网络型负载均衡（Network Load Balancer）。
             * @example `ALB`
             */
            Type: string;
            /**
             * 弹性伸缩将ECS实例添加到服务器组后，ECS实例作为后端服务器的权重。
             * @example `100`
             */
            Weight: number;
            /**
             * 弹性伸缩将ECS实例添加到ALB服务器组后，ECS实例使用的端口号。
             * @example `80`
             */
            Port: number;
        }[];
        /**
         * ECS实例移出伸缩组的策略的集合。可能值：
         * - OldestInstance：移出最早创建的ECS实例。
         * - NewestInstance：移出最新创建的ECS实例。
         * - OldestScalingConfiguration：移出最早由伸缩配置创建的ECS实例。
         */
        RemovalPolicies: string[];
        /**
         * 伸缩组关联RDS实例的ID。
         */
        DBInstanceIds: string[];
        /**
         * 伸缩组关联的负载均衡实例的ID列表。
         */
        LoadBalancerIds: string[];
        /**
         * 伸缩组关联虚拟交换机的ID集合。如果您使用了VSwitchIds参数，VSwitchId参数将被忽略。
         */
        VSwitchIds: string[];
        /**
         * 暂停中的流程，如果没有，则返回值为空。可能值：
         * - ScaleIn：缩容流程。
         * - ScaleOut：扩容流程。
         * - HealthCheck：健康检查。
         * - AlarmNotification：报警任务。
         * - ScheduledAction：定时任务。
         */
        SuspendedProcesses: string[];
        /**
         * 弹性伸缩是否停止执行伸缩组内的伸缩活动。可能值：
         * - true：停止执行伸缩组内的伸缩活动，说明该伸缩组已经连续扩缩容失败超过7天。您需要修改伸缩组或者伸缩配置，来恢复伸缩活动的执行。
         * - false：执行伸缩组内的伸缩活动。
         * @example `true`
         */
        SystemSuspended: boolean;
        /**
         * >该参数未开放使用。
         * @example `false`
         */
        IsElasticStrengthInAlarm: boolean;
        /**
         * 伸缩组关联的云监控应用分组ID。
         * @example `1497****`
         */
        MonitorGroupId: string;
        /**
         * 伸缩组的容量是否在多个可用区间均衡分布（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效），可能值：
         * - true：伸缩组的容量在多个可用区间均衡分布。
         * - false：伸缩组的容量不在多个可用区间均衡分布。
         * @example `false`
         */
        AzBalance: boolean;
        /**
         * 容量分配策略，决定了伸缩组如何选择可用的实例规格类型满足容量。容量分布策略同时对按量和抢占式容量生效（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效）。可能值：
         * - priority：按照配置的实例规格的顺序创建实例。
         * - lowestPrice：按照实例规格单位vCpu价格从低到高创建实例。
         * @example `priority`
         */
        AllocationStrategy: string;
        /**
         * 抢占式容量分布策略。您可以通过该参数单独指定抢占式容量的分布策略（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效）。可能值：
         * - priority：按照配置的实例规格的顺序创建实例。
         * - lowestPrice：按照实例规格单位vCpu价格从低到高创建实例。
         * 默认值：priority。
         * @example `lowestPrice`
         */
        SpotAllocationStrategy: string;
        /**
         * 实例在伸缩组中存活的最大时间。单位为秒。
         * 取值范围：0或`[86400, Integer.maxValue]`。其中，0表示清空MaxInstanceLifetime设置过的值（即未设置MaxInstanceLifetime值）。
         * 默认值：null。
         * >ECI类型的伸缩组或停机不收费的伸缩组不支持设置该参数。
         * @example `null`
         */
        MaxInstanceLifetime: number;
        /**
         * 自定义缩容策略Function函数ARN。仅当RemovalPolicies配置第一个移除策略为CustomPolicy时生效。
         * @example `acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name`
         */
        CustomPolicyARN: string;
        /**
         * 伸缩组中处于实例扩容前初始化状态的实例数量。
         * @example `0`
         */
        InitCapacity: number;
        /**
         * 伸缩组所属的资源组ID。
         * @example `rg-123****`
         */
        ResourceGroupId: string;
        /**
         * 负载均衡配置列表。
         */
        LoadBalancerConfigs: {
            /**
             * 负载均衡CLB（原SLB）实例的ID。
             * @example `lb-2zep8alpq5zq1a2xwyxxx`
             */
            LoadBalancerId: string;
            /**
             * 弹性伸缩将ECS实例添加到SLB服务器组后，ECS实例作为后端服务器的权重。权重越高，ECS实例将被分配到越多的访问请求。如果权重为0，则ECS实例不会收到访问请求。取值范围：0~100。
             * @example `10`
             */
            Weight: number;
        }[];
        /**
         * 是否开启期望实例数标识。可能值：
         * - true：已开启期望实例数。
         * - false：未开启期望实例数。
         * @example `false`
         */
        EnableDesiredCapacity: boolean;
        /**
         * 伸缩组的标签信息集合。
         */
        Tags: {
            /**
             * 伸缩组的标签键。
             * @example `Department`
             */
            TagKey: string;
            /**
             * 伸缩组的标签值。
             * @example `Finance`
             */
            TagValue: string;
            /**
             * 标识该标签是否为可传播标签，可能值：
             * - true：伸缩组上的标签只会传播到新创建的实例上，而不会传播到已经在伸缩组中运行的实例上。
             * - false：伸缩组上的标签不会传播到实例上。
             * 默认值：false。
             * @example `false`
             */
            Propagate: boolean;
        }[];
        /**
         * 伸缩组的健康检查方式。可能值：：
         * - NONE：不做健康检查。
         * - ECS：对伸缩组内的ECS实例做健康检查。
         * - LOAD_BALANCER: 根据负载均衡（暂不支持clb负载均衡类型）健康检查结果判断实例健康状态。
         */
        HealthCheckTypes: string[];
        /**
         * 伸缩组关联的数据库列表。
         */
        DBInstances: {
            /**
             * 数据库实例ID。
             * @example `rm-m5eqju85s45mu0***
            `
             */
            DBInstanceId: string;
            /**
             * 数据库类型。可能值：
             * - RDS。
             * - Redis。
             * - MongoDB。
             * @example `RDS`
             */
            Type: string;
            /**
             * 伸缩组向数据库添加的安全组白名单列表。
             */
            SecurityGroupIds: string[];
        }[];
    }[];
}
