export interface ListTasksResponse {
    /**
     * 请求ID。
     * @example `C33E160C-BFCA-5719-B958-942850E949F6`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 任务列表。
     */
    Tasks: {
        /**
         * 创建时间。
         * @example `2023-07-04T11:26:09.036+08:00`
         */
        GmtCreateTime: string;
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
        /**
         * 任务对象ID。
         * @example `5`
         */
        ObjectId: string;
        /**
         * 任务对象类型。
         * ● ModelFeature-模型特征
         * ● FeatureView-特征视图
         * @example `ModelFeature`
         */
        ObjectType: string;
        /**
         * 项目ID。
         * @example `4`
         */
        ProjectId: string;
        /**
         * 项目名称。
         * @example `project_1`
         */
        ProjectName: string;
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
         * 任务ID。
         * @example `4`
         */
        TaskId: string;
        /**
         * 任务类型。
         * ● OfflineToOnline-离在线数据同步。
         * ● ExportTrainingSet-导出训练样本表。
         * @example `OfflineToOnline`
         */
        Type: string;
    }[];
}
