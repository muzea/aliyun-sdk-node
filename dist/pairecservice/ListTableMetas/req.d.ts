export interface ListTableMetasRequest {
    /**
     * 数据表类型。
     * - MaxCompute
     * - Hologres
     * @example `MaxCompute`
     */
    "Type"?: string;
    /**
     * 表名称过滤。
     * @example `test1`
     */
    "Name"?: string;
    /**
     * 数据表模块。
     * - ABTest-实验数据表。
     * - ExperimentTool-实验工具表。
     * - DataDiagnosis-数据诊断
     * @example `ABTest`
     */
    "Module": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
}
