export interface GetModelFeatureResponse {
    /**
     * 请求ID。
     * @example `0C89F5E1-7F24-5EEC-9F05-508A39278CC8`
     */
    RequestId: string;
    /**
     * 项目ID。
     * @example `5`
     */
    ProjectId: string;
    /**
     * 项目名称。
     * @example `project1`
     */
    ProjectName: string;
    /**
     * 模型特征名称。
     * @example `model_feature1`
     */
    Name: string;
    /**
     * 创建人的阿里云账号ID。
     * @example `1231243253****`
     */
    Owner: string;
    /**
     * 创建时间。
     * @example `2023-07-04T14:46:22.227+08:00`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2023-07-04T14:46:22.227+08:00`
     */
    GmtModifiedTime: string;
    /**
     * Label表ID。
     * @example `3`
     */
    LabelTableId: string;
    /**
     * Label表名称。
     * @example `label_table1`
     */
    LabelTableName: string;
    /**
     * 导出训练集表的名称。
     * @example `table1`
     */
    TrainingSetTable: string;
    /**
     * 导出训练集FG表的名称。
     * @example `table2`
     */
    TrainingSetFGTable: string;
    /**
     * 特征列表。
     */
    Features: {
        /**
         * 特征视图ID。
         * @example `3`
         */
        FeatureViewId: string;
        /**
         * 特征视图名称。
         * @example `feature_view_1`
         */
        FeatureViewName: string;
        /**
         * 特征名称。
         * @example `feature1`
         */
        Name: string;
        /**
         * 特征类型。
         * ● INT32
         * ● INT64
         * ● FLOAT
         * ● DOUBLE
         * ● STRING
         * ● BOOLEAN
         * ● TIMESTAMP
         * @example `INT32`
         */
        Type: string;
        /**
         * 特征别名。
         * @example `feature2`
         */
        AliasName: string;
    }[];
    /**
     * 特征关系。
     */
    Relations: {
        /**
         * Domain列表。
         */
        Domains: {
            /**
             * Domain ID。
             * @example `3`
             */
            Id: string;
            /**
             * Domain名称。
             * @example `feature_entity_1`
             */
            Name: string;
            /**
             * Domain类型。
             * ● FeatureEntity-特征实体
             * ● FeatureView-特征视图
             * ● ModelFeature-模型特征
             * @example `FeatureEntity`
             */
            DomainType: string;
        }[];
        /**
         * 特征关系连接信息列表。
         */
        Links: {
            /**
             * 连接头ID。
             * @example `model_feature_2`
             */
            From: string;
            /**
             * 连接尾ID。
             * @example `feature_entity_3`
             */
            To: string;
            /**
             * 连接依赖字段。
             * @example `user_id`
             */
            Link: string;
        }[];
    };
    /**
     * 导出训练样本表脚本。
     * @example `from feature_store_py.fs_client import FeatureStoreClient\nfrom feature_store_py.fs_project import FeatureStoreProject\nfrom feature_store_py.fs_datasource import LabelInput, MaxComputeDataSource, TrainingSetOutput\nfrom feature_store_py.fs_features import FeatureSelector\nfrom feature_store_py.fs_config import LabelInputConfig, PartitionConfig, FeatureViewConfig\nfrom feature_store_py.fs_config import TrainSetOutputConfig, EASDeployConfig\nimport datetime\nimport sys\n\ncur_day = args['dt']\nprint('cur_day = ', cur_day)\noffset = datetime.timedelta(days=-1)\npre_day = (datetime.datetime.strptime(cur_day, '%Y%m%d') + offset).strftime('%Y%m%d')\nprint('pre_day = ', pre_day)\n\n\naccess_key_id = o.account.access_id\naccess_key_secret = o.account.secret_access_key\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region='cn-beijing')\ncur_project_name = 'p1'\nproject = fs.get_project(cur_project_name)\n\nlabel_partitions = PartitionConfig(name = 'ds', value = cur_day)\nlabel_input_config = LabelInputConfig(partition_config=label_partitions)\n\nfeature_view_1_partitions = PartitionConfig(name = 'ds', value = pre_day)\nfeature_view_1_config = FeatureViewConfig(name = 'user_fea',\npartition_config=feature_view_1_partitions)\n\nfeature_view_2_partitions = PartitionConfig(name = 'ds', value = pre_day)\nfeature_view_2_config = FeatureViewConfig(name = 'seq_fea',\npartition_config=feature_view_2_partitions)\n\nfeature_view_3_partitions = PartitionConfig(name = 'ds', value = pre_day)\nfeature_view_3_config = FeatureViewConfig(name = 'item_fea',\npartition_config=feature_view_3_partitions)\n\nfeature_view_config_list = [feature_view_1_config,feature_view_2_config,feature_view_3_config]\ntrain_set_partitions = PartitionConfig(name = 'ds', value = cur_day)\ntrain_set_output_config = TrainSetOutputConfig(partition_config=train_set_partitions)\n\n\nmodel_name = 'rank_v1'\ncur_model = project.get_model(model_name)\ntask = cur_model.export_train_set(label_input_config, feature_view_config_list, train_set_output_config)\ntask.wait()\nprint('task_summary = ', task.task_summary)\n`
     */
    ExportTrainingSetTableScript: string;
}
