export interface GetAggregateResourceCountsGroupByResourceTypeResponse {
    /**
     * 请求ID。
     * @example `99114B22-1EFF-47DF-B906-1CCE82FF9D60`
     */
    RequestId: string;
    /**
     * 资源统计结果。
     */
    DiscoveredResourceCountsSummary: {
        /**
         * 资源总数量。
         * @example `7`
         */
        ResourceCount: number;
        /**
         * 不推荐使用，建议使用ResourceType字段。表示用于统计分组的值。
         * @example `ACS::RAM::Role`
         */
        GroupName: string;
        /**
         * 用于分组统计的资源类型。
         * @example `ACS::RAM::Role`
         */
        ResourceType: string;
    }[];
}
