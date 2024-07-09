export interface ListMultiAccountTagValuesResponse {
    /**
     * 下一页查询开始的Token。
     * @example `eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****`
     */
    NextToken: string;
    /**
     * 标签值列表。
     */
    TagValues: string[];
    /**
     * 请求ID。
     * @example `36A3D9BE-B607-5993-B546-7E19EF65DC00`
     */
    RequestId: string;
}
