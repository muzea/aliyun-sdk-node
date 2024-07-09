export interface TagResourcesRequest {
    /**
     * 资源类型
     * instance 节省计划实例
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源id列表
     */
    "ResourceId": string[];
    /**
     * 标签列表
     */
    "Tag": {
        /**
         * 标签键对应的标签值。可以同时创建n个标签值，n的取值范围：1~20。允许传入空字符串。
         * @example `tag1`
         */
        Key: string;
        /**
         * 标签值，n的取值范围：1~20。
         * @example `001`
         */
        Value: string;
    }[];
}
