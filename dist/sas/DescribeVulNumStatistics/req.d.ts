export interface DescribeVulNumStatisticsRequest {
    /**
     * 请求来源。
     * * 查询云安全中心相关数据时，填入**sas**。
     * * 查询安骑士相关数据时，无需填写该参数。
     * @example `sas`
     */
    "From"?: string;
}
