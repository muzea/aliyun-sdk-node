export interface RunTriggerNodeRequest {
    /**
     * 触发式节点的节点ID。您可参见[ListNodes](~~173979~~)获取节点ID信息。
     * @example `10000011`
     */
    "NodeId": number;
    /**
     * 触发式节点对应节点任务的13位的毫秒级定时时间戳。
     * @example `1606200230105`
     */
    "CycleTime": number;
    /**
     * 触发式节点实例所在的业务日期时间戳。
     * @example `1606200230105`
     */
    "BizDate": number;
    /**
     * 触发式节点所属的DataWorks工作空间ID。工作空间ID可参见[ListProjects](~~178393~~)查询。
     * @example `10001`
     */
    "AppId": number;
}
