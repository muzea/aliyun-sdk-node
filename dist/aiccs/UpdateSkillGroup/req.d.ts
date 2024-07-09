export interface UpdateSkillGroupRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 技能组ID。
     * 可调用[QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups)接口，查看返回参数的**SkillGroupId**，即技能组ID。
     * > 不支持更新。
     * @example `123456`
     */
    "SkillGroupId": number;
    /**
     * 技能组名称。
     * > 不支持更新。
     * @example `自动化测试`
     */
    "SkillGroupName"?: string;
    /**
     * 技能组描述。
     * > 此参数支持更新。
     * @example `自动化测试`
     */
    "Description"?: string;
    /**
     * 技能组对外显示名称。
     * > 此参数支持更新。
     * @example `自动化测试`
     */
    "DisplayName"?: string;
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-****-70b6a298d94d`
     */
    "ClientToken"?: string;
}
