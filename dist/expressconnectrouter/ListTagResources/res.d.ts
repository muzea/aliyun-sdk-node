export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `6FABF516-FED3-5697-BDA2-B18C5D9A****`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - **True**：成功。
     * - **False**：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 判断调用是否成功。返回值为200表示加载成功，返回其他值表示加载失败，失败原因参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作返回信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 标签列表。
     */
    TagResources: {
        /**
         * 资源ID。
         * @example `ecr-897j0jooxyr1aq****`
         */
        ResourceId: string;
        /**
         * 资源类型。返回值固定为 **EXPRESSCONNECTROUTER**，即专线网关实例。
         * @example `EXPRESSCONNECTROUTER`
         */
        ResourceType: string;
        /**
         * 资源的标签键。
         * @example `TestKey`
         */
        TagKey: string;
        /**
         * 专线网关的标签值。
         * @example `TestValue`
         */
        TagValue: string;
    }[];
    /**
     * 符合查询条件的记录总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****`
     */
    NextToken: string;
    /**
     * 分页查询时每页行数。
     * @example `20`
     */
    MaxResults: number;
}
