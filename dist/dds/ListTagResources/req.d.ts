export interface ListTagResourcesRequest {
    /**
     * 实例所属的地域ID，您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token，用来返回更多结果。
     * > 第一次查询不需要提供本参数，如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的**NextToken**值以继续查询。
     * @example `212db86****`
     */
    "NextToken"?: string;
    /**
     * 实例ID。
     * > - **N**表示传入第几个实例ID。例如：**ResourceId.1**表示传入第一个实例ID；**ResourceId.2**表示传入第二个实例ID。
     * > - 本参数和**Tag.N.Key**参数两者中必须传入一项。
     * @example `dds-bpxxxxxxxx`
     */
    "ResourceId"?: string[];
    /**
     * 标签信息列表。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * > - **N**表示传入第几个标签的键。例如：**Tag.1.Key**表示传入第一个标签的键；**Tag.2.Key**表示传入第二个标签的键。
         * > - 本参数和**ResourceId.N**参数两者中必须传入一项。
         * @example `开发组`
         */
        Key: string;
        /**
         * 标签的值。
         * > **N**表示传入第几个标签的值。例如：**Tag.1.Value**表示传入第一个标签的值；**Tag.2.Value**表示传入第二个标签的值。
         * @example `4.0环境`
         */
        Value: string;
    }[];
}
