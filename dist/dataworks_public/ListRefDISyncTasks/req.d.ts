export interface ListRefDISyncTasksRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 需要查看的目标数据源名称。您可以调用[ListDataSources](~~211431~~)接口获取数据源名称。
     * @example `mysql_datasource`
     */
    "DatasourceName": string;
    /**
     * 目标数据源所关联的数据集成同步任务的任务类型。取值如下：
     * - DI_OFFLINE：表示数据集成离线同步任务。
     * - DI_REALTIME：表示数据集成实时同步任务。
     * @example `DI_OFFLINE`
     */
    "TaskType": string;
    /**
     * 选择目标数据源作为数据集成同步任务的源端或目的端。取值如下：
     * - from：目标数据源作为数据集成同步任务的源端。
     * - to：目标数据源作为数据集成同步任务的目的端。
     * @example `from`
     */
    "RefType": string;
    /**
     * 页码数。最小值1，最大值100
     * @example `11`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的数据条数。
     * @example `50`
     */
    "PageSize"?: number;
}
