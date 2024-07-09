export interface GetAutoScaleConfigResponse {
    /**
     * 集群最多可以扩容的节点数量。可能值：0~500
     * @example `300`
     */
    MaxNodesInCluster: number;
    /**
     * 扩容超时时间，等待启动节点的超时时间。单位：分钟，可能值：10~60
     * 如果扩容时间大于扩容超时时间，节点依然未达到运行状态，系统将此节点释放。
     * @example `20`
     */
    GrowTimeoutInMinutes: number;
    /**
     * 计算节点抢占策略。可能值：
     * - NoSpot：正常按量付费节点。
     * - SpotWithPriceLimit：设置上限价格的抢占式节点。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式节点。
     * @example `SpotWithPriceLimit`
     */
    SpotStrategy: string;
    /**
     * 集群是否启动自动缩容。可能值：
     * - true
     * - false
     * @example `true`
     */
    EnableAutoShrink: boolean;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 集群是否启动自动扩容。可能值：
     * - true
     * - false
     * @example `true`
     */
    EnableAutoGrow: boolean;
    /**
     * 集群的调度器类型。可能值：
     * - slurm
     * - pbs
     * - opengridscheduler
     * - deadline
     * @example `pbs`
     */
    ClusterType: string;
    /**
     * 不参与自动伸缩的节点列表，多个节点之间用半角逗号（,）隔开。
     * @example `i-bp19lgqwxb4206t5****,i-bp1g4hvzs9pywrhb****`
     */
    ExcludeNodes: string;
    /**
     * 缩容时间间隔，每轮计算节点收缩的时间间隔。单位：分钟，可能值：2~10
     * @example `2`
     */
    ShrinkIntervalInMinutes: number;
    /**
     * 扩容时间间隔，每轮计算节点扩容的时间间隔。单位：分钟，可能值：2~10
     * >一次扩容任务可能会分几次完成，或者连续触发扩容时的时间间隔。
     * @example `2`
     */
    GrowIntervalInMinutes: number;
    /**
     * 计算节点每小时最高价格，最多支持3位小数。参数SpotStrategy取值为SpotWithPriceLimit时生效。
     * @example `0.062`
     */
    SpotPriceLimit: number;
    /**
     * 额外节点百分比。可能值：0~100
     * 如果作业负载需要新增100个计算节点，ExtraNodesGrowRatio值为2，那么最终新增数量为102。
     * @example `2`
     */
    ExtraNodesGrowRatio: number;
    /**
     * 节点连续空闲（未运行作业）次数。节点收缩检查时，一个节点连续处于空闲状态的次数。可能值：2~5
     * 如果该参数值为3，表示一个计算节点连续空闲超过3次，就会被释放。
     * @example `3`
     */
    ShrinkIdleTimes: number;
    /**
     * 队列中计算节点镜像ID。
     * @example `m-bp10txryr4mhrrt1****`
     */
    ImageId: string;
    /**
     * 扩容比例。可能值：1~100
     * 如果作业负载需要新增10个计算节点，GrowRatio配置为50，那么会进行多轮扩容，每轮扩容当前所需的50%。
     * @example `100`
     */
    GrowRatio: number;
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    ClusterId: string;
    /**
     * 阿里云账号ID。
     * @example `129845258050****`
     */
    Uid: string;
    Queues: {
        /**
         * 集群队列的自动伸缩配置信息。
         * >集群和队列同时开启了扩容或缩容时，则以队列设置为优先。
         */
        QueueInfo: {
            /**
             * 队列中计算节点镜像ID。
             * @example `centos_7_06_64_20G_alibase_2019071****`
             */
            QueueImageId: string;
            /**
             * 系统盘类型。可能值：
             * - cloud_efficiency：高效云盘
             * - cloud_ssd：SSD云盘
             * - cloud_essd：ESSD云盘
             * - cloud：普通云盘
             * @example `cloud_efficiency`
             */
            SystemDiskCategory: string;
            /**
             * 该队列自动扩容的节点规格。
             * @example `ecs.sn1ne.large`
             */
            InstanceType: string;
            /**
             * 队列名后缀。方便您查询具有指定后缀的队列。
             * @example `000`
             */
            HostNameSuffix: string;
            /**
             * 计算节点的抢占策略。可能值：
             * - NoSpot：正常按量付费节点。
             * - SpotWithPriceLimit：设置上限价格的抢占式节点。
             * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式节点。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            /**
             * 单个队列最小计算节点数，队列最少可以保留的计算节点数量。可能值：0~50
             * @example `10`
             */
            MinNodesInQueue: number;
            /**
             * 队列名前缀。方便您查询具有指定前缀的队列。
             * @example `compute`
             */
            HostNamePrefix: string;
            /**
             * 系统盘大小。单位：GB，可能值：40~500
             * @example `40`
             */
            SystemDiskSize: number;
            /**
             * 单个队列最多可以扩容的节点数量。可能值：0~500
             * @example `100`
             */
            MaxNodesInQueue: number;
            /**
             * 队列是否启动自动缩容。可能值：
             * - true
             * - false
             * @example `true`
             */
            EnableAutoShrink: boolean;
            /**
             * 队列名称。
             * @example `workq`
             */
            QueueName: string;
            /**
             * 队列是否启动自动扩容。可能值：
             * - true
             * - false
             * @example `true`
             */
            EnableAutoGrow: boolean;
            /**
             * 系统盘性能等级。可能值：
             * - PL0：单盘最高随机读写IOPS 1万
             * - PL1：单盘最高随机读写IOPS 5万
             * - PL2：单盘最高随机读写IOPS10万
             * - PL3：单盘最高随机读写IOPS 100万
             * @example `PL1`
             */
            SystemDiskLevel: string;
            /**
             * 计算节点所属的资源组ID。
             * @example `rg-acfmxp7uc24****`
             */
            ResourceGroupId: string;
            /**
             * 计算节点每小时最高价格，支持最大3位小数。参数SpotStrategy取值为SpotWithPriceLimit时生效。
             * @example `0.062`
             */
            SpotPriceLimit: number;
            InstanceTypes: {
                /**
                 * 计算节点规格信息。
                 */
                InstanceTypeInfo: {
                    /**
                     * 主机名前缀。方便您查询具有指定前缀的节点。
                     * @example `compute`
                     */
                    HostNamePrefix: string;
                    /**
                     * 计算节点所属的交换机ID。
                     * @example `vsw-bp1lfcjbfb099rrjn****`
                     */
                    VSwitchId: string;
                    /**
                     * 计算节点所属的可用区ID。
                     * @example `cn-hangzhou-b`
                     */
                    ZoneId: string;
                    /**
                     * 计算节点每小时最高价格，支持最多3位小数。参数SpotStrategy取值为SpotWithPriceLimit时生效。
                     * @example `0.062`
                     */
                    SpotPriceLimit: number;
                    /**
                     * 节点规格。
                     * @example `ecs.sn1ne.large`
                     */
                    InstanceType: string;
                    /**
                     * 计算节点竞价策略。可能值：
                     * - NoSpot：正常按量付费节点。
                     * - SpotWithPriceLimit：设置上限价格的抢占式节点。
                     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式节点。
                     * @example `NoSpot`
                     */
                    SpotStrategy: string;
                    /**
                     * 抢占式实例的保护期，单位为小时。取值为0~1，默认为1，设置为0表示无保护期。
                     * @example `0`
                     */
                    SpotDuration: number;
                    /**
                     * 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。
                     * @example `Terminate`
                     */
                    SpotInterruptionBehavior: string;
                }[];
            };
            DataDisks: {
                /**
                 * 节点上挂载的数据盘信息列表。
                 */
                DataDisksInfo: {
                    /**
                     * 第N个该节点挂载的数据盘类型。可能值：
                     * - cloud_efficiency：高效云盘
                     * - cloud_ssd：SSD云盘
                     * - cloud_essd：ESSD云盘
                     * - cloud：普通云盘
                     * @example `cloud_efficiency`
                     */
                    DataDiskCategory: string;
                    /**
                     * 第N个该节点挂载的数据盘容量大小。单位：GB
                     * 可能值：40~500
                     * @example `40`
                     */
                    DataDiskSize: number;
                    /**
                     * 第N个该节点挂载的数据盘是否随实例释放。可能值：
                     * - true：是
                     * - false：否
                     * @example `true`
                     */
                    DataDiskDeleteWithInstance: boolean;
                    /**
                     * 第N个该节点的数据盘类型为ESSD云盘时，区分性能等级。仅当DataDisks.N.DataDiskCategory=cloud_essd时返回该参数。可能值：
                     * - PL0：单盘最高随机读写IOPS 1万
                     * - PL1：单盘最高随机读写IOPS 5万
                     * - PL2：单盘最高随机读写IOPS 10万
                     * - PL3：单盘最高随机读写IOPS 100万
                     * @example `PL1`
                     */
                    DataDiskPerformanceLevel: string;
                    /**
                     * 第N个该节点的数据盘是否加密。可能值：
                     * - true：是
                     * - false：否
                     * @example `false`
                     */
                    DataDiskEncrypted: boolean;
                    /**
                     * 第N个该节点的数据盘使用的KMS密钥ID。
                     * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
                     */
                    DataDiskKMSKeyId: string;
                }[];
            };
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
    };
    /**
     * 计算节点对应的ECS实例是否开启超线程。
     * @example `true`
     */
    ComputeEnableHt: boolean;
    /**
     * DNS配置信息。
     * @example `"{\"DnsType\":\"PrivateZone\",\"DnsName\":\"xxxxx\"}"`
     */
    DnsConfig: string;
}
