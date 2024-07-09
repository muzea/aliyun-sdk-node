export interface DeployDISyncTaskRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间管理页面获取ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 目标数据源所关联的数据集成同步任务的任务类型。取值如下：
     * - DI_REALTIME：表示数据集成实时同步任务。
     * - DI_SOLUTION：表示数据集成同步解决方案。
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * - 当TaskType为DI_REALTIME时，则FileId为实时同步任务的文件ID。
     * - 当TaskType为DI_SOLUTION时，则FileId为同步解决方案的任务ID。
     * 您可以调用[ListFiles](~~173942~~)接口获取任务ID。
     * @example `100`
     */
    "FileId": number;
}
