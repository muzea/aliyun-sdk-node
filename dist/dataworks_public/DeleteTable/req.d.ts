export interface DeleteTableRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `101`
     */
    "ProjectId"?: number;
    /**
     * MaxCompute表的名称。
     * @example `table1`
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
     * @example `1`
     */
    "EnvType"?: number;
    /**
     * MaxCompute项目的唯一标识，格式为odps.{projectName}。
     * @example `odps.test`
     */
    "AppGuid"?: string;
    /**
     * 表Schema信息。在ODPS，当您启动了三层模型时需要填写Schema信息。
     * @example `default`
     */
    "Schema"?: string;
}
