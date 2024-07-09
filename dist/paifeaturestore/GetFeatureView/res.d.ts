export interface GetFeatureViewResponse {
    /**
     * 请求ID。
     * @example `72F15A8A-5A28-5B18-A0DE-0EABD7D3245A`
     */
    RequestId: string;
    /**
     * 项目ID。
     * @example `3`
     */
    ProjectId: string;
    /**
     * 项目名称。
     * @example `project1`
     */
    ProjectName: string;
    /**
     * 特征实体名称。
     * @example `featureEntity1`
     */
    FeatureEntityName: string;
    /**
     * 特征视图名称。
     * @example `featureView1`
     */
    Name: string;
    /**
     * 创建人的阿里云账号ID。
     * @example `12321421412****`
     */
    Owner: string;
    /**
     * 类型。
     * ● Batch-离线特征
     * ● Stream-实时特征
     * @example `Batch`
     */
    Type: string;
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
     * 特征实体ID。
     * @example `3`
     */
    FeatureEntityId: string;
    /**
     * 特征实体的Join ID。
     * @example `user_id`
     */
    JoinId: string;
    /**
     * 写入方式。
     * ● ByReadyMadeTable-使用现成表注册
     * ● Custom-自定义表结构
     * @example `custom`
     */
    WriteMethod: string;
    /**
     * 注册表名称。
     * @example `table1`
     */
    RegisterTable: string;
    /**
     * 注册表所在数据源ID。
     * @example `4`
     */
    RegisterDatasourceId: string;
    /**
     * 注册表所在数据源名称。
     * @example `datasource1`
     */
    RegisterDatasourceName: string;
    /**
     * 是否写入在线托管存储。
     * @example `false`
     */
    WriteToFeatureDB: boolean;
    /**
     * 是否同步在线特征表。
     * @example `true`
     */
    SyncOnlineTable: boolean;
    /**
     * 生命周期。
     * @example `90`
     */
    TTL: number;
    /**
     * 标签列表。
     */
    Tags: string[];
    /**
     * 配置。
     * @example `{"save_original_field":true}`
     */
    Config: string;
    /**
     * 同步时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtSyncTime: string;
    /**
     * 最近一次的同步配置。
     * @example `{
        "mode": "overwrite",
        "partitions": {
            "ds": {
                "value": "20230820"
            }
        },
        "event_time": "",
        "config": {},
        "offline_to_online": true
    }`
     */
    LastSyncConfig: string;
    /**
     * 字段列表。
     */
    Fields: {
        /**
         * 字段名称。
         * @example `user`
         */
        Name: string;
        /**
         * 字段类型。
         * ● int
         * ● string
         * ● float
         * @example `int`
         */
        Type: string;
        /**
         * 字段属性列表，可选值包括：
         * ● Partition-分区字段
         * ● PrimaryKey-主键
         * ● EventTime-事件时间
         */
        Attributes: string[];
    }[];
    /**
     * 同步数据脚本。
     * @example `from feature_store_py.fs_client import FeatureStoreClient\nimport datetime\nfrom feature_store_py.fs_datasource import MaxComputeDataSource\nimport sys\n\ncur_day = args['dt']\nprint('cur_day = ', cur_day)\n\naccess_key_id = o.account.access_id\naccess_key_secret = o.account.secret_access_key\nfs = FeatureStoreClient(access_key_id=access_key_id, access_key_secret=access_key_secret, region='cn-beijing')\ncur_project_name = 'p1'\nproject = fs.get_project(cur_project_name)\n\nfeature_view_name = 'user_fea'\nbatch_feature_view = project.get_feature_view(feature_view_name)\ntask = batch_feature_view.publish_table(partitions={'ds':cur_day}, mode='Overwrite')\ntask.wait()\ntask.print_summary()\n`
     */
    PublishTableScript: string;
}
