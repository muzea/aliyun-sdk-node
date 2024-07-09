export interface DeleteDISyncTaskRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数用于确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 数据集成同步任务的类型。
     * 当前仅支持取值为DI_REALTIME，表示实时数据同步任务。
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * 实时数据同步任务的ID。您可以调用[ListFiles](~~173942~~)接口获取任务ID。
     * @example `100`
     */
    "FileId": number;
}
