export interface SearchMetaTablesRequest {
    /**
     * 分页查询页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 表所在工作空间的标识。
     * @example `odps.engine_name`
     */
    "AppGuid"?: string;
    /**
     * 关键字采用分词匹配算法搜索表名，如果没有匹配的字段则返回空值。默认按照下划线分词搜索。
     * @example `test`
     */
    "Keyword": string;
    /**
     * 表的类型：0表示table，1表示view。如果不填，则默认搜索全部类型。
     * @example `0`
     */
    "EntityType"?: number;
    /**
     * EMR集群的ID，仅当数据类型为EMR时，需要配置该参数。
     * 您可以登录[EMR的控制台](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou)，获取集群ID。
     * @example `abc`
     */
    "ClusterId"?: string;
    /**
     * 数据类型，包括ODPS和emr。
     * @example `emr`
     */
    "DataSourceType"?: string;
    /**
     * 表Schema信息。在ODPS，用户启动了三层模型需要填写Schema信息
     * @example `default`
     */
    "Schema"?: string;
}
