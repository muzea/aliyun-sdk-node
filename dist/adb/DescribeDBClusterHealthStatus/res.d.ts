export interface DescribeDBClusterHealthStatusResponse {
    /**
     * 实例接入节点状态列表。
     */
    CS: {
        /**
         * 健康节点个数。
         * @example `2`
         */
        ActiveCount: number;
        /**
         * 不可用节点个数。
         * @example `0`
         */
        UnavailableCount: number;
        /**
         * 风险节点个数。
         * @example `0`
         */
        RiskCount: number;
        /**
         * 接入节点总个数。
         * @example `2`
         */
        ExpectedCount: number;
        /**
         * 实例接入节点状态，取值说明：
         * - **RISK**：风险。
         * - **NORMAL**：健康。
         * - **UNAVAILABLE**：不可用。
         * @example `NORMAL`
         */
        Status: string;
    };
    /**
     * 计算节点组健康状态列表。
     */
    Executor: {
        /**
         * 健康计算节点组个数。
         * @example `2`
         */
        ActiveCount: number;
        /**
         * 不可用计算节点组个数。
         * @example `0`
         */
        UnavailableCount: number;
        /**
         * 风险计算节点组个数。
         * @example `0`
         */
        RiskCount: number;
        /**
         * 计算节点组总个数。
         * @example `2`
         */
        ExpectedCount: number;
        /**
         * 计算节点组健康状态，取值说明：
         * - **RISK**：风险。
         * - **NORMAL**：健康。
         * - **UNAVAILABLE**：不可用。
         * @example `NORMAL`
         */
        Status: string;
    };
    /**
     * 存储节点组健康状态列表。
     */
    Worker: {
        /**
         * 健康存储节点组个数。
         * @example `2`
         */
        ActiveCount: number;
        /**
         * 不可用存储节点组个数。
         * @example `0`
         */
        UnavailableCount: number;
        /**
         * 风险存储节点组个数。
         * @example `0`
         */
        RiskCount: number;
        /**
         * 存储节点组总个数。
         * @example `2`
         */
        ExpectedCount: number;
        /**
         * 存储节点组健康状态，取值说明：
         * - **RISK**：风险。
         * - **NORMAL**：健康。
         * - **UNAVAILABLE**：不可用。
         * @example `NORMAL`
         */
        Status: string;
    };
    /**
     * 集群的健康状态，取值说明：
     * - **RISK**：风险。
     * - **NORMAL**：健康。
     * - **UNAVAILABLE**：不可用。
     * >当集群的实例接入节点状态、计算节点组健康状态和存储节点组健康状态，三个健康状态均为**健康**且实例探活成功，则集群的健康状态为**健康**；当三个健康状态中包含**风险**时，则集群的健康状态为**风险**；当三个健康状态中包含**不可用**时，则集群的健康状态为**不可用**。
     * @example `NORMAL`
     */
    InstanceStatus: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEA`
     */
    RequestId: string;
}
