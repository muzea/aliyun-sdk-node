export interface ListTagKeysResponse {
    /**
     * 下一个查询开始的Token，该参数值为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DC09A6AA-2713-4E10-A2E9-E6C5C43A****`
     */
    RequestId: string;
    /**
     * 查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 标签键信息。
     */
    Keys: string[];
}
