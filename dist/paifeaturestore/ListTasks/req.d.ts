export interface ListTasksRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 项目ID，可从接口ListProjects获取。
     * @example `4`
     */
    "ProjectId": string;
    /**
     * 任务对象类型。
     * ● ModelFeature-模型特征。
     * ● FeatureView-特征视图。
     * @example `ModelFeature`
     */
    "ObjectType"?: string;
    /**
     * 任务对象ID，可从接口ListModelFeatures、ListFeatureViews获取。
     * @example `4`
     */
    "ObjectId"?: string;
    /**
     * 状态。
     * ● Initializing-初始化中。
     * ● Running-运行中。
     * ● Success-成功。
     * ● Failure-失败。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 任务类型过滤。
     * ● OfflineToOnline-离在线数据同步。
     * ● ExportTrainingSet-导出训练样本表。
     * @example `OfflineToOnline`
     */
    "Type"?: string;
    /**
     * 任务ID过滤。
     */
    "TaskIds"?: string[];
}
