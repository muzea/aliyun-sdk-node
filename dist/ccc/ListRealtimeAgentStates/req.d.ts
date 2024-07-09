export interface ListRealtimeAgentStatesRequest {
    /**
     * 按技能组ID过滤，非必填，默认为空，表示不过滤。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID列表，格式为JSON数组的字符串，数组元素最多20个，非必填，默认为空，表示匹配当前实例下的所有坐席。
     * @example `["agent1@ccc-test", "agent2@ccc-test"]`
     */
    "AgentIdList"?: string;
    /**
     * 按状态列表过滤，非必填，默认为空，表示匹配所有状态。
     * @example `["ACW", "Dialing"]`
     */
    "StateList"?: string;
    /**
     * 按坐席名称进行模糊匹配。
     * @example `agent`
     */
    "AgentName"?: string;
    /**
     * 按工作模式列表过滤，非必填，默认为空，表示匹配所有工作模式。
     * @example `["OFFICE_PHONE","ON_SITE"]`
     */
    "WorkModeList"?: string;
    /**
     * 过滤仅外呼模式下的坐席，非必填，默认为空，表示不按仅外呼模式过滤。
     * @example `false`
     */
    "OutboundScenario"?: boolean;
    /**
     * 模糊过滤，可以是坐席展示名、坐席工号或坐席分机号的全部或者一部分，非必填，默认为空，表示不过滤。
     * @example `agent`
     */
    "Query"?: string;
    /**
     * 按通话类型列表过滤，格式为JSON数组的字符串，数组元素为通话类型，非必填，默认为空，表示匹配所有的通话类型。
     * @example `["Inbound", "Outbound"]`
     */
    "CallTypeList"?: string;
    "MediaType"?: string;
}
