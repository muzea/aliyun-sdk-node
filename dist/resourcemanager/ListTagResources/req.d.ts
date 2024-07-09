export interface ListTagResourcesRequest {
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 标签。查询的过滤条件。
     * 最多可以指定20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `v1`
         */
        Value: string;
    }[];
    /**
     * 资源组ID或资源目录成员ID。查询的过滤条件。
     * > 查询资源目录成员绑定的标签列表时，必须同时指定`ResourceId`和`ResourceType`，且`ResourceType`取值为`Account`。
     */
    "ResourceId"?: string[];
    /**
     * 资源类型。查询的过滤条件。取值：
     * - ResourceGroup（默认值）：查询资源组的标签。
     * - Account：查询资源目录成员的标签。
     * @example `ResourceGroup`
     */
    "ResourceType"?: string;
}
