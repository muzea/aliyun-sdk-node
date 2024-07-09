export interface GetFeatureConsistencyCheckJobConfigResponse {
    /**
     * 请求ID。
     * @example `728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
     */
    RequestId: string;
    /**
     * 特征一致性检查配置名称。
     * @example `feature_consistency_check1`
     */
    Name: string;
    /**
     * 场景ID。
     * @example `3`
     */
    SceneId: string;
    /**
     * 场景名称。
     * @example `scene1`
     */
    SceneName: string;
    /**
     * 状态。可能值为：
     * - Editable：可编辑的。
     * - Uneditable：不可编辑的。
     * @example `Editable`
     */
    Status: string;
    /**
     * 是否开启特征比对。
     * @example `true`
     */
    CompareFeature: boolean;
    /**
     * 基于该配置最近一次创建的任务ID。
     * @example `3`
     */
    LatestJobId: string;
    /**
     * 最近一次创建的任务的开始时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    LatestJobGmtSamplingStartTime: string;
    /**
     * 最近一次创建的任务的结束时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    LatestJobGmtSamplingEndTime: string;
    /**
     * 采样比例（0-1）。
     * @example `0.89`
     */
    SampleRate: string;
    /**
     * 数据回落数据源ID。
     * @example `reso-********`
     */
    FeatureLandingResourceId: string;
    /**
     * 数据回落数据源地址。
     * @example `mc_project_1`
     */
    FeatureLandingResourceUri: string;
    /**
     * EAS服务名称。
     * @example `eas_service_1`
     */
    EasServiceName: string;
    /**
     * fg_json文件名称。
     * @example `file.json`
     */
    FgJsonFileName: string;
    /**
     * user表名。
     * @example `user_table`
     */
    UserTable: string;
    /**
     * user_id字段名。
     * @example `user_id`
     */
    UserIdField: string;
    /**
     * user表分区字段。
     * @example `ds`
     */
    UserTablePartitionField: string;
    /**
     * user表分区字段格式：
     * - yyyymmdd
     * - yyyy-mm-dd
     * @example `yyyymmdd`
     */
    UserTablePartitionFieldFormat: string;
    /**
     * item表名。
     * @example `item_table`
     */
    ItemTable: string;
    /**
     * item_id字段名。
     * @example `item_id`
     */
    ItemIdField: string;
    /**
     * item表分区字段。
     * @example `ds`
     */
    ItemTablePartitionField: string;
    /**
     * item表分区字段格式：
     * - yyyymmdd
     * - yyyy-mm-dd
     * @example `yyyymmdd`
     */
    ItemTablePartitionFieldFormat: string;
    /**
     * 是否需要生成zip包。
     * @example `true`
     */
    GenerateZip: boolean;
    /**
     * 服务ID。
     * @example `4`
     */
    ServiceId: string;
    /**
     * 服务名称。
     * @example `service1`
     */
    ServiceName: string;
    /**
     * 工作流名称。
     * @example `work_flow_1`
     */
    WorkflowName: string;
    /**
     * OSS数据源ID。
     * @example `reso-********`
     */
    OssResourceId: string;
    /**
     * OSS bucket名称。
     * @example `oss_bucket_1`
     */
    OssBucket: string;
    /**
     * EasyRec版本。
     * @example `1.3.60`
     */
    EasyRecVersion: string;
    /**
     * EasyRec包路径。
     * @example `oss://*******`
     */
    EasyRecPackagePath: string;
    /**
     * fg_jar版本。
     * @example `1.0.0`
     */
    FgJarVersion: string;
    /**
     * 特征优先级，多个特征通过半角逗号（,）分开。
     * @example `feature1,feature2,feature3`
     */
    FeaturePriority: string;
    /**
     * 特征展示过滤，多个特征通过半角逗号（,）分开。
     * @example `feature1,feature2`
     */
    FeatureDisplayExclude: string;
    /**
     * 创建时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtModifiedTime: string;
    /**
     * 是否需要使用feature store，取值：
     * - true：使用，此时返回FeatureStoreProjectId、FeatureStoreProjectName、FeatureStoreModelId、FeatureStoreUserId、FeatureStoreItemId。
     * - false：不使用，此时UserTable、UserIdField、UserTablePartitionField、UserTablePartitionFieldFormat、ItemTable、ItemIdField、ItemTablePartitionField、ItemTablePartitionFieldFormat为必填项。
     * @example `true`
     */
    UseFeatureStore: boolean;
    /**
     * feature store项目名称。
     * @example `project-1`
     */
    FeatureStoreProjectName: string;
    /**
     * feature store model ID。
     * @example `2`
     */
    FeatureStoreModelId: string;
    /**
     * feature store user侧主键。
     * @example `user`
     */
    FeatureStoreUserId: string;
    /**
     * feature store item侧主键。
     * @example `item`
     */
    FeatureStoreItemId: string;
    /**
     * 序列特征中item特征所在的特征视图的名字。
     * @example `item-1`
     */
    FeatureStoreSeqFeatureView: string;
    /**
     * feature store项目ID
     * @example `prj-01`
     */
    FeatureStoreProjectId: string;
}
