export interface ListTagResourcesRequest {
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。唯一取值：**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的token继续查询。
     * @example `212db86sca4384811e0b5e8707ec21345`
     */
    "NextToken"?: string;
    /**
     * 实例ID列表。可以同时查询多个实例的标签，数量范围：**1**~**50**。
     * >**ResourceId**参数和**Tag.Key**参数至少传入一个。
     * @example `rm-uf6wjk5xxxxxxx`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。可以同时查询N个标签键，N的取值范围：**1**~**20**。不允许传入空字符串。
         * >**ResourceId**参数和**Tag.Key**参数至少传入一个。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签键对应的标签值。可以同时查询N个标签值，N的取值范围：**1**~**20**。允许传入空字符串。
         * @example `testvalue1`
         */
        Value: string;
    }[];
}
