export interface DeleteQualityRelativeNodeRequest {
    /**
     * 引擎或者数据源的类型。
     * 枚举值：
     * - cdh
     * - analyticdb_for_mysql
     * - odps
     * - emr
     * - hadoop
     * - holodb
     * - hybriddb_for_postgresql
     * @example `ODPS`
     */
    "EnvType": string;
    /**
     * 分区表达式。
     * @example `dt=$[yyyymmdd]`
     */
    "MatchExpression": string;
    /**
     * 节点ID。
     * @example `156234`
     */
    "NodeId": number;
    /**
     * 工作空间的ID。
     * @example `12345`
     */
    "ProjectId": number;
    /**
     * 关联调度节点的项目。
     * @example `autotest`
     */
    "TargetNodeProjectName": string;
    /**
     * 引擎或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 表的名称。
     * @example `dual`
     */
    "TableName": string;
    /**
     * 关联调度节点的项目ID。
     * @example `12345`
     */
    "TargetNodeProjectId": number;
}
