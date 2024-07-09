export interface ListTagResourcesResponse {
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF0FD******`
     */
    RequestId: string;
    /**
     * 返回符合标签键和标签值的标签。
     */
    TagResources: {
        /**
         * 资源ID。
         * @example `alb-gws76zijb0******`
         */
        ResourceId: string;
        /**
         * 资源类型，取值：
         * - **acl**：访问控制。
         * - **loadbalancer**：应用型负载均衡实例。
         * - **securitypolicy**：安全策略。
         * - **servergroup**：服务器组。
         * @example `loadbalancer`
         */
        ResourceType: string;
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
    }[];
}
