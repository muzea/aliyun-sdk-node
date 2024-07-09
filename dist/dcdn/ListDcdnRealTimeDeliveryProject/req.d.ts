export interface ListDcdnRealTimeDeliveryProjectRequest {
    /**
     * 业务类型，取值：
     * - **cdn_log_access_l1**（默认值）：用户访问日志。
     * - **cdn_log_er**：边缘程序日志。
     * - **cdn_log_waf**：WAF拦截日志。
     * - 默认为空，返回所有业务类型的日志项目。
     * @example `cdn_log_access_l1`
     */
    "BusinessType"?: string;
    /**
     * 域名，仅支持单个域名查询。不填为空则表示查询所有域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 第几页，取值范围为：**1**~**100000**，默认1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认20。
     * @example `20`
     */
    "PageSize"?: number;
}
