export interface ListGroupsRequest {
    /**
     * 查询返回结果下一页的令牌。首次调用API不需要`Marker`。
     * 当您首次调用API时，如果返回数据总条数超过`MaxItems`限制，数据会被截断，只返回`MaxItems`条数据，同时，返回参数`IsTruncated`为`true`，返回一个`Marker`。您可以使用上一次返回的`Marker`继续调用API，其他请求参数保持不变，查询被截断的数据。您可以按此方法经过多次查询，直到`IsTruncated`为`false`时，表示全部数据查询完毕。
     * @example `EXAMPLE`
     */
    "Marker"?: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~100。
     * 默认值：100。
     * @example `100`
     */
    "MaxItems"?: number;
}
