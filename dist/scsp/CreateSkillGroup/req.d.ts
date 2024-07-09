export interface CreateSkillGroupRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 技能组名称
     * @example `在线自动化技能组`
     */
    "SkillGroupName": string;
    /**
     * 技能组描述
     * @example `在线自动化技能组`
     */
    "Description"?: string;
    /**
     * 技能组对外显示名
     * @example `在线自动化技能组`
     */
    "DisplayName"?: string;
    /**
     * 技能组类型,有以下枚举值：
     * 1：热线
     * 2：在线
     * 4：工单
     * @example `2`
     */
    "ChannelType": number;
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
}
