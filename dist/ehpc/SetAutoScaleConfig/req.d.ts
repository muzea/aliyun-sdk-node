export interface SetAutoScaleConfigRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 是否开启自动扩容。取值范围：
     * - true：开启自动扩容
     * - false：不开启自动扩容
     * 默认值： false
     * @example `false`
     */
    "EnableAutoGrow"?: boolean;
    /**
     * 是否开启自动缩容。取值范围：
     * - true：开启自动缩容
     * - false：不开启自动缩容
     * 默认值： false
     * @example `false`
     */
    "EnableAutoShrink"?: boolean;
    /**
     * 每轮计算节点扩容的时间间隔。单位：分钟
     * 取值范围：2~10
     * 默认值：2
     * >一次扩容任务可能会分几次完成，或者连续触发扩容时的时间间隔。
     * @example `2`
     */
    "GrowIntervalInMinutes"?: number;
    /**
     * 每轮计算节点收缩的时间间隔。单位：分钟
     * 取值范围：2~10
     * 默认值：2
     * @example `2`
     */
    "ShrinkIntervalInMinutes"?: number;
    /**
     * 节点连续空闲（未运行作业）次数。节点收缩检查时，一个节点连续处于空闲状态的次数。
     * 取值范围：2~5
     * 默认值：3
     * 如果设置为3，表示一个计算节点连续空闲超过3次，就会被释放。因为ShrinkIntervalInMinutes默认值是2分钟，所以默认配置下，一个计算节点连续空闲时间超过6分钟，就会被释放。
     * @example `3`
     */
    "ShrinkIdleTimes"?: number;
    /**
     * 扩容超时时间。单位：分钟
     * 取值范围：10~60
     * 默认值：20
     * 如果扩容时间大于扩容超时时间，节点依然未达到运行状态，该节点将被释放。
     * @example `20`
     */
    "GrowTimeoutInMinutes"?: number;
    /**
     * 额外节点百分比。取值范围：0~100
     * 默认值：0
     * 如果作业负载需要新增100个计算节点，ExtraNodesGrowRatio值为2，那么最终新增数量为102。
     * @example `0`
     */
    "ExtraNodesGrowRatio"?: number;
    /**
     * 扩容比例。取值范围：1~100
     * 默认值：100
     * 如果作业负载需要新增10个计算节点，GrowRatio配置为50，那么会进行多轮扩容，每轮扩容当前所需的50%节点。
     * @example `50`
     */
    "GrowRatio"?: number;
    /**
     * 集群最多可以扩容的计算节点数量。取值范围：0~500
     * 默认值：100
     * @example `100`
     */
    "MaxNodesInCluster": number;
    /**
     * 例外节点列表，不参与自动伸缩的节点列表。节点之间用半角逗号（,）隔开。
     * 如果您希望一直保留某个节点，可以设置为例外节点，空闲时不被释放。
     * @example `i-bp19lgqwxb4206t5****,i-bp1g4hvzs9pywrhb****`
     */
    "ExcludeNodes"?: string;
    /**
     * 计算节点抢占策略。取值范围：
     * - NoSpot：正常按量付费节点。
     * - SpotWithPriceLimit：设置上限价格的抢占式节点。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式节点。
     * 默认值：NoSpot
     * @example `SpotWithPriceLimit`
     */
    "SpotStrategy"?: string;
    /**
     * 设置节点的每小时最高价格，最多支持3位小数。参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。
     * @example `0.062`
     */
    "SpotPriceLimit"?: number;
    /**
     * 镜像ID。
     * > - 如果同时设置了`Queues.N.QueueImageId`和`ImageId`时，默认使用`Queues.N.QueueImageId`。
     * - 如果设置了`Queues.N.QueueImageId`或`ImageId`，以设置的参数为准。
     * - 如果`Queues.N.QueueImageId`和`ImageId`都为空，则默认使用集群上次扩容的镜像，若之前没有进行过扩容，则默认使用创建集群时的镜像。
     * @example `centos_7_03_64_20G_alibase_201708****`
     */
    "ImageId"?: string;
    /**
     * 队列信息。
     */
    "Queues"?: {
        /**
         *  扩容队列的镜像ID。N的取值范围：1~8
         * > - 如果同时设置了`Queues.N.QueueImageId`和`ImageId`时，默认使用`Queues.N.QueueImageId`。
         * - 如果设置了`Queues.N.QueueImageId`或`ImageId`，以设置的参数为准。
         * - 如果`Queues.N.QueueImageId`和`ImageId`都为空，则默认使用集群上次扩容的镜像，若之前没有进行过扩容，则默认使用创建集群时的镜像。
         * @example `centos_7_03_64_20G_alibase_201708****`
         */
        QueueImageId: string;
        /**
         * 队列中扩容的计算节点系统盘类型。取值范围：
         * - cloud_efficiency：高效云盘
         * - cloud_ssd：SSD云盘
         * - cloud_essd：ESSD云盘
         * - cloud：普通云盘，已售罄
         * N的取值范围：1~8
         * 默认值：cloud_efficiency
         * @example `cloud_efficiency`
         */
        SystemDiskCategory: string;
        /**
         * 队列中自动扩容的节点规格。N的取值范围：1~8
         * @example `ecs.n1.medium`
         */
        InstanceType: string;
        /**
         *  队列中扩容的主机名后缀。方便您管理具有指定后缀的节点。
         * N的取值范围：1~8
         * @example `000`
         */
        HostNameSuffix: string;
        /**
         * 队列中自动扩容的计算节点的抢占策略。N的取值范围：1~8
         * 抢占策略取值范围为：
         * - NoSpot：正常按量付费节点。
         * - SpotWithPriceLimit：设置上限价格的抢占式节点。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式节点。
         * 默认值：NoSpot
         * @example `NoSpot`
         */
        SpotStrategy: string;
        /**
         *  队列中扩容的主机名前缀。方便您管理具有指定前缀的节点。
         * N的取值范围：1~8
         * @example `compute`
         */
        HostNamePrefix: string;
        /**
         *  队列允许收缩的最小节点数。取值范围：0~50
         * N的取值范围：1~8
         * 默认值：0
         * @example `0`
         */
        MinNodesInQueue: number;
        /**
         * 队列中扩容的节点系统盘大小。单位：GB
         * 取值范围：40~500
         * N的取值范围：1~8
         * 默认值：40
         * @example `40`
         */
        SystemDiskSize: number;
        /**
         * 队列允许扩容的最大节点数。取值范围：0~500
         * N的取值范围：1~8
         * 默认值：100
         * @example `30`
         */
        MaxNodesInQueue: number;
        /**
         * 队列是否允许自动缩容。取值范围：
         * - true：允许自动缩容
         * - false：不允许自动缩容
         * N的取值范围：1~8
         * 默认值：false
         * @example `false`
         */
        EnableAutoShrink: boolean;
        /**
         * 队列名称。支持同时设置N个队列的名称，N的取值范围：1~8
         * @example `cluster1`
         */
        QueueName: string;
        /**
         *  队列是否允许自动扩容。取值范围：
         * - true：允许自动扩容
         * - false：不允许自动扩容
         * N的取值范围：1~8
         * 默认值：false
         * @example `false`
         */
        EnableAutoGrow: boolean;
        /**
         * 队列中扩容的计算节点系统盘性能等级。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万
         * - PL1：单盘最高随机读写IOPS 5万
         * - PL2：单盘最高随机读写IOPS 10万
         * - PL3：单盘最高随机读写IOPS 100万
         * N的取值范围：1~8
         * 默认值：PL1
         * @example `PL1`
         */
        SystemDiskLevel: string;
        /**
         * 队列中自动扩容的计算节点的每小时最高价格，支持最多3位小数。参数`Queues.N.SpotStrategy`取值为`SpotWithPriceLimit`时生效。
         * N的取值范围：1~8
         * @example `0.662`
         */
        SpotPriceLimit: number;
        /**
         * 队列中节点信息。
         */
        InstanceTypes: {
            /**
             * 队列中自动扩容的节点绑定的交换机ID。
             * 支持同时设置N个队列的名称，N的取值范围：1~8
             * 队列自动扩容时支持同时为队列中N个节点设置交换机ID，N的取值范围：0~500
             * @example `vsw-bp1lfcjbfb099rrjn****`
             */
            VSwitchId: string;
            /**
             * 队列中自动扩容的节点所在可用区ID。
             * 支持同时设置N个队列的名称，N的取值范围：1~8
             * 队列自动扩容时支持同时为队列中N个节点设置可用区ID，N的取值范围：0~500
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 队列中自动扩容的节点每小时最高价格，支持最多3位小数。参数`Queues.N.InstanceTypes.N.SpotStrategy`取值为`SpotWithPriceLimit`时生效。
             * 支持同时设置N个队列的名称，N的取值范围：1~8
             * 队列自动扩容时支持同时为队列中N个节点设置每小时最高价格，N的取值范围：0~500
             * @example `0.660`
             */
            SpotPriceLimit: number;
            /**
             * 队列中自动扩容的节点规格。
             * 支持同时设置N个队列的名称，N的取值范围：1~8
             * 队列自动扩容时支持同时为队列中N个节点设置规格参数，N的取值范围：0~500
             * @example `ecs.n1.tiny`
             */
            InstanceType: string;
            /**
             * 队列中自动扩容的计算节点竞价策略。取值范围：
             * - NoSpot：正常按量付费节点。
             * - SpotWithPriceLimit：设置上限价格的抢占式节点。
             * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式节点。
             * 默认值：NoSpot
             * 支持同时设置N个队列的名称，N的取值范围：1~8
             * 队列自动扩容时支持同时为队列中N个节点设置计算节点竞价策略，N的取值范围：0~500
             * @example `SpotWithPriceLimit`
             */
            SpotStrategy: string;
            /**
             * 抢占式实例的保护期，单位为小时。取值为0~1，设置为0则表示无保护期，默认为1。
             * @example `0`
             */
            SpotDuration: number;
            /**
             * 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。
             * @example `Terminate`
             */
            SpotInterruptionBehavior: string;
        }[];
        /**
         * 随节点创建的数据盘信息列表。
         */
        DataDisks: {
            /**
             * 第N个随节点创建的数据盘容量大小。单位：GB
             * 取值范围：40~500
             * 默认值：40
             * N的取值范围：0~16
             * @example `40`
             */
            DataDiskSize: number;
            /**
             * 第N个随节点创建的数据盘类型。取值范围：
             * - cloud_efficiency：高效云盘
             * - cloud_ssd：SSD云盘
             * - cloud_essd：ESSD云盘
             * - cloud：普通云盘
             * 默认值：cloud_efficiency
             * N的取值范围：0~16
             * @example `cloud_efficiency`
             */
            DataDiskCategory: string;
            /**
             * 第N个随节点创建的数据盘是否随实例释放。取值范围：
             * - true：是
             * - false：否
             * 默认值：true
             * N的取值范围：0~16
             * @example `true`
             */
            DataDiskDeleteWithInstance: boolean;
            /**
             * 第N个随节点创建的数据盘类型为ESSD云盘时，区分性能等级。仅当Queues.N.DataDisks.N.DataDiskCategory=cloud_essd时该参数有效。取值范围：
             * - PL0：单盘最高随机读写IOPS 1万
             * - PL1：单盘最高随机读写IOPS 5万
             * - PL2：单盘最高随机读写IOPS 10万
             * - PL3：单盘最高随机读写IOPS 100万
             * 默认值：PL1
             * N的取值范围：0~16
             * @example `PL1`
             */
            DataDiskPerformanceLevel: string;
            /**
             * 第N个随节点创建的数据盘是否加密。取值范围：
             * - true：是
             * - false：否
             * 默认值：false
             * N的取值范围：0~16
             * @example `false`
             */
            DataDiskEncrypted: boolean;
            /**
             * 第N个随节点创建的数据盘使用的KMS密钥ID。
             * N的取值范围：0~16
             * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
             */
            DataDiskKMSKeyId: string;
        }[];
        /**
         * 自动伸缩每轮扩容的最大计算节点数。取值范围：0~99。
         * 默认值：0。
         * @example `20`
         */
        MaxNodesPerCycle: number;
        /**
         * 自动伸缩每轮扩容的最小计算节点数。取值范围：1~99。
         * 默认值：1。
         * 如果某一轮次需扩容节点数量小于所设置的最小计算节点数，自动伸缩为保证资源的正常交付，会将该轮次的最小计算节点数自动调整为当前轮次需要扩容节点数量。
         * >该调整仅对当前轮次的最小计算节点数生效。
         * @example `5`
         */
        MinNodesPerCycle: number;
        /**
         * 自动设置单轮扩容的最小节点数量。
         * 如果设置为true，则每次扩容的最小节点数等于作业所需的节点数量，上限是99台。
         * @example `false`
         */
        AutoMinNodesPerCycle: boolean;
        /**
         * 实例是否支持乱序排列，取值范围：
         * - true：是
         * - false：否
         * > 如果设置为true，自动伸缩会按照实例库存数量从多到少的顺序选择实例规格，尽力交付实例资源。
         * @example `false`
         */
        SortedByInventory: boolean;
    }[];
    /**
     * 计算节点对应的ECS实例是否开启超线程。
     * > 该配置仅对部分支持开关超线程的实例规格生效。对于不支持的实例，默认开启超线程。具体请参见[自定义CPU选项](~~145895~~)。
     * @example `true`
     */
    "ComputeEnableHt"?: boolean;
    /**
     * DNS配置信息。
     * @example `"{\"DnsType\":\"PrivateZone\",\"DnsName\":\"xxxxx\"}"`
     */
    "DnsConfig"?: string;
}
