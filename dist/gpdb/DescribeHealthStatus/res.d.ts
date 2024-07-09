export interface DescribeHealthStatusResponse {
    /**
     * 性能监控具体信息，由参数名、状态和和指标值构成。只有请求参数**Key**中传入了性能参数才会返回对应的监控信息，例如请求参数**Key**仅包含**adbpg\_status**，则返回信息中仅返回**adbpg\_status**的监控信息。
     * 更多性能参数信息，请参见[性能参数表](~~86943~~)。
     * @example `{"node_master_connection_status":{"Status":"healthy","Value":1.6}}`
     */
    Status: {
        /**
         * 实例健康状态。
         */
        adbpg_status: {
            /**
             * 实例健康状态。取值说明：
             * - **critical**：任意一个Master节点或Segment节点不可用，控制台显示为红色。
             * - **healthy**：所有节点均可用，控制台显示为绿色。
             * @example `healthy`
             */
            Status: string;
            /**
             * 实例健康状态的指标值。取值说明：
             * - **1**表示healthy。
             * - **0**表示critical。
             * @example `1`
             */
            Value: number;
        };
        /**
         * 实例连接状态。
         */
        adbpg_connection_status: {
            /**
             * 实例连接状态。取值说明：
             * - **critical**：实例连接数使用率大于95%，控制台显示为红色。
             * - **warning**：实例连接数使用率大于90%且小于等于95%，控制台显示为黄色。
             * - **healthy**：实例连接数使用率小于等于90%，控制台显示为绿色。
             * > 实例连接数使用率为所有Master节点和Segment节点的连接数使用率的最大值。
             * @example `healthy`
             */
            Status: string;
            /**
             * 实例连接数使用率的指标值，即所有Master节点和Segment节点的连接数使用率的最大值。
             * 单位：%。
             * @example `1.71`
             */
            Value: number;
        };
        /**
         * 实例存储状态。
         * > 仅存储弹性模式会返回该值。
         */
        adbpg_disk_status: {
            /**
             * 实例存储状态。取值说明：
             * - **critical**：实例存储水位大于等于90%，控制台显示为红色，实例将被锁定。
             * - **warning**：实例存储水位大于等于70%且小于90%，控制台显示为黄色。
             * - **healthy**：实例存储水位小于70%，控制台显示为绿色，实例存储状态健康。
             * > 实例存储水位为所有Segment节点的存储水位的平均值。
             * @example `healthy`
             */
            Status: string;
            /**
             * 实例存储水位的指标值，即所有Segment节点的存储水位的平均值。
             * 单位：%。
             * @example `1.52`
             */
            Value: number;
        };
        /**
         * 实例存储水位。
         * > 仅存储弹性模式会返回该值。
         */
        adbpg_disk_usage_percent: {
            /**
             * 实例存储水位状态。取值说明：
             * - **critical**：实例存储水位大于等于90%，实例将被锁定。
             * - **warning**：实例存储水位大于等于70%且小于90%。
             * - **healthy**：实例存储水位小于70%，实例存储状态健康。
             * > 实例存储水位为所有Segment节点的存储水位的平均值。
             * @example `healthy`
             */
            Status: string;
            /**
             * 实例存储水位的指标值，所有Segment节点的存储水位的平均值。
             * 单位：%。
             * @example `1.52`
             */
            Value: number;
        };
        /**
         * 最大实例协调节点存储水位，即实例下所有Master节点中的最大存储水位。
         * > 仅存储弹性模式会返回该值。
         */
        adbpg_master_disk_usage_percent_max: {
            /**
             * Master节点最大存储水位状态。取值说明：
             * - **critical**：水位大于等于90%，实例将被锁定。
             * - **warning**：水位大于等于70%且小于90%。
             * - **healthy**：水位小于70%，实例存储状态健康。
             * @example `healthy`
             */
            Status: string;
            /**
             * Master节点最大存储水位的指标值。
             * 单位：%。
             * @example `1.34`
             */
            Value: number;
        };
        /**
         * 最大实例计算节点存储水位，即实例下所有Segment节点中的最大存储水位。
         * > 仅存储弹性模式会返回该值。
         */
        adbgp_segment_disk_usage_percent_max: {
            /**
             * Segment节点最大存储水位状态。取值说明：
             * - **critical**：水位大于等于90%，实例将被锁定。
             * - **warning**：水位大于等于80%且小于90%。
             * - **healthy**：水位小于80%，实例存储状态健康。
             * @example `healthy`
             */
            Status: string;
            /**
             * Segment节点最大存储水位的指标值。
             * 单位：%。
             * @example `1.52`
             */
            Value: number;
        };
        /**
         * 协调节点健康状态，即Master节点的健康状态。
         */
        node_master_status: {
            /**
             * Master节点健康状态。取值说明：
             * - **critical**：任意一个主Master节点或副Master节点不可用，控制台显示为红色。
             * - **healthy**：所有Master节点均可用，控制台显示为绿色。
             * @example `healthy`
             */
            Status: string;
            /**
             * Master节点健康状态的指标值。取值说明：
             * - **1**表示healthy。
             * - **0**表示critical。
             * @example `1`
             */
            Value: number;
        };
        /**
         * 计算节点存储状态，即Segment节点的存储状态。
         * > 仅存储弹性模式会返回该值。
         */
        node_segment_disk_status: {
            /**
             * Segment节点存储状态。取值说明：
             * - **critical**：Segment节点存储水位大于等于90%，控制台显示为红色，实例将被锁定。
             * - **warning**：Segment节点存储水位大于等于80%且小于90%，控制台显示为黄色。
             * - **healthy**：Segment节点存储水位小于80%，控制台显示为绿色，实例存储状态健康。
             * > Segment节点存储水位为所有Segment节点的存储水位的最大值。
             * @example `healthy`
             */
            Status: string;
            /**
             * Segment节点的最大存储水位的指标值。
             * 单位：%。
             * @example `1.52`
             */
            Value: number;
        };
        /**
         * 协调节点连接健康状态，即Master节点的连接健康状态。
         */
        node_master_connection_status: {
            /**
             * Master节点连接健康状态。取值说明：
             * - **critical**：Master节点连接数使用率大于等于95%，控制台显示为红色。
             * - **warning**：Master节点连接数使用率大于等于90%且小于95%，控制台显示为黄色。
             * - **healthy**：Master节点连接数使用率小于90%，控制台显示为绿色。
             * > Master节点连接数使用率为所有Master节点中连接数使用率的最大值。
             * @example `healthy`
             */
            Status: string;
            /**
             * Master节点的连接数使用率的指标值，即所有Master节点中连接数使用率的最大值。
             * 单位：%。
             * @example `1.71`
             */
            Value: number;
        };
        /**
         * 计算节点连接健康状态，即Segment节点的连接健康状态。
         */
        node_segment_connection_status: {
            /**
             * Segment节点连接健康状态。取值说明：
             * - **critical**：Segment节点连接数使用率大于等于95%，控制台显示为红色。
             * - **warning**：Segment节点连接数使用率大于等于90%且小于95%，控制台显示为黄色。
             * - **healthy**：Segment节点连接数使用率小于90%，控制台显示为绿色。
             * > Segment节点的连接数使用率为所有Segment节点中的连接数使用率最大值。
             * @example `healthy`
             */
            Status: string;
            /**
             * Segment节点的连接数使用率的指标值，即所有Segment节点中连接数使用率的最大值。
             * 单位：%。
             * @example `0.48`
             */
            Value: number;
        };
        /**
         * 协调节点状态，即Master节点的可用状态。
         */
        adbpg_master_status: {
            /**
             * Master节点的可用状态。取值说明：
             * - **critical**：主备节点均不可用，控制台显示为红色。
             * - **warning**：主节点或备节点不可用，控制台显示为黄色。
             * - **healthy**：所有节点均可用，控制台显示为绿色。
             * @example `healthy`
             */
            Status: string;
            /**
             * Master节点的可用状态的指标值。取值说明：
             * @example `1`
             */
            Value: number;
        };
        /**
         * 计算节点状态，即Segment节点的可用状态。
         */
        adbpg_segment_status: {
            /**
             * Segment节点的可用状态。取值说明：
             * - **critical**：主备节点均不可用，控制台显示为红色。
             * - **warning**：大于等于50%节点不可用，控制台显示为黄色。
             * - **healthy**：所有节点均可用，控制台显示为绿色。
             * @example `healthy`
             */
            Status: string;
            /**
             * Segment节点的可用状态的指标值。
             * @example `1`
             */
            Value: number;
        };
        /**
         * 实例存储数据总量。
         */
        adbpg_instance_total_data_gb: {
            /**
             * 实例存储数据总量，单位GB。
             * @example `4.1`
             */
            Value: number;
        };
        /**
         * 热数据存储总量。
         */
        adbpg_instance_hot_data_gb: {
            /**
             * 热数据存储总量，单位GB。
             * @example `4.1`
             */
            Value: number;
        };
        /**
         * 冷数据存储总量
         */
        adbpg_instance_cold_data_gb: {
            /**
             * 冷数据存储总量，单位GB。
             * @example `0`
             */
            Value: number;
        };
    };
    /**
     * 请求ID。
     * @example `D97B4191-104D-10CE-8BC5-53**********`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBClusterId: string;
}
