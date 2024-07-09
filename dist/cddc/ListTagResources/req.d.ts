export interface ListTagResourcesRequest {
    /**
     * 主机所属的地域ID。
     * @example `ap-southeast-1`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为DEDICATEDHOST。
     * @example `DEDICATEDHOST`
     */
    "ResourceType": string;
    /**
     * 主机ID，可以设置多个。
     */
    "ResourceId"?: string[];
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * - **N**表示传入第几个标签的键。例如：
         *     - **Tag.1.Key**表示传入第一个标签的键。
         *     - **Tag.2.Key**表示传入第二个标签的键。
         * - 本参数和**ResourceId.N**参数两者中必须传入一项。
         * @example `demokey`
         */
        Key: string;
        /**
         * 标签的值。
         * - **N**表示传入第几个标签的值。例如：
         *     - **Tag.1.Value**表示传入第一个标签的值。
         *     - **Tag.2.Value**表示传入第二个标签的值。
         * - 如果标签的值不存在，则自动创建。
         * @example `demovalue`
         */
        Value: string;
    }[];
}
