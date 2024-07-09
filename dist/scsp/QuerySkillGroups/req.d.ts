export interface QuerySkillGroupsRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 当前页（默认为1）
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小（默认为20）
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * 技能组名称
     * @example `自动化技能组`
     */
    "GroupName"?: string;
    /**
     * 技能组类型,有以下枚举值： 1：热线 2：在线
     * 4：工单
     * @example `2`
     */
    "GroupType"?: number;
    /**
     * 技能组id
     * @example `123456`
     */
    "GroupId"?: number;
}
