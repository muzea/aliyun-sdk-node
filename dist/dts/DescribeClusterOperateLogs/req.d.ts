export interface DescribeClusterOperateLogsRequest {
    /**
     * 起始时间戳，当不传时默认最近返回七天的数据，单位为毫秒（ms）。
     * @example `1650866955000`
     */
    "StartTime"?: number;
    /**
     * 结束时间戳，单位为毫秒（ms）。
     * @example `1650866995000`
     */
    "EndTime"?: number;
    /**
     * DTS专属集群ID。
     * @example `dtsxxxxx`
     */
    "DedicatedClusterId": string;
    /**
     * 每页日志的请求条数，默认值为：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
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
