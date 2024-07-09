export interface GetProjectFeatureViewResponse {
    /**
     * 请求ID。
     * @example `BFD68AD5-398C-5AC4-A357-C7EA8DF33C26`
     */
    RequestId: string;
    /**
     * 特征视图ID。
     * @example `3`
     */
    FeatureViewId: string;
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
     * 特征实体ID。
     * @example `4`
     */
    FeatureEntityId: string;
    /**
     * 特征实体名称。
     * @example `entity1`
     */
    FeatureEntityName: string;
    /**
     * 特征实体的Join ID。
     * @example `user_id`
     */
    JoinId: string;
    /**
     * 特征视图名称。
     * @example `feature_view1`
     */
    Name: string;
    /**
     * 特征视图创建人。
     * @example `1231421342****`
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
     * 写入方式。
     * ● ByReadyMadeTable-使用现成表注册
     * ● Custom-自定义表结构
     * @example `Custom`
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
     * @example `{}`
     */
    Config: string;
    /**
     * 同步时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtSyncTime: string;
    /**
     * 最后一次更新的配置。
     * @example `{}`
     */
    LastSyncConfig: string;
    /**
     * 字段列表。
     */
    Fields: {
        /**
         * 字段名称。
         * @example `field1`
         */
        Name: string;
        /**
         * 字段类型。
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
         * 字段属性列表，可选值包括：
         * ● Partition-分区字段
         * ● PrimaryKey-主键
         * ● EventTime-事件时间
         */
        Attributes: string[];
    }[];
}
