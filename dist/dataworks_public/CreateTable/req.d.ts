export interface CreateTableRequest {
    /**
     * 指定创建视图或创建表：
     * - 0为创建表。
     * - 1为创建视图。
     * @example `0`
     */
    "IsView"?: number;
    /**
     * 表或工作空间是否可见：
     * - 0为表和工作空间均不可见。
     * - 1为表和工作空间均可见。
     * - 2为仅工作空间可见。
     * @example `1`
     */
    "Visibility"?: number;
    /**
     * 表的生命周期，单位为天。默认取值为空，表示永久存储。
     * @example `10`
     */
    "LifeCycle"?: number;
    /**
     * 关联类目的ID。您可以通过[GetMetaCategory](~~173932~~)接口查询可以关联的类目ID。
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
     * 外部表的存储类型。取值如下：
     * - 0表示OSS。
     * - 1表示TableStore。
     * - 2表示Volume。
     * - 3表示MySQL。
     * @example `0`
     */
    "ExternalTableType"?: string;
    /**
     * 外部表的存储地址。
     * @example `location`
     */
    "Location"?: string;
    /**
     * DataWorks工作空间的ID。
     * @example `23`
     */
    "ProjectId"?: number;
    /**
     * 表的名称。
     * @example `tableName1`
     */
    "TableName": string;
    /**
     * MaxCompute的Endpoint。
     * @example `odps://abc`
     */
    "Endpoint"?: string;
    /**
     * DataWorks工作空间的环境。取值如下：
     * - 0表示开发环境。
     * - 1表示生产环境。
     * @example `1`
     */
    "EnvType"?: number;
    /**
     * MaxCompute项目的ID，格式为odps.{projectName}。
     * @example `odps.test`
     */
    "AppGuid"?: string;
    /**
     * 备注信息。
     * @example `备注`
     */
    "Comment"?: string;
    /**
     * 创建的MaxCompute表是否为分区表，包括1（是）和0（否）。该字段已废弃，请勿使用。
     * 目前代码会根据Column.N.isPartitionCol参数判断MaxCompute表是否为分区表，当Column.N.isPartitionCol参数取值为true时，则认为MaxCompute表为分区表。
     * @example `0`
     */
    "HasPart"?: number;
    /**
     * 保留字段。
     * @example `保留字段`
     */
    "ClientToken"?: string;
    /**
     * 表Schema信息。在ODPS，当您启动了三层模型时需要填写Schema信息。
     * @example `default`
     */
    "Schema"?: string;
    /**
     * 字段列表，最大支持1000个字段。
     */
    "Columns": {
        /**
         * 字段的中文名称。
         * @example `中文名`
         */
        ColumnNameCn: string;
        /**
         * 字段的名称。
         * CreateTable API当前最多支持配置1000个字段。
         * @example `columnName1`
         */
        ColumnName: string;
        /**
         * 字段的备注信息。
         * @example `备注`
         */
        Comment: string;
        /**
         * 字段的类型。
         * @example `string`
         */
        ColumnType: string;
        /**
         * 字段的序列号。您可以指定字段在表中的排序，默认按照创建请求的顺序排序。
         * 如果字段为分区字段，则不支持配置Columns.N.SeqNumber。
         * @example `1`
         */
        SeqNumber: number;
        /**
         * 字段的长度，详情请参见：<props="intl">[数据类型版本](~~159541~~)</props><props="china">[数据类型版本](~~159541~~)</props>。
         * @example `10`
         */
        Length: number;
        /**
         * 当前字段是否为分区字段。
         * @example `true`
         */
        IsPartitionCol: boolean;
    }[];
    /**
     * 字段列表
     */
    "Themes"?: {
        /**
         * 主题ID。
         * @example `101`
         */
        ThemeId: number;
        /**
         * 主题ID对应的主题层级。
         * @example `101`
         */
        ThemeLevel: number;
    }[];
}
