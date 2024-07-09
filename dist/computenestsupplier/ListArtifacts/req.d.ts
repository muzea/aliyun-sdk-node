export interface ListArtifactsRequest {
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hRQzE=`
     */
    "NextToken"?: string;
    /**
     * 过滤器。
     */
    "Filter"?: {
        /**
         * 过滤器名称。可选择一个或多个名称进行查询。
         * 取值：
         * - Name：按部署物名称进行模糊查询。
         * - ArtifactId：部署物ID。
         * - ArtifactType：部署物类型。
         * @example `ArtifactType`
         */
        Name: string;
        /**
         * 过滤器值列表。
         */
        Values: string[];
    }[];
    /**
     * 资源组ID。
     * @example `rg-acfmzmhzoaa****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value1`
         */
        Value: string;
    }[];
}
