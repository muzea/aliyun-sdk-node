export interface ListChartNamespaceRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 命名空间状态，取值：
     * - `NORMAL`：正常
     * - `DELETING`：删除中
     * @example `NORMAL`
     */
    "NamespaceStatus"?: string;
    /**
     * 命名空间名称
     * @example `test`
     */
    "NamespaceName"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小
     * @example `30`
     */
    "PageSize"?: number;
}
