export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始的令牌。
     * @example `c374bf4864448****`
     */
    next_token: string;
    /**
     * 请求ID。
     * @example `E368C761-F8F6-4A36-9B58-BD53D5CD0CEB`
     */
    request_id: string;
    /**
     * 标签资源集。
     */
    tag_resources: {
        /**
         * 标签资源。
         */
        tag_resource: {
            /**
             * 标签的名称。
             * @example `ack.aliyun.com`
             */
            tag_key: string;
            /**
             * 标签值。
             * @example `c71cf3d796c374bf48644482cb0c3****`
             */
            tag_value: string;
            /**
             * 资源ID。
             * @example `i-xxx`
             */
            resource_id: string;
            /**
             * 资源类型。更多信息，请参见[标签](~~110425~~)。
             * @example `CLUSTER`
             */
            resource_type: string;
        }[];
    };
}
