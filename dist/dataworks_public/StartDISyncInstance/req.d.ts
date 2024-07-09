export interface StartDISyncInstanceRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 启动数据集成同步任务的任务类型。 目前仅支持使用DI_REALTIME和DI_SOLUTION两种类型：
     * - DI_REALTIME代表启动实时任务。
     * - DI_SOLUTION代表启动解决方案。
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * - 当TaskType参数配置为DI_REALTIME，则FileId为实时同步任务的任务ID。
     * - 当TaskType参数配置为DI_SOLUTION，则FileId为解决方案同步任务的任务ID。
     * @example `100`
     */
    "FileId": number;
    /**
     * - 当TaskType参数配置为DI_REALTIME，则StartParam为实时同步任务的启动参数，包括Failover的设置，脏数据条数，以及DDL的参数配置。
     * - 当TaskType参数配置为DI_SOLUTION，则StartParam参数无意义。
     * @example `{"failoverLimit":{"count":10,"interval":30},"errorLimit":{"record":0},"ddlMarkMap":{"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"IGNORE","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"NORMAL","DROPCOLUMN":"IGNORE","ADDCOLUMN":"NORMAL","RENAMETABLE":"CRITICAL"}}`
     */
    "StartParam"?: string;
}
