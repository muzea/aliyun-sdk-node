export interface AddSkillGroupRequest {
    /**
     * 外部的技能组ID。
     * @example `123456`
     */
    "OuterGroupId": string;
    /**
     * 外部的技能组名称。
     * @example `热线技能组`
     */
    "OuterGroupName": string;
    /**
     * 外部的技能组类型。
     * @example `mybank`
     */
    "OuterGroupType": string;
    /**
     * 外部的部门ID。
     * @example `123456`
     */
    "OuterDepartmentId"?: string;
    /**
     * 外部的部门类型。
     * @example `type_invalid`
     */
    "OuterDepartmentType"?: string;
}
