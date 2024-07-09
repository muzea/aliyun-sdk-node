export interface DescribeAutoCcListCountRequest {
    /**
     * DDoS高防实例的ID。
     * > 您可以调用**DescribeInstanceIds**查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 要查询的黑白名单IP的来源。取值：
     * - **manual**：手动添加
     * - **auto**：自动添加
     * @example `manual`
     */
    "QueryType"?: string;
}
