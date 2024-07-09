export interface ListTagResourcesResponse {
    /**
     * 分页数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6D******	`
     */
    RequestId: string;
    /**
     * 返回头信息。该参数为空，仅供参考，程序中不能强制依赖此参数。
     * > 返回示例中不包含此参数。
     */
    Headers: {
        /**
         * 查询到TagResource的资源数量。
         * @example `10`
         */
        X-Total-Count: number;
    };
    /**
     * 标签资源组。
     */
    TagResources: {
        /**
         * 标签资源。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `dev`
             */
            TagValue: string;
            /**
             * 资源类型。固定为`ALIYUN::ELASTICSEARCH::INSTANCE`。
             * @example `ALIYUN::ELASTICSEARCH::INSTANCE`
             */
            ResourceType: string;
            /**
             * 资源ID。
             * @example `es-cn-oew1q8bev0002****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `env`
             */
            TagKey: string;
        }[];
    };
}
