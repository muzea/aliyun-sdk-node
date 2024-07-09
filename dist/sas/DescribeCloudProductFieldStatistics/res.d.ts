export interface DescribeCloudProductFieldStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 云产品统计信息。
     */
    GroupedFields: {
        /**
         * 不同类型云产品数量的统计信息。其中**MachineType**表示资产类型，**Count**表示资产类型对应的资产数量。
         * 以下为**MachineType**取值说明：
         * - **1**：负载均衡
         * - **2**：NAT网关
         * - **3**：RDS数据库
         * - **4**：MongoDB数据库
         * @example `[{"MachineType":1,"Count":11}]`
         */
        CategoryCount: string;
        /**
         * 所有云产品数量。
         * @example `100`
         */
        InstanceCount: number;
        /**
         * 存在风险的云产品数量。
         * @example `90`
         */
        RiskInstanceCount: number;
    };
}
