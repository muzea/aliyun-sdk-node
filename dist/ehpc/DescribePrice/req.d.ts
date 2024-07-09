export interface DescribePriceRequest {
    /**
     * ECS实例的计费周期单位。仅当ChargeType=PrePaid时该参数有效。取值范围：
     * <props="china">
     * - Month：按月计费
     * - Year：按年计费
     * - Hour：按小时计费
     * - Week：按周计费
     * </props>
     * <props="intl">
     * - Month：按月计费
     * - Year：按年计费
     * - Hour：按小时计费
     * </props>
     * 默认值：Hour
     * @example `Hour`
     */
    "PriceUnit": string;
    /**
     * 集群节点ECS实例的计费方式。取值范围：
     * - PostPaid：按量付费
     * - PrePaid：包年包月
     * 默认值：PostPaid
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 订单类型，仅支持设置为商品购买。取值：INSTANCE-BUY
     * @example `INSTANCE-BUY`
     */
    "OrderType"?: string;
    /**
     * 商品列表。
     */
    "Commodities": {
        /**
         * 第N个该类型节点的数量。取值范围：1~1000
         * 默认值：1
         * N的取值范围：1~10
         * @example `2`
         */
        Amount: number;
        /**
         * 第N个该节点的系统盘大小。单位：GB
         * 取值范围：40~500
         * 默认值：40
         * N的取值范围：1~10
         * @example `40`
         */
        SystemDiskSize: number;
        /**
         * 第N个该节点的系统盘类型为ESSD云盘时，区分性能等级。仅当Commodities.N.SystemDiskCategory=cloud_essd时该参数有效。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万
         * - PL1：单盘最高随机读写IOPS 5万
         * - PL2：单盘最高随机读写IOPS 10万
         * - PL3：单盘最高随机读写IOPS 100万
         * 默认值：PL1
         * N的取值范围：1~10
         * @example `PL1`
         */
        SystemDiskPerformanceLevel: string;
        /**
         * 第N个节点类型。取值范围：
         * - Compute：计算节点
         * - Manager：管控节点
         * - Login：登录节点
         * N的取值范围：1~10
         * @example `Compute`
         */
        NodeType: string;
        /**
         * 第N个该节点的系统盘类型。可能值：
         * - cloud_efficiency：高效云盘
         * - cloud_ssd：SSD云盘
         * - cloud_essd：ESSD云盘
         * - cloud：普通云盘
         * 默认值：cloud_efficiency
         * N的取值范围：1~10
         * @example `cloud_ssd`
         */
        SystemDiskCategory: string;
        /**
         * 第N个该节点的公网付费方式。取值范围：
         * - PayByBandwidth：按固定带宽收费
         * - PayByTraffic：按流量计费
         * N的取值范围：1~10
         * @example `PayByBandwidth`
         */
        InternetChargeType: string;
        /**
         * 第N个该节点的网络类型，仅支持设置为专有网络VPC。取值：VPC
         * N的取值范围：1~10
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * 第N个该节点的ECS实例规格。
         * N的取值范围：1~10
         * @example `ecs.n1.tiny`
         */
        InstanceType: string;
        /**
         * 第N个该节点的ECS实例的计费时长。取值范围：
         * <props="china">
         * - 当参数PriceUnit取值为Year时：1~3
         * - 当参数PriceUnit取值为Month时：1~9
         * - 当参数PriceUnit取值为Hour时：1
         * - 当参数PriceUnit取值为Week时：1~4
         * </props>
         * <props="intl">
         * - 当参数PriceUnit取值为Year时：1~3
         * - 当参数PriceUnit取值为Month时：1~9
         * - 当参数PriceUnit取值为Hour时：1
         * </props>
         * 默认值：1
         * N的取值范围：1~10
         * @example `1`
         */
        Period: number;
        /**
         * 第N个该节点公网出带宽最大值。单位为Mbit/s。
         * 取值范围：0~100
         * 默认值：0
         * N的取值范围：1~10
         * @example `100`
         */
        InternetMaxBandWidthOut: number;
        /**
         * 随节点创建的数据盘信息列表。
         */
        DataDisks: {
            /**
             * 第N个随节点创建的数据盘容量大小。单位：GB
             * 取值范围：40~500
             * 默认值：40
             * N的取值范围：0~4
             * @example `40`
             */
            size: number;
            /**
             * 第N个随节点创建的数据盘类型。可能值：
             * - cloud_efficiency：高效云盘
             * - cloud_ssd：SSD云盘
             * - cloud_essd：ESSD云盘
             * - cloud：普通云盘
             * 默认值：cloud_efficiency
             * N的取值范围：0~4
             * @example `cloud_efficiency`
             */
            category: string;
            /**
             * 第N个随节点创建的数据盘是否随实例释放。取值范围：
             * - true：是
             * - false：否
             * 默认值：true
             * N的取值范围：0~4
             * @example `true`
             */
            deleteWithInstance: boolean;
            /**
             * 第N个随节点创建的数据盘类型为ESSD云盘时，区分性能等级。仅当Commodities.N.DataDisks.N.category=cloud_essd时该参数有效。取值范围：
             * - PL0：单盘最高随机读写IOPS 1万
             * - PL1：单盘最高随机读写IOPS 5万
             * - PL2：单盘最高随机读写IOPS 10万
             * - PL3：单盘最高随机读写IOPS 100万
             * 默认值：PL1
             * N的取值范围：0~4
             * @example `PL1`
             */
            performanceLevel: string;
            /**
             * 第N个随节点创建的数据盘是否加密。取值范围：
             * - true：是
             * - false：否
             * 默认值：false
             * N的取值范围：0~4
             * @example `false`
             */
            encrypted: boolean;
        }[];
    }[];
}
