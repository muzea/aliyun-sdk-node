export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `8D8992C1-6712-423C-BAC5-E5E817484C6B`
     */
    RequestId: string;
    /**
     * 绑定标签的资源信息。
     */
    TagResources: {
        /**
         * 标签键。
         * @example `endpoint`
         */
        TagKey: string;
        /**
         * 标签值。
         * @example `FinanceJoshua`
         */
        TagValue: string;
        /**
         * 资源ID。
         * @example `ep-hp3i05294c2d2d******`
         */
        ResourceId: string;
        /**
         * 资源类型。取值：
         * - **vpcendpoint**：终端节点。
         * - **vpcendpointservice**：终端节点服务。
         * @example `vpcendpoint`
         */
        ResourceType: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
}
