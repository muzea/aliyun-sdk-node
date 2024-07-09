export interface DescribeAutoScaleConfigResponse {
    /**
     * 集群最大计算节点数，集群最多可以扩展的节点数量。
     * @example `100`
     */
    MaxNodesInCluster: number;
    /**
     * 扩容超时时间，等待启动节点的超时时间。可能值：10~60
     * @example `20`
     */
    GrowTimeoutInMinutes: number;
    /**
     * 计算节点竞价策略。可能值：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * @example `NoSpot`
     */
    SpotStrategy: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73`
     */
    RequestId: string;
    /**
     * 是否开启自动缩容。
     * @example `true`
     */
    EnableAutoShrink: boolean;
    /**
     * 集群的调度器类型。可能值：
     * - pbs
     * - slurm
     * - opengridscheduler
     * - deadline
     * @example `slurm`
     */
    ClusterType: string;
    /**
     * 是否开启自动扩容。
     * @example `true`
     */
    EnableAutoGrow: boolean;
    /**
     * 不使用自动伸缩的节点列表。
     * @example `i-bp19lgqwxb4206t5****,i-bp1g4hvzs9pywrhb****`
     */
    ExcludeNodes: string;
    /**
     * 扩容时间间隔，每轮计算节点扩容的时间间隔。可能值：2~10
     * @example `10`
     */
    GrowIntervalInMinutes: number;
    /**
     * 缩容时间间隔，每轮计算节点收缩的时间间隔。可能值：2~10
     * @example `2`
     */
    ShrinkIntervalInMinutes: number;
    /**
     * 实例的每小时最高价格。支持最多3位小数，参数SpotStrategy取值为SpotWithPriceLimit时生效。
     * @example `0.062`
     */
    SpotPriceLimit: string;
    /**
     * 节点连续空闲次数，资源收缩检查时，一个节点连续处于空闲的次数。可能值：2~5
     * @example `3`
     */
    ShrinkIdleTimes: number;
    /**
     * 额外节点百分比。可能值：0~100
     * @example `0`
     */
    ExtraNodesGrowRatio: number;
    /**
     * 扩容比例。可能值：1~100
     * @example `1`
     */
    GrowRatio: number;
    /**
     * 用户ID。
     * @example `testu****`
     */
    Uid: string;
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    ClusterId: string;
}
