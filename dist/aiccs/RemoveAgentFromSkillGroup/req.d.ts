export interface RemoveAgentFromSkillGroupRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-78v1gnp97002`
     */
    "InstanceId": string;
    /**
     * 技能组ID。
     * 可调用[QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups)接口，查看返回参数的**SkillGroupId**，即技能组ID。
     * @example `1146****`
     */
    "SkillGroupId": number;
    /**
     * 坐席ID列表。
     */
    "AgentIds": number[];
}
