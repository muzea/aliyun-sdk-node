export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个
     * @example `234235354`
     */
    NextToken: string;
    /**
     * 唯一请求识别码
     * @example `75446CC1-FC9A-4595-8D96-089D73D7A63D`
     */
    RequestId: string;
    /**
     * 标签资源列表。
     */
    TagResources: {
        /**
         * 资源类型
         * @example `ZONE`
         */
        ResourceType: string;
        /**
         * 标签值
         * @example `daily`
         */
        TagValue: string;
        /**
         * 资源ID，即ZoneId。
         * @example `97fe9321a476d0861f624d3f738dcc38`
         */
        ResourceId: string;
        /**
         * 标签键
         * @example `env`
         */
        TagKey: string;
    }[];
}
