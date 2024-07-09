export interface TagResourcesRequest {
    /**
     * 要创建的资源及标签信息。
     */
    "body"?: {
        /**
         * 资源ID。
         */
        ResourceIds: string[];
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `env`
             */
            key: string;
            /**
             * 标签值。
             * @example `IT`
             */
            value: string;
        }[];
        /**
         * 资源类型，固定为INSTANCE。
         * @example `INSTANCE`
         */
        ResourceType: string;
    };
}
