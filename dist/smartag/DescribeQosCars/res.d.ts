export interface DescribeQosCarsResponse {
    /**
     * 总条目数。
     * @example `10`
     */
    TotalCount: number;
    QosCars: {
        /**
         * 限速规则信息列表。
         */
        QosCar: {
            /**
             * 最大带宽。单位：**Mbps**。
             * @example `6`
             */
            MaxBandwidthAbs: number;
            /**
             * 按百分比限速时的带宽类型：
             * - **CcnBandwidth**：云连接网带宽。
             * - **InternetUpBandwidth**：公网上行带宽。
             * @example `CcnBandwidth`
             */
            PercentSourceType: string;
            /**
             * 最小带宽。单位：**Mbps**。
             * @example `2`
             */
            MinBandwidthAbs: number;
            /**
             * 最大带宽百分比。
             * @example `90`
             */
            MaxBandwidthPercent: number;
            /**
             * 限速规则的描述信息。
             * @example `des`
             */
            Description: string;
            /**
             * QoS策略实例ID。
             * @example `qos-awfxl1adxeqyk****`
             */
            QosId: string;
            /**
             * 限速类型：
             * - **Absolute**：按带宽值。
             * - **Percent**：按百分比。
             * @example ` Absolute`
             */
            LimitType: string;
            /**
             * 限速规则优先级。
             * @example `3`
             */
            Priority: number;
            /**
             * 限速规则的名称。
             * @example `name`
             */
            Name: string;
            /**
             * 最小带宽百分比。
             * @example `20`
             */
            MinBandwidthPercent: number;
            /**
             * 限速规则ID。
             * @example `qos-awfxl1adxeqyk****`
             */
            QosCarId: string;
        }[];
    };
    /**
     * 分页查询时，每页显示的最大条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B7B758A9-009E-4C9D-9618-714EAE8BA5E9`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
}
