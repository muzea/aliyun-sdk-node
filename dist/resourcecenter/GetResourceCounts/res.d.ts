export interface GetResourceCountsResponse {
    /**
     * 资源统计的分组维度。
     * @example `ResourceType`
     */
    GroupByKey: string;
    /**
     * 请求ID。
     * @example `6D98D9B0-318D-56A4-910C-93B5F945AF2B`
     */
    RequestId: string;
    /**
     * 过滤条件。
     */
    Filters: {
        /**
         * 过滤条件键。
         * @example `RegionId`
         */
        Key: string;
        /**
         * 过滤条件值。
         */
        Values: string[];
    }[];
    /**
     * 资源数量列表。
     */
    ResourceCounts: {
        /**
         * 分组名称。
         * @example `ACS::ECS::NetworkInterface`
         */
        GroupName: string;
        /**
         * 资源数量。
         * @example `2`
         */
        Count: number;
    }[];
}
