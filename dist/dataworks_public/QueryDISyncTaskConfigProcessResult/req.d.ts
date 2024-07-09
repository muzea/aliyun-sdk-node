export interface QueryDISyncTaskConfigProcessResultRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 异步方式创建或更新的同步任务的任务类型。取值如下：
     * - DI_REALTIME：表示实时同步任务。
     * - DI_SOLUTION：表示解决方案同步任务。
     * 仅支持使用异步方式创建或更新数据集成实时同步任务和解决方案同步任务。
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * 异步线程的ID。您可以调用[GenerateDISyncTaskConfigForCreating](~~383463~~)或[GenerateDISyncTaskConfigForUpdating](~~383464~~)接口获取ID。
     * - GenerateDISyncTaskConfigForCreating：表示创建数据集成同步任务。
     * - GenerateDISyncTaskConfigForUpdating：表示更新数据集成同步任务。
     * @example `10`
     */
    "AsyncProcessId": number;
}
