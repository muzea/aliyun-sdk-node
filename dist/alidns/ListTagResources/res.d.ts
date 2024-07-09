export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始token，nexttoken为空说明没有下一个。
     * @example `4698691`
     */
    NextToken: string;
    /**
     * 唯一请求识别码。
     * @example `61092C8D-6AEB-4310-B74D-C632F89BF4FB`
     */
    RequestId: string;
    /**
     * 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
     */
    TagResources: {
        /**
         * 资源类型。取值：DOMAIN。
         * @example `DOMAIN`
         */
        ResourceType: string;
        /**
         * 标签值。
         * @example `abcd`
         */
        TagValue: string;
        /**
         * 资源ID。
         * @example `dns-example.com`
         */
        ResourceId: string;
        /**
         * 标签键。
         * @example `abcd`
         */
        TagKey: string;
    }[];
}
