export interface ListTagResourcesResponse {
    /**
     * 分页token。
     * @example `6ab4640a-479b-41d0-ad3c-c6e888bc3d8f`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `58CE1CB0-F0F4-4BA3-B876-135DC47DF52F`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    TagResources: {
        /**
         * 标签资源列表。
         */
        TagResource: {
            /**
             * 资源类型，取值固定为INSTANCE。
             * @example `INSTANCE`
             */
            ResourceType: string;
            /**
             * 标签的值。
             * @example `1`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `drdshzsd11****`
             */
            ResourceId: string;
            /**
             * 标签的键。
             * @example `test`
             */
            TagKey: string;
        }[];
    };
}
