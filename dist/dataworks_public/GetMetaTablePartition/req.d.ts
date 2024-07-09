export interface GetMetaTablePartitionRequest {
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid"?: string;
    /**
     * EMR集群的ID，仅当数据类型为EMR时，需要配置该参数。
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
     * 数据类型，支持ODPS或者EMR。
     * @example `emr`
     */
    "DataSourceType"?: string;
    /**
     * 表分区的排序逻辑。
     */
    "SortCriterion"?: {
        /**
         * 表分区的排序字段。您可通过name、modify_time排序。
         * 默认按照表分区的创建时间排序。
         * @example `name`
         */
        SortField: string;
        /**
         * 表分区的排序顺序，支持使用asc、desc方式排序。默认使用desc。
         * @example `desc`
         */
        Order: string;
    };
}
