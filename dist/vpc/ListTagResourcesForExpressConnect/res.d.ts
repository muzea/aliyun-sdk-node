export interface ListTagResourcesForExpressConnectResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    TagResources: {
        /**
         * 标签资源列表。
         */
        TagResource: {
            /**
             * 资源类型。取值：
             * - **PHYSICALCONNECTION**：表示高速通道专线实例。
             * - **VIRTUALBORDERROUTER**：表示边界路由器。
             * - **ROUTERINTERFACE**：表示VBR上连。
             * @example `PHYSICALCONNECTION`
             */
            ResourceType: string;
            /**
             * 资源的标签值。
             * @example `FinanceJoshua`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `pc-bp16qjewdsunr41m1****`
             */
            ResourceId: string;
            /**
             * 资源的标签键。
             * @example `FinanceDept`
             */
            TagKey: string;
        }[];
    };
}
