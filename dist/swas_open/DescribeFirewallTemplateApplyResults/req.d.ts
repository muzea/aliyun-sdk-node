export interface DescribeFirewallTemplateApplyResultsRequest {
    /**
     * 轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId"?: string;
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 防火墙模板ID。
     * @example `ft-bcf1a7hrdq717****`
     */
    "FirewallTemplateId"?: string;
    /**
     * 模板应用执行ID。
     */
    "TaskId"?: string[];
    /**
     * 防火墙规则列表的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
}
