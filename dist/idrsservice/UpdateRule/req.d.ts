export interface UpdateRuleRequest {
    /**
     * ID
     * @example `Id`
     */
    "Id": string;
    /**
     * 规则名称
     * @example `名称`
     */
    "Name"?: string;
    /**
     * 请按检测规则格式录入
     * @example `规则内容`
     */
    "Content"?: string;
}
