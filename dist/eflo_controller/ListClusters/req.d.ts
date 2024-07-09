export interface ListClustersRequest {
    /**
     * 查询凭证（Token），取值为上一次API调用返回的 NextToken 参数值。
     * @example `a3f2224a5ec7224116c4f5246120abe4`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数，默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 资源组id
     * @example `rg-aek2bg6wyoox6jq`
     */
    "ResourceGroupId"?: string;
}
