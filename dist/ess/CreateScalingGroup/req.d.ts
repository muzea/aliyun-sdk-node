export interface CreateScalingGroupRequest {
    /**
     * 伸缩组的名称，同一地域下伸缩组名称唯一。
     * 长度为2~64个英文或中文字符，以数字、大小写英文字母或中文开头，可以包含数字、下划线（_）、短划线（-）和半角句号（.）。
     * 默认值为ScalingGroupId的值。
     * @example `scalinggroup****`
     */
    "ScalingGroupName"?: string;
    /**
     * 实例启动模板ID，用于指定伸缩组从实例启动模板获取启动配置信息。
     * @example `lt-m5e3ofjr1zn1aw7****	`
     */
    "LaunchTemplateId"?: string;
    /**
     * 实例启动模板的版本。取值范围：
     * - 固定的模板版本号。
     * - Default：始终使用模板默认版本。
     * - Latest：始终使用模板最新版本。
     * @example `Default`
     */
    "LaunchTemplateVersion"?: string;
    /**
     * 实例的ID。创建伸缩组时，将从指定的实例获取所需的配置信息，并自动创建伸缩配置。
     * @example `i-28wt4****`
     */
    "InstanceId"?: string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 伸缩组内实例台数的最小值，当伸缩组内实例数小于MinSize的值时，弹性伸缩会自动创建实例。
     * > MinSize的值必须小于或等于MaxSize的值。
     * @example `2`
     */
    "MinSize": number;
    /**
     * 伸缩组内实例台数的最大值，当伸缩组内实例数大于MaxSize的值时，弹性伸缩会自动移出实例。
     * <props="china">MaxSize的取值范围和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以设置的组内最大实例数**对应的配额值。</props>
     * <props="intl">MaxSize的取值范围和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以设置的组内最大实例数**对应的配额值。</props>
     * <props="partner">MaxSize的取值范围和弹性伸缩使用情况有关，请前往配额中心查看**单个伸缩组可以设置的组内最大实例数**对应的配额值。</props>
     * 如果**单个伸缩组可以设置的组内最大实例数**对应的配额值为2000，则MaxSize的取值范围为0~2000。
     * @example `20`
     */
    "MaxSize": number;
    /**
     * 一次伸缩活动（添加或移出实例）结束后的一段冷却时间。取值范围：0~86400，单位：秒。
     * 冷却时间内，该伸缩组不执行其他的伸缩活动，仅针对云监控报警任务触发的伸缩活动有效。
     * 默认值：300。
     * @example `300`
     */
    "DefaultCooldown"?: number;
    /**
     * 传统型负载均衡CLB（原SLB）实例ID。取值可以是由多台CLB实例ID组成一个JSON数组，ID之间用半角逗号（,）隔开。
     * <props="china">单个伸缩组可以关联的CLB总数和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以关联的负载均衡实例总数**对应的配额值。</props>
     * <props="intl">单个伸缩组可以关联的CLB总数和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以关联的负载均衡实例总数**对应的配额值。</props>
     * <props="partner">单个伸缩组可以关联的CLB总数和弹性伸缩使用情况有关，请前往配额中心查看**单个伸缩组可以关联的负载均衡实例总数**对应的配额值。</props>
     * @example `["lb-bp1u7etiogg38yvwz****", "lb-bp168cqrux9ai9l7f****", "lb-bp1jv3m9zvj22ufxp****"]`
     */
    "LoadBalancerIds"?: string;
    /**
     * RDS实例ID。取值可以是由多台RDS实例ID组成一个JSON数组，ID之间用半角逗号（,）隔开。
     * <props="china">单个伸缩组可以关联的RDS实例总数和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以关联的RDS实例总数**对应的配额值。</props>
     * <props="intl">单个伸缩组可以关联的RDS实例总数和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以关联的RDS实例总数**对应的配额值。</props>
     * <props="partner">单个伸缩组可以关联的RDS实例总数和弹性伸缩使用情况有关，请前往配额中心查看**单个伸缩组可以关联的RDS实例总数**对应的配额值。</props>
     * @example `["rm-bp142f86de0t7****", "rm-bp18l1z42ar4o****", "rm-bp1lqr97h4aqk****"]`
     */
    "DBInstanceIds"?: string;
    /**
     * 指定实例移出策略的筛选策略。取值范围：
     * - OldestInstance：移出最早加入伸缩组的ECS实例。
     * - NewestInstance：移出最新加入伸缩组的ECS实例。
     * - OldestScalingConfiguration：移出最早伸缩配置创建的ECS实例。
     * - CustomPolicy：基于自定义缩容策略Function函数移除ECS实例。
     * OldestScalingConfiguration中提到的伸缩配置泛指组内实例配置信息来源，包括伸缩配置和启动模板。CustomPolicy仅支持设置为首位移除策略，当指定CustomPolicy需同时指定CustomPolicyARN参数。
     * > 伸缩组移出ECS实例还受伸缩组的扩缩容策略（MultiAZPolicy）影响。更多信息，请参见[设置移出实例的组合策略](~~254822~~)。
     */
    "RemovalPolicies"?: string[];
    /**
     * 虚拟交换机的ID。指定后，伸缩组的网络类型为专有网络。
     * > 当伸缩组未指定VSwitchId或VSwitchIds参数时，伸缩组的网络类型默认为经典网络。
     * @example `vsw-bp14zolna43z266bq****`
     */
    "VSwitchId"?: string;
    /**
     * 多可用区伸缩组ECS实例扩缩容策略。取值范围：
     *
     * - PRIORITY：先指定的虚拟交换机（VSwitchIds）优先级最高。弹性伸缩优先在优先级最高的交换机所在可用区尝试扩缩容，如果无法扩缩容，则自动在下一优先级的交换机所在可用区进行扩缩容。
     * - COST_OPTIMIZED：扩容时弹性伸缩按vCPU单价从低到高尝试创建ECS实例，缩容时按vCPU单价从高到低尝试移出ECS实例。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过CompensateWithOnDemand参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。
     *     > COST_OPTIMIZED仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
     * - BALANCE：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API [RebalanceInstance](~~71516~~)平衡资源。
     *     >如果`MultiAZPolicy`参数取值为`BALANCE`时，其和`MultiAZPolicy`参数取值为`COMPOSABLE`策略且`AzBalance`参数取值为`true`时的效果相同。
     * - COMPOSABLE：是一种组合策略，您可以根据需要自主组合上述多可用区伸缩组ECS实例的扩缩容策略。或者进一步指定参数，对伸缩组的容量进行更精细地控制。
     * 默认值：PRIORITY。
     * @example `PRIORITY`
     */
    "MultiAZPolicy"?: string;
    /**
     * 伸缩组的健康检查方式。取值范围：
     * - NONE：不做健康检查。
     * - ECS：对伸缩组内的ECS实例做健康检查。
     * - ECI：对伸缩组内的ECI实例做健康检查。
     * - LOAD_BALANCER: 根据负载均衡（暂不支持CLB负载均衡类型）健康检查结果判断实例健康状态。
     * 默认值：ECS。
     * @example `ECS`
     */
    "HealthCheckType"?: string;
    /**
     * 指定伸缩组的回收模式。取值范围：
     *
     * - recycle：伸缩组的回收模式为停机回收模式。
     * - release：伸缩组的回收模式为释放模式。
     * - forcerelease：伸缩组的回收模式为强制释放模式。
     *     >选择forcerelease后，在弹性收缩活动中系统会强制释放`运行中`（Running）的实例。强制释放实例相当于断电操作，会导致该实例内存以及存储中的临时数据被擦除，数据无法恢复，请您谨慎选择。
     * - forcerecycle：伸缩组的回收模式为强制停机回收模式。
     *     >选择forcerecycle后，在弹性收缩活动中系统会强制关机`运行中`（Running）的实例。强制关机相当于断电操作，会导致该实例内存以及存储中的临时数据被擦除，数据无法恢复，请您谨慎选择。
     * ScalingPolicy指定伸缩组的回收模式，但实例被移出伸缩组时的具体动作，由RemoveInstances的RemovePolicy参数决定。更多信息，请参见[RemoveInstances](~~25955~~)。
     * @example `recycle`
     */
    "ScalingPolicy"?: string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 伸缩组所需要按量实例个数的最小值，取值范围：0~1000。当按量实例个数少于该值时，将优先创建按量实例。
     * @example `30`
     */
    "OnDemandBaseCapacity"?: number;
    /**
     * 伸缩组满足最小按量实例数（OnDemandBaseCapacity）要求后，超出的实例中按量实例应占的比例，取值范围：0～100。
     * @example `20`
     */
    "OnDemandPercentageAboveBaseCapacity"?: number;
    /**
     * 是否开启补齐抢占式实例的弹性伸缩策略。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。
     * @example `true`
     */
    "SpotInstanceRemedy"?: boolean;
    /**
     * 当MultiAZPolicy取值为COST_OPTIMIZED时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值范围：
     * - true：允许。
     * - false：不允许。
     * 默认值：true。
     * @example `true`
     */
    "CompensateWithOnDemand"?: boolean;
    /**
     * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：1~10。
     * @example `5`
     */
    "SpotInstancePools"?: number;
    /**
     * 伸缩组内实例的期望数量，伸缩组会自动将实例数量维持在期望实例数。取值不得大于MaxSize，且不得小于MinSize。
     * @example `5`
     */
    "DesiredCapacity"?: number;
    /**
     * 是否开启伸缩组删除保护。取值范围：
     * - true：开启伸缩组删除保护，此时不能删除该伸缩组。
     * - false：关闭伸缩组删除保护。
     * 默认值：false。
     * @example `true`
     */
    "GroupDeletionProtection"?: boolean;
    /**
     * 伸缩组管理的实例类型。取值范围：
     * - ECS：伸缩组内管理的伸缩为ECS实例。
     * - ECI：伸缩组内管理的伸缩为ECI实例。
     * 默认值：ECS。
     * @example `ECS`
     */
    "GroupType"?: string;
    /**
     * ECI实例ID，即容器组ID。
     * @example `eci-uf6fonnghi50u374****`
     */
    "ContainerGroupId"?: string;
    /**
     * 一台或多台虚拟交换机的ID。如果您使用了VSwitchIds参数，VSwitchId参数将被忽略。指定后，伸缩组的网络类型为专有网络。
     * 指定多台虚拟交换机时：
     * - 所属的VPC必须相同。
     * - 所属的可用区可以不同。
     * - 虚拟交换机的优先级按照数字升序排序，1表示最高优先级。当优先级较高的虚拟交换机所在可用区无法创建实例时，自动选择下一优先级的虚拟交换机创建实例。
     * > 当伸缩组未指定VSwitchId或VSwitchIds参数时，伸缩组的网络类型默认为经典网络。
     */
    "VSwitchIds"?: string[];
    /**
     * 生命周期挂钩信息列表。
     */
    "LifecycleHooks"?: {
        /**
         * 等待状态结束后的下一步动作。取值范围：
         * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
         * - ABANDON：直接释放弹性扩张活动创建出来的实例或者直接将弹性收缩活动中的实例从伸缩组移除。
         * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，DefaultResult取值为ABANDON的生命周期挂钩触发的等待状态结束时，会提前结束其它对应的等待状态。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
         * 默认值：CONTINUE。
         * @example `CONTINUE`
         */
        DefaultResult: string;
        /**
         * 生命周期挂钩名称，指定后不支持修改，未指定时默认与生命周期挂钩ID相同。
         * @example `lifecyclehook****`
         */
        LifecycleHookName: string;
        /**
         * 生命周期挂钩适用的伸缩活动类型，取值范围：
         * - SCALE_OUT：伸缩组弹性扩张活动。
         * - SCALE_IN：伸缩组弹性收缩活动。
         * > 若伸缩组指定生命周期挂钩，此参数必选，其他相关参数可选。
         * @example `SCALE_OUT`
         */
        LifecycleTransition: string;
        /**
         * 伸缩活动的等待状态的固定字符串信息。参数长度不超过4096个字符。弹性伸缩每次推送消息到通知对象时，会同时发送您预先指定的notificationmetadata参数值，便于管理和标记不同类别的通知信息。当您同时指定了notificationarn参数时，notificationmetadata才有效。
         * @example `Test`
         */
        NotificationMetadata: string;
        /**
         * 生命周期挂钩通知对象标识符，支持消息服务MNS队列或主题，参数取值格式：acs:ess:{region}:{account-id}:{resource-relative-id}。
         * - region：伸缩组所在的地域。
         * - account-id：阿里云账号ID。
         * 例如：
         * - MNS队列：acs:ess:{region}:{account-id}:queue/{queuename}。
         * - MNS主题：acs:ess:{region}:{account-id}:topic/{topicname}。
         * @example `acs:ess:cn-hangzhou:1111111111:queue/queue2`
         */
        NotificationArn: string;
        /**
         * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
         * 创建了生命周期挂钩后，您可以调用RecordLifecycleActionHeartbeat延长实例的等待时间，也可以调用CompleteLifecycleAction提前结束伸缩活动的等待状态。
         * 默认值：600。
         * @example `600`
         */
        HeartbeatTimeout: number;
    }[];
    /**
     * 伸缩组关联虚拟服务器组的信息集合。
     */
    "VServerGroups"?: {
        /**
         * 后端服务器组属性。
         */
        VServerGroupAttributes: {
            /**
             * 虚拟服务器组ID。
             * @example `rsp-bp1443g77****`
             */
            VServerGroupId: string;
            /**
             * 弹性伸缩将实例添加到虚拟服务器组后，实例作为后端服务器的权重。权重越高，实例将被分配到越多的访问请求。如果权重为0，则实例不会收到访问请求。取值范围：0~100。
             * 默认值：50。
             * @example `100`
             */
            Weight: number;
            /**
             * 弹性伸缩将实例添加到虚拟服务器组后，实例使用的端口号，取值范围：1~65535。
             * @example `22`
             */
            Port: number;
        }[];
        /**
         * 虚拟服务器组所属传统型负载均衡CLB（原SLB）实例的ID。
         * @example `lb-bp1u7etiogg38yvwz****`
         */
        LoadBalancerId: string;
    }[];
    /**
     * 伸缩组的标签信息集合。
     */
    "Tags"?: {
        /**
         * 伸缩组的标签键。
         * @example `Department`
         */
        Key: string;
        /**
         * 伸缩组的标签值。
         * @example `Finance
        `
         */
        Value: string;
        /**
         * 标识该标签是否为可传播标签，取值范围：
         * - true：伸缩组上的标签只会传播到新创建的实例上，而不会传播到已经在伸缩组中运行的实例上。
         * - false：伸缩组上的标签不会传播到实例上。
         * 默认值：false。
         * @example `false`
         */
        Propagate: boolean;
    }[];
    /**
     * 扩展启动模板的实例规格信息。
     */
    "LaunchTemplateOverrides"?: {
        /**
         * 当您需要伸缩组按照实例规格容量进行伸缩时，请同时指定本参数和LaunchTemplateOverrides.WeightedCapacity。
         * 本参数用于指定实例规格，会覆盖启动模板中的实例规格。
         * > 仅当LaunchTemplateId参数指定了启动模板时，本参数生效。
         * InstanceType的取值范围：在售的ECS实例规格。
         * @example `ecs.c5.xlarge
        `
         */
        InstanceType: string;
        /**
         * 当您需要伸缩组按照实例规格容量进行伸缩时，在指定LaunchTemplateOverrides.InstanceType后，再指定本参数。
         * 本参数用于指定实例规格的权重，即实例规格的单台实例在伸缩组中表示的容量大小。权重越大，满足期望容量所需的本实例规格的实例数量越少。
         * 由于每个实例规格的vCPU个数、内存大小等性能指标会有差异，您可以根据自身需求，给不同的实例规格配置不同的权重。
         * 例如：
         * - 当前容量：0。
         * - 期望容量：6。
         * - ecs.c5.xlarge规格容量：4。
         * 为满足期望容量，伸缩组将为用户扩容2台ecs.c5.xlarge实例。
         * > 扩容时伸缩组的容量不得超过最大容量（MaxSize）与实例规格的最大权重之和。
         * WeightedCapacity的取值范围：1~500。
         * @example `4`
         */
        WeightedCapacity: number;
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
    "AlbServerGroups"?: {
        /**
         * ALB服务器组的ID。
         * 一个伸缩组支持关联的ALB服务器组数量有限，如需查看或手动申请提升配额值，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)。
         * @example `sgp-ddwb0y0g6y9bjm****`
         */
        AlbServerGroupId: string;
        /**
         * 弹性伸缩将实例添加到ALB服务器组后，实例作为后端服务器的权重。权重越高，实例将被分配到越多的访问请求。如果权重为0，则实例不会收到访问请求。取值范围：0~100。
         * @example `100`
         */
        Weight: number;
        /**
         * 弹性伸缩将实例添加到ALB服务器组后，实例使用的端口号，取值范围：1~65535。
         * @example `22`
         */
        Port: number;
    }[];
    /**
     * 负载均衡服务器组的相关信息集合。
     * > 不支持同时在AlbServerGroups和ServerGroups中设置相同的服务器组信息。
     */
    "ServerGroups"?: {
        /**
         * 服务器组ID。
         * @example `sgp-5yc3bd9lfyh*****`
         */
        ServerGroupId: string;
        /**
         * 服务器组类型。取值范围：
         * - ALB：表示应用型负载均衡（Application Load Balancer）。
         * - NLB：表示网络型负载均衡（Network Load Balancer）。
         * @example `ALB`
         */
        Type: string;
        /**
         * 弹性伸缩将实例添加到服务器组后，实例作为后端服务器的权重。取值范围：0~100。
         * 权重越高，实例将被分配到越多的访问请求。如果权重为0，则实例不会收到访问请求。
         * @example `100`
         */
        Weight: number;
        /**
         * 弹性伸缩将实例添加到服务器组后，实例使用的端口号，取值范围：1~65535。
         * @example `22`
         */
        Port: number;
    }[];
    /**
     * 伸缩组的容量是否在多个可用区间均衡分布（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效），取值范围：
     * - true：伸缩组的容量在多个可用区间均衡分布。
     * - false：伸缩组的容量不在多个可用区间均衡分布。
     * >如果`MultiAZPolicy`参数取值为`COMPOSABLE`策略，并且`AzBalance`参数取值为`true`时，其效果和`MultiAZPolicy`参数取值为`BALANCE`相同。
     * 默认值：false。
     * @example `false`
     */
    "AzBalance"?: boolean;
    /**
     * 容量分配策略，决定了伸缩组如何选择可用的实例规格类型满足容量。容量分布策略同时对按量和抢占式容量生效（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效）。取值范围：
     * - priority：按照配置的实例规格的顺序创建实例。
     * - lowestPrice：按照实例规格单位vCpu价格从低到高创建实例。
     * 默认值：priority。
     * @example `priority`
     */
    "AllocationStrategy"?: string;
    /**
     * 抢占式容量分布策略。您可以通过该参数单独指定抢占式容量的分布策略（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效）。取值范围：
     * - priority：按照配置的实例规格的顺序创建实例。
     * - lowestPrice：按照实例规格单位vCpu价格从低到高创建实例。
     * 默认值：priority。
     * @example `lowestPrice`
     */
    "SpotAllocationStrategy"?: string;
    /**
     * >该参数暂未开放使用。
     * @example `false`
     */
    "SyncAlarmRuleToCms"?: boolean;
    /**
     * 实例在伸缩组中存活的最大时间。单位为秒。
     * 取值范围：[86400, Integer.maxValue]。
     * 默认值：null。
     * @example `null`
     */
    "MaxInstanceLifetime"?: number;
    /**
     * 自定义缩容策略Function函数ARN。仅当RemovalPolicies配置第一个移除策略为CustomPolicy时生效。
     * @example `acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name`
     */
    "CustomPolicyARN"?: string;
    /**
     * 新创建的伸缩组所属的资源组ID。
     * >将新创建的伸缩组归属到指定的资源组中。如果不指定该参数，则归属为默认资源组。
     * @example `rg-123******`
     */
    "ResourceGroupId"?: string;
    /**
     * 负载均衡配置列表。
     */
    "LoadBalancerConfigs"?: {
        /**
         * 负载均衡CLB（原SLB）实例的ID。
         * @example `lb-2zen1olhfg9yw3f4q****`
         */
        LoadBalancerId: string;
        /**
         * 弹性伸缩将实例添加到SLB服务器组后，实例作为后端服务器的权重。权重越高，实例将被分配到越多的访问请求。如果权重为0，则实例不会收到访问请求。取值范围：0~100。
         * @example `10`
         */
        Weight: number;
    }[];
    /**
     * 伸缩组的健康检查方式列表。取值范围：
     * - NONE：不做健康检查。
     * - ECS：对伸缩组内的ECS实例做健康检查。
     * - ECI：对伸缩组内的ECI实例做健康检查。
     * - LOAD_BALANCER: 根据负载均衡（暂不支持负载均衡CLB类型）健康检查结果判断实例健康状态。
     * >该参数与`HealthCheckType`参数作用相同，您可以根据实际情况进行二选一设置，即如果设置了`HealthCheckType`参数，则`HealthCheckTypes`参数将被忽略（非必填项）。
     * 默认值：ECS。
     */
    "HealthCheckTypes"?: string[];
    /**
     * 伸缩组关联的数据库列表。
     */
    "DBInstances"?: {
        /**
         * 数据库实例ID。
         * @example `rm-m5eqju85s45mu0***`
         */
        DBInstanceId: string;
        /**
         * 数据库类型。取值范围：
         * - RDS。
         * - Redis。
         * - MongoDB。
         * 默认值：RDS。
         * @example `RDS`
         */
        Type: string;
        /**
         * 伸缩组与数据库关联方式。取值范围：
         * - SecurityIp ：修改IP白名单模式，通过将扩容实例自动添加到数据库IP白名单（目前仅RDS数据库支持）。
         * - SecurityGroup：安全组模式，通过将伸缩配置安全组添加至数据库安全组白名单，实现安全组下实例数据库访问。
         * @example `SecurityIp`
         */
        AttachMode: string;
    }[];
}
