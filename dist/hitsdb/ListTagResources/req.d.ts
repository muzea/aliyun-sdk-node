export interface ListTagResourcesRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~426062~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID列表。
     */
    "ResourceId"?: string[];
    /**
     * 下一个查询开始Token，用来返回更多结果。
     * > 第一次查询不需要提供本参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的**NextToken**值以继续查询。
     * @example `212db86****`
     */
    "NextToken"?: string;
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * > 可以传入多个标签的键。例如：第一对中的Key表示传入第一个标签的键。第二对中的Key表示传入第二个标签的键。
         * @example `test`
         */
        Key: string;
        /**
         * 标签的值。
         * > 可以传入多个标签的值。例如：第一对中的Value表示传入第一个标签的值。第二对中的Value表示传入第二个标签的值。
         * @example `2.2.8`
         */
        Value: string;
    }[];
}
