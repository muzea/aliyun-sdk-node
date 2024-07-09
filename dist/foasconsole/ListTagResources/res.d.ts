export interface ListTagResourcesResponse {
    /**
     * 是否成功，取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `0E5D17CE-BD83-5DC9-8CD2-3C40C2F7A135`
     */
    RequestId: string;
    /**
     * tag请求ID。
     * @example `87AE00`
     */
    TagReponseId: string;
    /**
     * 下一个查询开始的Token。
     * @example `27AE00`
     */
    NextToken: string;
    /**
     * 资源绑定的标签列表。
     */
    TagResources: {
        /**
         * 资源类型，固定值为vvpinstance。
         * @example `vvpinstance`
         */
        ResourceType: string;
        /**
         * 标签值
         * @example `tag`
         */
        TagValue: string;
        /**
         * 订单实例ID。
         * @example `f-cn-tyts`
         */
        ResourceId: string;
        /**
         * 标签键
         * @example `test`
         */
        TagKey: string;
    }[];
}
