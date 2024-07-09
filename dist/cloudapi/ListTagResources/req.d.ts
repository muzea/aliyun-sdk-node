export interface ListTagResourcesRequest {
    /**
     * 资源类型定义。
     * 目前分组，插件，应用接入了标签，API相关操作基于分组的标签：
     * - **apiGroup**
     * - **plugin**
     * - **app**
     * - **api**
     * @example `apiGroup`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token
     * @example `1d2db86sca4384811e0b5e8707e68181f`
     */
    "NextToken"?: string;
    /**
     * 资源ID。
     * N的取值范围为：`[1, 50]`
     * @example `285bb759342649a1b70c2093a772e087`
     */
    "ResourceId"?: string[];
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签键。
         * N的取值范围为：`[1, 20]`
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。当参数有值，要求对应的**tag.N.Key**在相同的N的标签键也传入值，否则会报错。
         * N的取值范围为：`[1, 20]`
         * @example `product`
         */
        Value: string;
    }[];
}
