export interface ListTagResourcesRequest {
    /**
     * 地域ID，您可通过接口[DescribeRegions](~~143074~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。唯一取值：**cluster**。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的Token继续查询。
     * @example `212db86sca4384811e0b5e8707ec21345`
     */
    "NextToken"?: string;
    /**
     * 集群ID。支持同时传入多个集群ID，N的取值范围为：1~50。
     * > ResourceId.N参数和Tag.N.Key参数至少传入一个。
     * @example `am-bp1l20nxxxxxxxxxx`
     */
    "ResourceId"?: string[];
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。支持同时传入多个标签键，不允许传入空字符串。N的取值范围为：1~20。
         * > ResourceId.N参数和Tag.N.Key参数至少传入一个。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签键对应的标签值。支持同时传入多个标签值，允许传入空字符串。N的取值范围为：1~20。
         * @example `testvalue1`
         */
        Value: string;
    }[];
}
