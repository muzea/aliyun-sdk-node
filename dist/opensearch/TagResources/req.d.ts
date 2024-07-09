export interface TagResourcesRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 资源类型
         * @example `ProductVersion`
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
             * @example `cloud_manage`
             */
            key: string;
            /**
             * 标签值
             * @example `31261301`
             */
            value: string;
        }[];
    };
}
