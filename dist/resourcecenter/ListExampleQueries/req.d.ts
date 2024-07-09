export interface ListExampleQueriesRequest {
    /**
     * 每页的最大数据条数。
     * 取值范围：1~50。
     * 默认值：50。
     * @example `10`
     */
    "MaxResults"?: string;
    /**
     * 下一页查询开始的Token。
     * @example `eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
    `
     */
    "NextToken"?: string;
}
