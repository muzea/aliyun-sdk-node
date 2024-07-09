export interface ListDpiSignaturesRequest {
    /**
     * 地域ID。
     * 您可以通过[DescribeRegions](~~69813~~)查询智能接入网关支持的地域以及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 下一页查询开始的Token。
     * @example `caeba0bbb2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页展示的应用个数。
     * 取值范围：**1**~**100**。
     * 默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 应用组ID。
     * @example `20`
     */
    "DpiGroupId"?: string;
    /**
     * 应用ID。
     * @example `235`
     */
    "DpiSignatureIds"?: string[];
    /**
     * 应用名称。
     * @example `EdgeCast`
     */
    "DpiSignatureNames"?: string[];
}
