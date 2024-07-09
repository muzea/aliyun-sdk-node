export interface ListNamespaceRequest {
    /**
     * 实例ID
     * @example `cri-94klsruryslx****`
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
     * @example `test-namespace`
     */
    "NamespaceName"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 一页展示的列表数
     * @example `30`
     */
    "PageSize"?: number;
}
