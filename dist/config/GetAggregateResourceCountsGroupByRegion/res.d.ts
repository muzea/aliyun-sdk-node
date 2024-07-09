export interface GetAggregateResourceCountsGroupByRegionResponse {
    /**
     * 请求ID。
     * @example `399BD94C-D20C-4D27-88D4-89E8D75C0595`
     */
    RequestId: string;
    /**
     * 资源统计结果。
     */
    DiscoveredResourceCountsSummary: {
        /**
         * 资源总数量。
         * @example `10`
         */
        ResourceCount: number;
        /**
         * 分组统计的名称。
         * > 通常不用该参数，使用`Region`。
         * @example `cn-hangzhou`
         */
        GroupName: string;
        /**
         * 用于分组统计的地域。
         * @example `cn-hangzhou`
         */
        Region: string;
    }[];
}
