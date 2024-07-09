export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `DE65F6B7-7566-4802-9007-96F2494AC512`
     */
    RequestId: string;
    /**
     * 绑定标签的资源信息。
     */
    TagResources: {
        /**
         * 资源ID。
         * @example `pcc-bp16qjewdsunr41m1****`
         */
        ResourceId: string;
        /**
         * 资源类型。取值：**PeerConnection**，VPC对等连接。
         * @example `PeerConnection`
         */
        ResourceType: string;
        /**
         * VPC对等连接发起方的地域。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
        /**
         * 标签键。
         * @example `FinanceDept`
         */
        TagKey: string;
        /**
         * 标签值。
         * @example `FinanceJoshua`
         */
        TagValue: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
}
