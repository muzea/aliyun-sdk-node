export interface GetQualityEntityRequest {
    /**
     * 引擎或数据源的名称。您可以从数据源配置中获取名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 分区表名称。您可以调用[GetMetaTablePartition](~~173923~~)查看分区表名称。
     * @example `dual`
     */
    "TableName": string;
    /**
     * 引擎或数据源的类型。
     * 取值范围：
     * - cdh
     * - analyticdb_for_mysql
     * - odps
     * - emr
     * - hadoop
     * - holodb
     * - hybriddb_for_postgresql
     * @example `odps`
     */
    "EnvType": string;
    /**
     * 分区表达式。
     * @example `dt=$[yyyymmdd]`
     */
    "MatchExpression"?: string;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `12345`
     */
    "ProjectId": number;
}
