export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
     */
    TagResources: {
        /**
         * 资源ID。
         * @example `nlb-nrnrxwd15en27r****`
         */
        ResourceId: string;
        /**
         * 资源类型，取值：
         * - **loadbalancer**：网络型负载均衡实例。
         * - **securitypolicy**：安全策略。
         * - **servergroup**：服务器组。
         * @example `loadbalancer`
         */
        ResourceType: string;
        /**
         * 地域信息。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
        /**
         * 用户UID。
         * @example `1429****39299349`
         */
        AliUid: number;
        /**
         * 标签键。
         * @example `env`
         */
        TagKey: string;
        /**
         * 标签值。
         * @example `product`
         */
        TagValue: string;
        /**
         * 标签可见范围。
         * @example `public`
         */
        Scope: string;
        /**
         * 标签类型。取值：
         * - **Custom**：自定义标签。
         * - **System**：系统标签。
         * - **All**：全部标签。
         * @example `All`
         */
        Category: string;
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
}
