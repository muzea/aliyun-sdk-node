export interface ListExportZookeeperDataRequest {
    /**
     * 实例ID。
     * @example `mse-cn-7pp2d1****`
     */
    "InstanceId"?: string;
    /**
     * 页码。
     * @example `0`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
