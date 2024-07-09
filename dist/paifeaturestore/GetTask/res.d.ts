export interface GetTaskResponse {
    /**
     * 请求ID。
     * @example `37D19490-AB69-567D-A852-407C94E510E9`
     */
    RequestId: string;
    /**
     * 项目ID。
     * @example `3`
     */
    ProjectId: string;
    /**
     * 项目名称。
     * @example `project_1`
     */
    ProjectName: string;
    /**
     * 任务类型。
     * ● OfflineToOnline-离在线数据同步。
     * ● ExportTrainingSet-导出训练样本表。
     * @example `OfflineToOnline`
     */
    Type: string;
    /**
     * 任务目标类型。
     * ● ModelFeature-模型特征
     * ● FeatureView-特征视图
     * @example `ModelFeature`
     */
    ObjectType: string;
    /**
     * 任务目标ID。
     * @example `3`
     */
    ObjectId: string;
    /**
     * 状态。
     * ● Initializing-初始化中。
     * ● Running-运行中。
     * ● Success-成功。
     * ● Failure-失败。
     * @example `Running`
     */
    Status: string;
    /**
     * 任务配置。
     * @example `{
        "mode": "overwrite",
        "partitions": {
            "dt": "20230820"
        },
        "event_time": "",
        "config": {},
        "offline_to_online": true
    }`
     */
    Config: string;
    /**
     * 任务运行配置。
     * @example `DROP TABLE IF EXISTS public.fsxxx`
     */
    RunningConfig: string;
    /**
     * 创建时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtModifiedTime: string;
    /**
     * 执行时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtExecutedTime: string;
    /**
     * 完成时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtFinishedTime: string;
}
