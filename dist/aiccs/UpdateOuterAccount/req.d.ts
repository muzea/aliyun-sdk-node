export interface UpdateOuterAccountRequest {
    /**
     * 外部账号ID。
     * @example `123456`
     */
    "OuterAccountId": string;
    /**
     * 外部账号类型。
     * @example `alipay`
     */
    "OuterAccountType": string;
    /**
     * 外部账号名称。
     * @example `测试`
     */
    "OuterAccountName"?: string;
    /**
     * 头像。
     * @example `http://****`
     */
    "Avatar"?: string;
    /**
     * 账号真实姓名。
     * @example `张三`
     */
    "RealName"?: string;
    /**
     * 外部部门ID
     * @example `3`
     */
    "OuterDepartmentId"?: string;
    /**
     * 外部技能组ID列表。多个ID用英文逗号（,）分隔。
     * @example `["222","333","444"]`
     */
    "OuterGroupIds"?: string;
    /**
     * 扩展字段。JSON字符串。
     * @example `{"备注":"临时技能组"}`
     */
    "Ext"?: string;
    /**
     * 技能组类型。
     * @example `mybank`
     */
    "OuterGroupType"?: string;
    /**
     * 外部部门类型：无效部门类型。
     * @example `type_invalid`
     */
    "OuterDepartmentType"?: string;
}
