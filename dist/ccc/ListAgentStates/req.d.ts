export interface ListAgentStatesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 按技能组ID过滤。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId"?: string;
    /**
     * 按坐席ID列表过滤。
     * @example `agent@ccc-test`
     */
    "AgentIds"?: string;
    /**
     * 按坐席状态过滤，只能按单个状态过滤。
     * @example `Ready`
     */
    "State"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，范围1-300。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 过滤掉离线坐席，固定为true，暂不支持false。
     * @example `true`
     */
    "ExcludeOfflineUsers"?: boolean;
}
