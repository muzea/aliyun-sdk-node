export interface ListNodesResponse {
    /**
     * 节点列表。
     */
    Nodes: any[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 下次开始读取的位置。返回空时表示数据已经读取完毕。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的总记录数。
     * @example `200`
     */
    TotalCount: number;
}
