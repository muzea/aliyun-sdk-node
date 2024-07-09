export interface DescribeZonesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * zone名称关键字，按照“%KeyWord%”模式搜索，不区分大小写。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 搜索模式。取值：
     * - **LIKE**：模糊搜索（默认）
     * - **EXACT**：精确搜索
     * @example `EXACT`
     */
    "SearchMode"?: string;
    /**
     * 所属地域ID。
     * @example `cn-hangzhou`
     */
    "QueryRegionId"?: string;
    /**
     * VPC ID。
     * @example `vpc-xxxxx`
     */
    "QueryVpcId"?: string;
    /**
     * 资源组ID。
     * @example `rg-xxxxx`
     */
    "ResourceGroupId"?: string;
    /**
     * Zone查询类型；默认取值AUTH_ZONE，查权威Zone列表。
     * 取值范围：
     * - **AUTH_ZONE**: 查权威Zone列表。
     * - **CLOUD_PRODUCT_ZONE**:使用的云产品Zone列表。
     * @example `AUTH_ZONE`
     */
    "ZoneType"?: string;
    /**
     * 云产品类型。
     */
    "ZoneTag"?: string[];
    /**
     * 资源标签。
     */
    "ResourceTag"?: {
        /**
         * 资源标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 资源标签值。
         * @example `daily`
         */
        Value: string;
    }[];
}
