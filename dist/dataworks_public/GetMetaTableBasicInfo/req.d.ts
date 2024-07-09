export interface GetMetaTableBasicInfoRequest {
    /**
     * MaxCompute表的唯一标识。格式为odps.projectName.tableName。
     * > EMR场景下，该参数非必选。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid"?: string;
    /**
     * EMR集群的ID，当DataSourceType（数据类型）参数配置为EMR时，当前参数必配。
     * 您可以登录[EMR的控制台](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou)，获取集群ID。
     * @example `abc`
     */
    "ClusterId"?: string;
    /**
     * 数据库的名称。仅当数据类型为EMR时，需要配置该参数。
     * 您可以调用[ListMetaDB](~~2780105~~)接口获取。
     * @example `abc`
     */
    "DatabaseName"?: string;
    /**
     * EMR的表名称。仅当数据类型为EMR时，需要配置该参数。
     * 您可以通过调用[GetMetaDBTableList](~~2780086~~)接口，获取表名称。
     * @example `abc`
     */
    "TableName"?: string;
    /**
     * 数据类型，包括odps和emr。
     * @example `emr`
     */
    "DataSourceType"?: string;
    /**
     * 是否包含扩展字段。
     * 扩展字段包含读取次数、收藏次数、浏览次数等。
     * 仅当数据类型为ODPS时，该参数生效。
     * @example `false`
     */
    "Extension"?: boolean;
}
