export interface UpdateAgentRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称，即账号注册时填写的手机或邮箱。实例内唯一。
     * > 不支持更新。
     * @example `username@example.com`
     */
    "AccountName": string;
    /**
     * 坐席对外显示名称。
     * @example `XX测试`
     */
    "DisplayName": string;
    /**
     * 坐席所属技能组。
     */
    "SkillGroupId"?: number[];
    /**
     * 坐席所属技能组列表。
     */
    "SkillGroupIdList"?: number[];
}
