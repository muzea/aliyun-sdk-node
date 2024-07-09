export interface DescribeDnsProductInstancesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户端IP。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 云解析产品code。
     * @example `version1`
     */
    "VersionCode"?: string;
    /**
     * 域名类型，大小写不敏感。取值：
     * - PUBLIC：权威托管域名（默认值）
     * - CACHE：权威代理域名
     * @example `PUBLIC`
     */
    "DomainType"?: string;
    /**
     * 排序参数。取值：
     * - **createDate**：按创建时间排序（为空时默认按创建时间排序）
     * - **expireDate**：按过期时间排序
     * @example `createDate`
     */
    "OrderBy"?: string;
    /**
     * 排序方向。取值：
     * - **DESC**：递减（为空时默认递减排序）
     * - **ASC**: 递增
     * @example `DESC`
     */
    "Direction"?: string;
}
