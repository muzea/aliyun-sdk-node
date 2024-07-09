export interface ExportZookeeperDataRequest {
    /**
     * 实例ID。
     * @example `mse-cn-78v1l83****`
     */
    "InstanceId": string;
    /**
     * 导出类型，取值：
     * - transactionLog 事务日志
     * - snapshot 快照文件
     * @example `snapshot`
     */
    "ExportType": string;
    /**
     * 集群所在地域，MSE支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
