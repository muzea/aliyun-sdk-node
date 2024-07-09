export interface DescribeDataCachesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据缓存ID。
     */
    "DataCacheId"?: string[];
    /**
     * 数据缓存Bucket。默认为default。
     * @example `default`
     */
    "Bucket"?: string;
    /**
     * 数据缓存对应Virtual Host的目录。
     * @example `/data/models/`
     */
    "Path"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `testkey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testvalue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-acfmzw2jz2z****`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询结果条数上限。默认值和最大值为20。
     * @example `20`
     */
    "Limit"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `d78f2dd8-5979-42fe-****-b16db43be5bc`
     */
    "NextToken"?: string;
}
