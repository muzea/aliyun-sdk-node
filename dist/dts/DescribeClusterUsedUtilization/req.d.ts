export interface DescribeClusterUsedUtilizationRequest {
    /**
     * 当**MetricType**为**CLUSTER**填入独享集群ID，否则为**nodeid**。
     * @example `nodeid`
     */
    "DedicatedClusterId": string;
    /**
     * 默认为**ALIYUN**。
     * @example `ALIYUN`
     */
    "Env"?: string;
    /**
     * 查询集群或节点，取值：
     * - **CLUSTER**（默认值）：集群。
     * - **NODE**：节点
     * @example `NODE`
     */
    "MetricType"?: string;
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 迁移或同步任务ID。
     * @example `k2gm967v16f****`
     */
    "DtsJobId"?: string;
    "OwnerID"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
}
