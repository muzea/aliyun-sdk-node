export interface DescribeAdvisorResourcesRequest {
    /**
     * 资源/实例ID。
     * @example `i-2zecnwitr2s7aca6****
    `
     */
    "ResourceId"?: string;
    /**
     * 查询关键词，可用来模糊匹配资源/实例ID或资源/实例名称。
     * @example `ecs001`
     */
    "Keyword"?: string;
    /**
     * 请求的语言。
     * @example `zh`
     */
    "Language"?: string;
    /**
     * 云产品Code。
     * @example `ecs`
     */
    "Product"?: string;
    /**
     * 分页号。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据条数。
     * @example `10`
     */
    "PageSize"?: number;
}
