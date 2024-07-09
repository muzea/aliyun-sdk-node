export interface ListTagResourcesResponse {
    /**
     * 绑定标签的资源信息。
     */
    TagResources: {
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
        /**
         * 资源ID。
         * @example `ipam-uq5dcfc2eqhpf4****`
         */
        ResourceId: string;
        /**
         * 资源类型。取值：
         * - **IPAM**：表示资源类型为IPAM。
         * - **IPAMSCOPE**：表示资源类型为IPAM作用范围。
         * - **IPAMPOOL**：表示资源类型为IPAM地址池。
         * @example `IPAM`
         */
        ResourceType: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `672053AB-90C9-5693-AB96-458F137A5ED6`
     */
    RequestId: string;
}
