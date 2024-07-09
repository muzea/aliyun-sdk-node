export interface DescribeOrgsRequest {
    /**
     * 返回结果的最大数量。取值范围：1~100。
     * 默认值：100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAV3MpHK****`
     */
    "NextToken"?: string;
    /**
     * 组织名称。
     * @example `产品部`
     */
    "OrgName"?: string;
    /**
     * 父组织ID。
     * @example `org-11fs****`
     */
    "ParentOrgId"?: string;
}
