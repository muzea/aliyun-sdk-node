export interface UpdateTableRequest {
    /**
     * 是否为视图，包括0（否）和1（是）。该字段已废弃，请勿使用。
     * @example `0`
     */
    "IsView"?: number;
    /**
     * 表的可见性，包括0（对所有成员不可见）、1（对所有成员可见）和2（对工作空间成员可见）。
     * @example `1`
     */
    "Visibility"?: number;
    /**
     * 表的生命周期，单位为天。生命周期为空时，表示永久存储。
     * @example `10`
     */
    "LifeCycle"?: number;
    /**
     * 关联的类目ID。
     * @example `101`
     */
    "CategoryId"?: number;
    /**
     * 逻辑层级ID。
     * @example `101`
     */
    "LogicalLevelId"?: number;
    /**
     * 物理层级ID。
     * @example `101`
     */
    "PhysicsLevelId"?: number;
    /**
     * 外表的类型，包括0（OSS）、1（TableStore）、2（Volume）和3（MySQL）。该字段已废弃，请勿使用。
     * @example `1`
     */
    "ExternalTableType"?: string;
    /**
     * 外表的存储地址。该字段已废弃，请勿使用。
     * @example `location`
     */
    "Location"?: string;
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks控制台获取工作空间ID。
     * @example `101`
     */
    "ProjectId"?: number;
    /**
     * MaxCompute表名称。
     * @example `abc`
     */
    "TableName": string;
    /**
     * MaxCompute Endpoint。不填时，默认取项目对应的Endpoint。
     * @example `odps://`
     */
    "Endpoint"?: string;
    /**
     * DataWorks工作空间的环境，包括0（开发环境）和1（生产环境）。
     * @example `1`
     */
    "EnvType"?: number;
    /**
     * MaxCompute项目的唯一标识，格式为odps.{projectName}。
     * @example `odps.test`
     */
    "AppGuid"?: string;
    /**
     * 表是否存在：
     * - true：是，表存在。
     * - false：否，表不存在。
     * 该字段已废弃，请勿使用。
     * @example `true`
     */
    "CreateIfNotExists"?: boolean;
    /**
     * 需要更新的MaxCompute表是否为分区表，包括0（否）和1（是）。该字段已废弃，请勿使用。
     * 目前代码会根据Column.N.isPartitionCol参数判断MaxCompute表是否为分区表，当Column.N.isPartition参数取值为1时，则认为MaxCompute表为分区表。
     * @example `0`
     */
    "HasPart"?: number;
    /**
     * 备注信息。
     * @example `备注`
     */
    "Comment"?: string;
    /**
     * 表Schema信息。在ODPS，当您启动了三层模型时需要填写Schema信息。
     * @example `default`
     */
    "Schema"?: string;
    /**
     * 字段列表
     */
    "Columns"?: {
        /**
         * 字段的中文名称。
         * @example `中文`
         */
        ColumnNameCn: string;
        /**
         * 字段的名称。
         * @example `abc`
         */
        ColumnName: string;
        /**
         * 字段的备注。
         * @example `备注`
         */
        Comment: string;
        /**
         * 字段的类型，请参见MaxCompute支持的字段类型。
         * @example `string`
         */
        ColumnType: string;
        /**
         * 字段的序号。如果字段为分区字段，则不支持配置Columns.N.SeqNumber。
         * @example `1`
         */
        SeqNumber: number;
        /**
         * 字段的长度。
         * @example `10`
         */
        Length: number;
        /**
         * 是否为分区字段，包括0（否）和1（是）。
         * @example `0`
         */
        IsPartitionCol: boolean;
    }[];
    /**
     * 字段列表
     */
    "Themes"?: {
        /**
         * 关联的主题ID。
         * @example `101`
         */
        ThemeId: number;
        /**
         * 主题ID对应的层级。
         * @example `101`
         */
        ThemeLevel: number;
    }[];
}
