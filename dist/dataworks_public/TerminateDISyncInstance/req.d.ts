export interface TerminateDISyncInstanceRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间管理页面获取ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * DI_REALTIME表示实时同步任务。
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * 实时同步任务的文件ID。
     * @example `100`
     */
    "FileId": number;
}
