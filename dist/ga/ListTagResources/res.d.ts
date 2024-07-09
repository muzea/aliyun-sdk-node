export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    TagResources: {
        /**
         * 绑定标签的全球加速资源信息。
         */
        TagResource: {
            /**
             * 全球加速资源类型。
             * - **accelerator**：标准型全球加速实例。
             * - **basicaccelerator**：基础型全球加速实例。
             * - **bandwidthpackage**：带宽包。
             * - **acl**：访问控制策略组。
             * - **endpointgroup**：终端节点组。
             * @example `accelerator`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `KeyTest`
             */
            TagValue: string;
            /**
             * 全球加速资源ID。
             * @example `ga-bp149u6o36qt1as9b****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `valueTest`
             */
            TagKey: string;
        }[];
    };
}
