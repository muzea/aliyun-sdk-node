export interface GenerateDISyncTaskConfigForUpdatingRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数用来确定本次API调用操作使用的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 使用异步方式更新数据集成同步任务的任务类型。取值如下：
     * - DI_REALTIME：表示实时同步任务。
     * - DI_SOLUTION：表示解决方案同步任务。
     * 仅支持使用异步方式更新数据集成实时同步任务和解决方案同步任务。
     * @example `DI_REALTIME`
     */
    "TaskType": string;
    /**
     * 更新同步任务的脚本语句。
     * 目前仅支持通过异步方式为数据集成同步任务新增表或者删除表，并且仅支持更新如下类型的同步任务：
     * - 同步MySQL数据至MaxCompute。
     * - 同步MySQL数据至Kafka。
     * - 同步MySQL数据至Hologres。
     * 同步任务中的SelectedTables用于多库模式选择同步表，Tables用于单库模式选择同步表。
     * - 当脚本中包含SelectedTables语句时，系统会使用SelectedTables语句中的表信息进行同步。
     * - 当脚本中包含Tables语句时，系统会使用Tables的字段信息进行同步。
     * @example `{"steps":[{"parameter":{"connection":[{"table":["xyx"]}]},"name":"Reader","category":"reader"}]}`
     */
    "TaskParam": string;
    /**
     * 幂等参数。用于避免多次调用导致操作重复。
     * @example `ABFUOEUOTRTRJKE`
     */
    "ClientToken"?: string;
    /**
     * 任务ID。
     * - 当TaskType参数配置为实时同步任务（DI_REALTIME），则TaskId为实时同步任务的FileId。
     * - 当TaskType参数配置为解决方案同步任务（DI_SOLUTION），则TaskId为解决方案同步任务的FileId。
     * @example `100`
     */
    "TaskId": number;
}
