export interface DescribeOrgsResponse {
    /**
     * 请求ID。
     * @example `0B4BB****`
     */
    RequestId: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAV3MpHK****`
     */
    NextToken: string;
    /**
     * 组织列表。
     */
    Orgs: {
        /**
         * 组织名称。
         * @example `设计部****`
         */
        OrgName: string;
        /**
         * 组织ID。
         * @example `org-1mox****`
         */
        OrgId: string;
        /**
         * 父组织ID。
         * @example `org-ezqr****`
         */
        ParentOrgId: string;
    }[];
}
