export interface TagResourcesRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "ResourceId": string[];
    /**
     * 实例的标签信息。
     */
    "Tag": {
        /**
         * 标签的键。
         * > * **N**表示传入第几个标签的键。例如**Tag.1.Key**表示传入第一个标签的键；**Tag.2.Key**表示传入第二个标签的键。
         * > * 如果标签的键不存在，则自动创建。
         * @example `demokey`
         */
        Key: string;
        /**
         * 标签的值。
         * > **N**表示传入第几个标签的值。例如**Tag.1.Value**表示传入第一个标签的值；**Tag.2.Value**表示传入第二个标签的值。
         * @example `demovalue`
         */
        Value: string;
    }[];
}
