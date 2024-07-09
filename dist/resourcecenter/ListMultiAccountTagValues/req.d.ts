export interface ListMultiAccountTagValuesRequest {
    /**
     * 搜索的账号范围。取值：
     * - 资源目录ID，表示搜索管理账号和所有成员中的资源。更多信息，请参见[GetResourceDirectory](~~159995~~)。
     * - Root资源夹ID，表示搜索Root资源夹及子资源夹下的所有成员中的资源。更多信息，请参见[ListFoldersForParent](~~159997~~)。
     * - 资源夹ID，表示搜索指定资源夹下所有成员中的资源。更多信息，请参见[ListFoldersForParent](~~159997~~)。
     * - 成员ID，表示搜索指定成员中的资源。更多信息，请参见[ListAccounts](~~160016~~)。
     * @example `rd-r4****`
     */
    "Scope"?: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~100。
     * 默认值：20。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询返回结果下一页的令牌。
     * 当返回结果数据总条数超过`MaxResults`限制，则数据会被截断，您可以使用`NextToken`查询下一页数据。
     * @example `eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****`
     */
    "NextToken"?: string;
    /**
     * 标签键。
     * @example `test_key`
     */
    "TagKey": string;
    /**
     * 标签值。
     * @example `test_value`
     */
    "TagValue"?: string;
    /**
     * 匹配方式。取值：
     * - Equals：相等匹配。
     * - Prefix：前缀匹配。
     * @example `Equals`
     */
    "MatchType"?: string;
}
