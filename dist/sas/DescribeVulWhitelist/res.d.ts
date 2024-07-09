export interface DescribeVulWhitelistResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `74F97EF7-B543-43FD-A4E9-18456731F9C5`
     */
    RequestId: string;
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 数据总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时，显示的当前页的数据条数。
     * @example `2`
     */
    Count: number;
    /**
     * 白名单漏洞信息列表。
     */
    VulWhitelists: {
        /**
         * 漏洞类型。
         * @example `cve`
         */
        Type: string;
        /**
         * 规则使用范围。该值为JSON字符串，包含以下字段：
         * - **type**：适用类型。取值：
         *      - **Uuid**：主机
         *      - **GroupId**：群组
         * - **groupIds**：适用资产群组编号
         * - **uuids**：适用资产UUID
         * > 该值为空则适用全部资产。
         * @example `{"type":"GroupId","groupIds":[916****],"uuids":[]}`
         */
        TargetInfo: string;
        /**
         * 漏洞别名。
         * @example `RHSA-2017:3263: curl security update`
         */
        AliasName: string;
        /**
         * 漏洞名称。
         * @example `oval:com.redhat.rhsa:def:20173263`
         */
        Name: string;
        /**
         * 加白原因。
         * @example `ignore`
         */
        Reason: string;
        /**
         * 规则ID。
         * @example `1275`
         */
        Id: string;
        /**
         * 漏洞信息。该值为JSON格式。
         * - **name**：漏洞名称。
         * - **type**：漏洞类型。
         * - **aliasName**：漏洞别名。
         * @example `[{
        "name":"oval:com.redhat.rhsa:def:20173263",
        "type":"cve",
        "aliasName":"RHSA-2017:3263: curl security update"
        }]`
         */
        Whitelist: string;
    }[];
}
