export interface DescribeDrdsInstancesRequest {
    /**
     * 实例类型。
     * - **共享实例**：0
     * - **专享实例**：1
     * @example `1`
     */
    "Type"?: string;
    /**
     * 实例的描述。
     * @example `drds_test`
     */
    "Description"?: string;
    /**
     * 是否过期。
     * @example `false`
     */
    "Expired"?: boolean;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 资源组ID，可以为空。
     * @example `NULL`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否支持混合查询。
     * @example `FALSE`
     */
    "Mix"?: boolean;
    /**
     * 产品版本号，可取值为V1或V2。
     * @example `V1`
     */
    "ProductVersion"?: string;
    /**
     * 标签属性列表。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * @example `acs:newretail:domain`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `NEW_RETAIL`
         */
        Value: string;
    }[];
}
