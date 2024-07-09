export interface ListInstanceRequest {
    /**
     * 实例名称。
     * @example `test`
     */
    "InstanceName"?: string;
    /**
     * 实例状态，取值：
     * - `PENDING`：初始化中。
     * - `INIT_ERROR`：初始化失败。
     * - `STARTING`：启动中。
     * - `RUNNING`：运行中。
     * - `STOPPING`：停止中。
     * - `STOPPED`：已停止。
     * - `DELETING`：删除中。
     * - `DELETED`：已删除。
     * @example `RUNNING`
     */
    "InstanceStatus"?: string;
    /**
     * 页号。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmv36i4is****`
     */
    "ResourceGroupId"?: string;
}
