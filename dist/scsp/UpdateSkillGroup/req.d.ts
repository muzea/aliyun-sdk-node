export interface UpdateSkillGroupRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 技能组id
     * @example `123456`
     */
    "SkillGroupId": number;
    /**
     * 技能组名称
     * @example `自动化测试`
     */
    "SkillGroupName"?: string;
    /**
     * 技能组描述
     * @example `自动化测试`
     */
    "Description"?: string;
    /**
     * 技能组对外显示名称
     * @example `自动化测试`
     */
    "DisplayName"?: string;
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * 渠道类型
     * @example `1`
     */
    "ChannelType"?: number;
}
