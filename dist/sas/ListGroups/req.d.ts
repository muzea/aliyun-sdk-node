export interface ListGroupsRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 返回数据当前页的页码。起始值为1，默认值为1。
     * @example `89`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，最大2000。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。如果NextToken为空表示没有下一次查询。如果NextToken有返回值，该取值表示下一次查询开始的令牌。
     * @example `1426C575705AE8545E8360A6EFA3B***`
     */
    "NextToken"?: string;
    /**
     * 是否使用NextToken方式拉取漏洞列表数据。如果使用此参数TotalCount不再返回。取值：
     * - **true**：使用NextToken方式
     * - **false**：不使用NextToken方式
     * @example `true`
     */
    "UseNextToken"?: boolean;
}
