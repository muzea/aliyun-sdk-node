export interface DescribeMetricListRequest {
    /**
     * 查询集群或节点，取值：
     * - **CLUSTER**：集群。
     * - **NODE**：节点
     * @example `NODE`
     */
    "MetricType"?: string;
    /**
     * - **InternetOut**：公网流出流量，单位为Byte。
     * - **diskusage_utilization**：磁盘使用率。
     * - **IntranetInRate**：内网流入流量，单位为Byte。
     * - **InternetIn**：公网流入流量，单位为Byte。
     * - **cpu_total**：CPU使用率。
     * - **memory_usedutilization**：内存使用率。
     * - **IntranetOutRate**：内网流出流量，单位为Byte。
     * @example `cpu_total`
     */
    "MetricName": string;
    /**
     * 观测间隔（单位秒），最小间隔为15秒。
     * @example `15`
     */
    "Period"?: number;
    /**
     * 观测值，当**MetricType**为**NODE**时，值为**nodeid**。
     * @example `nodeid`
     */
    "Param": string;
    /**
     * 起始时间戳，单位毫秒。
     * @example `1642476144000`
     */
    "StartTime"?: number;
    /**
     * 结束时间戳，单位毫秒。
     * @example `1642476194000`
     */
    "EndTime"?: number;
    /**
     * 默认为：**ALIYUN**。
     * @example `ALIYUN`
     */
    "Env"?: string;
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
     * 阿里云主账号ID。
     * @example `12323344****`
     */
    "AccountId"?: string;
}
