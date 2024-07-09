export interface ListAclEntriesResponse {
    /**
     * 访问控制条目列表。
     */
    AclEntries: {
        /**
         * 访问控制条目备注描述，长度限制为1~256个字符，允许包含字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_），支持中文字符。
         * @example `test-entry`
         */
        Description: string;
        /**
         * 访问控制条目IP地址段。
         * @example `10.0.1.1/24`
         */
        Entry: string;
        /**
         * ACL条目状态，取值：
         * - **Adding**：添加中。
         * - **Available**：添加成功，可用状态。
         * - **Removing**：移除中。
         * @example `Available`
         */
        Status: string;
    }[];
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F87******`
     */
    RequestId: string;
    /**
     * 本次请求条件下返回的总数据记录数。
     * @example `1000`
     */
    TotalCount: number;
}
