export interface ListTagValuesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `AB444F46-1CFF-4B06-B8F0-B45D3158****`
     */
    RequestId: string;
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 标签值信息。
     */
    Values: string[];
}
