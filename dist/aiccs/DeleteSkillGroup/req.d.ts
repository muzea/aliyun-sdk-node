export interface DeleteSkillGroupRequest {
    /**
     * 外部技能组类型,有以下枚举值： 1：热线 2：在线
     * 4：工单
     * @example `2`
     */
    "OuterGroupType"?: string;
    /**
     * 外部技能组id
     * @example `123456`
     */
    "OuterGroupId"?: string;
}
