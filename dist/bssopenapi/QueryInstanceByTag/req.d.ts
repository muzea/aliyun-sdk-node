export interface QueryInstanceByTagRequest {
    /**
     * 资源类型
     * instance 节省计划实例
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源id列表
     */
    "ResourceId"?: string[];
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `ecs`
         */
        Key: string;
        /**
         * 标签值
         * @example `001`
         */
        Value: string;
    }[];
}
