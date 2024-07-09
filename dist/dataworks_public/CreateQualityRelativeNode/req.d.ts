export interface CreateQualityRelativeNodeRequest {
    /**
     * 引擎或者数据源的类型。
     * @example `ODPS`
     */
    "EnvType": string;
    /**
     * 分区表达式。
     * @example `dt=$[yyyymmdd]`
     */
    "MatchExpression": string;
    /**
     * 调度节点ID，您可以调用[ListNodes](~~173979~~)接口获取节点ID。
     * @example `12321`
     */
    "NodeId": number;
    /**
     * 工作空间的ID。
     * @example `123`
     */
    "ProjectId": number;
    /**
     * 关联调度的节点项目。
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
     * 节点所在的项目空间ID。
     * @example `1234`
     */
    "TargetNodeProjectId": number;
}
