export interface DeleteCustomizeRuleRequest {
    /**
     * 自定义规则ID。
     * @example `123456789`
     */
    "RuleId"?: number;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 产品所在地域。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
}
