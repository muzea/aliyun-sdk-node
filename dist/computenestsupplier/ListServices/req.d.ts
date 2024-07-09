export interface ListServicesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `BBBAAfu+XtuBE55iRLHEYYuojI4=`
     */
    "NextToken"?: string;
    /**
     * 返回服务的所有版本。默认值为false，对每个服务只返回默认版本。
     * @example `false`
     */
    "AllVersions"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-aekzkt5buxxxxxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 过滤器。
     */
    "Filter"?: {
        /**
         * 过滤器值列表。
         */
        Value: string[];
        /**
         * 过滤器名称，可选择一个或者多个名称进行查询。取值范围：
         * - ServiceId：服务ID。
         * - Name：服务名称。
         * - Status：服务状态。
         * - SupplierName：服务商名称。
         * @example `Status`
         */
        Name: string;
    }[];
    /**
     * 用户自定义标签。
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
