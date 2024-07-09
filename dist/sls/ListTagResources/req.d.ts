export interface ListTagResourcesRequest {
    /**
     * 资源的类型。
     * - project：项目。
     * - logstore：日志库。
     * - dashboard：仪表盘。
     * - machinegroup：机器组。
     * - logtailconfig：logtail配置。
     * @example `project`
     */
    "resourceType": string;
    /**
     * 查询的资源ID列表。resourceId与tags应至少存在一个。
     */
    "resourceId"?: string[];
    /**
     * 精确查询时，用于过滤的标签键值对。resourceId与tags应至少配置一个。
     * 最多设置20个tag。
     */
    "tags"?: {
        /**
         * 查询时用于过滤标签的键，例如key为` "test-key" `时，只会返回绑定了标签键为` "test-key" `的资源。
         * @example `key1`
         */
        key: string;
        /**
         * 查询时用于过滤标签的值，当值为null时表示只根据key过滤。
         * @example `value1`
         */
        value: string;
    }[];
}
