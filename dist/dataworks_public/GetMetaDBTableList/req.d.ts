export interface GetMetaDBTableListRequest {
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大为100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 项目的唯一标识，格式为`odps.{projectName}`。仅当数据类型为odps时，需要配置该参数。
     * @example `odps.testProjectName`
     */
    "AppGuid": string;
    /**
     * EMR集群的ID，仅当数据类型为emr时，需要配置该参数。
     * @example `abc`
     */
    "ClusterId"?: string;
    /**
     * 数据库的名称。
     * @example `abc`
     */
    "DatabaseName"?: string;
    /**
     * 数据类型，目前仅支持odps和emr。
     * @example `odps`
     */
    "DataSourceType"?: string;
}
