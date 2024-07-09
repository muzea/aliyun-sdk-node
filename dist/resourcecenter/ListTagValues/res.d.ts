export interface ListTagValuesResponse {
    /**
     * 下一个查询开始的Token。
     * @example `eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****`
     */
    NextToken: string;
    /**
     * 标签值列表。
     */
    TagValues: string[];
    /**
     * 请求ID。
     * @example `C1840B83-1193-5E83-AFA6-4B8D303E29F5`
     */
    RequestId: string;
}
