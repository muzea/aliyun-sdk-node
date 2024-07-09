export interface DescribeFirewallTemplatesRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 防火墙模板ID。
     */
    "FirewallTemplateId"?: string[];
    /**
     * 防火墙模板名称。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
}
