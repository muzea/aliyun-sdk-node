export interface TagResourcesRequest {
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 资源类型
         * @example `instance`
         */
        resourceType: string;
        /**
         * 资源ID,最多 50个子项
         */
        resourceId: string[];
        /**
         * 对应新增标签列表，最多包含20个子项
         */
        tag: {
            /**
             * 标签键
             * @example `opensearch`
             */
            key: string;
            /**
             * 标签值
             * @example `opensearch`
             */
            value: string;
        }[];
    };
}
