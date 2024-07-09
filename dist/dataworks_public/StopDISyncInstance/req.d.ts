export interface StopDISyncInstanceRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 停止数据集成同步任务的任务类型。目前仅支持使用DI_REALTIME类型。
     * DI_REALTIME代表实时任务。
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * FileId为实时同步任务的ID。您可以调用[ListFiles](~~173942~~)接口获取任务ID。
     * @example `100`
     */
    "FileId": number;
}
