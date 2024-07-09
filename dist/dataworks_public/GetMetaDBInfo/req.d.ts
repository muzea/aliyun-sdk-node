export interface GetMetaDBInfoRequest {
    /**
     * 引擎ID，格式为`引擎类型.引擎名称`。
     * @example `odps.some_engine_name`
     */
    "AppGuid"?: string;
    /**
     * EMR集群的clusterId。
     * @example `abc`
     */
    "ClusterId"?: string;
    /**
     * EMR集群的数据库。
     * @example `abc`
     */
    "DatabaseName"?: string;
    /**
     * 数据类型，包括odps和emr。
     * @example `emr`
     */
    "DataSourceType"?: string;
}
