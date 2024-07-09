export interface ListTagResourcesResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `xxxxE654-xxxx-xxxx-xxxx-98F45996xxxx`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源标签列表。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `value1`
             */
            TagValue: string;
            /**
             * 资源类型。
             * @example `ALIYUN::EDAS::APPLICATION`
             */
            ResourceType: string;
            /**
             * 资源ID。
             * @example `000e5836-xxxx-xxxx-xxxx-0d6ab2ac4877`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `key1`
             */
            TagKey: string;
        }[];
    };
}
