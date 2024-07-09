export interface DescribeEnsEipAddressesResponse {
    /**
     * 请求ID。
     * @example `8629F679-B51D-4194-A1CC-5D8F504C362B`
     */
    RequestId: string;
    EipAddresses: {
        /**
         * EIP的详细信息。
         */
        EipAddress: {
            /**
             * EIP的实例ID。
             * @example `eip-5sainglpw7qfem3icir4s****`
             */
            AllocationId: string;
            /**
             * EIP的创建时间
             * @example `1624885274000`
             */
            AllocationTime: string;
            /**
             * EIP的带宽峰值，默认值为5。取值范围：**5**~**10000**，单位：Mbps。
             * @example `50`
             */
            Bandwidth: number;
            /**
             * EIP的计费模式。
             * - **PrePaid**：包年包月。
             * - **PostPaid**：按量计费。
             * @example `PostPaid`
             */
            ChargeType: string;
            /**
             * EIP的描述信息。
             * @example `example`
             */
            Description: string;
            /**
             * 当前绑定的实例的ID。
             * @example `lb-5sc3kum2e0sz34wbqrws9****`
             */
            InstanceId: string;
            /**
             * 要绑定的云产品实例的类型，取值：
             * - **EnsInstance**：VPC类型的ENS实例。
             * - **SlbInstance**：负载均衡实例。
             * @example `SlbInstance`
             */
            InstanceType: string;
            /**
             * EIP的计费方式。
             * - **95BandwidthByMonth**：月95峰值带宽。
             * - **PayByBandwidth**：固定带宽计费。
             * @example `95BandwidthByMonth`
             */
            InternetChargeType: string;
            /**
             * EIP的IP地址。
             * @example `120.XXX.XXX.4`
             */
            IpAddress: string;
            /**
             * EIP实例名称。
             * @example `test`
             */
            Name: string;
            /**
             * ENS节点ID。
             * @example `cn-xian-telecom`
             */
            EnsRegionId: string;
            /**
             * EIP的状态。
             * - **Associating**：绑定中。
             * - **Unassociating**：解绑中。
             * - **InUse**：已分配。
             * - **Available**：可用。
             * @example `Available`
             */
            Status: string;
            /**
             * 运营商，取值：
             * - **cmcc**：中国移动。
             * - **unicom**：中国联通。
             * - **telecom**：中国电信。
             * @example `cmcc`
             */
            Isp: string;
            /**
             * 该EIP是否是备用。
             * @example `true`
             */
            Standby: boolean;
            /**
             * 如果该弹性IP是备用EIP时，表示当前EIP的运行状态。
             * - **Stopped**：已停止。
             * - **Running**：运行中。
             * - **Starting**：启动中。
             * - **Stopping**：停止中。
             * @example `Stopped`
             */
            IpStatus: string;
        }[];
    };
    /**
     * 查询列表的页码。取值：>0，默认查询第1页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。默认值：10，取值：**10**~**100**。
     * @example `50`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `7`
     */
    TotalCount: number;
}
