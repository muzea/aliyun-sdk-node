export interface GetDiscoveredResourceCountsGroupByResourceTypeResponse {
    /**
     * 请求ID。
     * @example `AC9BD94C-D20C-4D27-88D4-89E8D75C051B`
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
         * 统计分组的值。
         * > 推荐使用参数`ResrouceType`。
         * @example `ACS::ECS::Instance`
         */
        GroupName: string;
        /**
         * 用于分组统计的资源类型。
         * @example `ACS::ECS::Instance`
         */
        ResourceType: string;
    }[];
}
