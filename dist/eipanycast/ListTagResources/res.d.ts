export interface ListTagResourcesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
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
         * @example `aeip-2zeerraiwb7ujsxdc****`
         */
        ResourceId: string;
        /**
         * 资源类型，取值：**ANYCASTEIPADDRESS**。
         * @example `ANYCASTEIPADDRESS`
         */
        ResourceType: string;
        /**
         * 标签值。
         * @example `FinanceJoshua`
         */
        TagValue: string;
        /**
         * 标签键。
         * @example `FinanceDept`
         */
        TagKey: string;
    }[];
}
