export interface DescribeVulNumStatisticsResponse {
    /**
     * 资产中存在的扫描器类型应用漏洞的数量。
     * @example `0`
     */
    AppNum: number;
    /**
     * 资产中存在的中间件漏洞的数量。
     * @example `0`
     */
    ScaNum: number;
    /**
     * 漏洞修复等级为中的漏洞数量。
     * @example `0`
     */
    VulLaterSum: number;
    /**
     * 资产中存在的扫描器类型应用漏洞的条数。
     * @example `0`
     */
    AppCnt: number;
    /**
     * 资产中存在的Linux系统漏洞的数量。
     * @example `0`
     */
    CveNum: number;
    /**
     * 资产中存在的应急漏洞的数量。
     * @example `0`
     */
    EmgNum: number;
    /**
     * 已处理的cms漏洞数。
     * @example `0`
     */
    CmsDealedTotalNum: number;
    /**
     * 该字段已废弃。
     * @example `0`
     */
    VulDealedTotalNum: number;
    /**
     * 漏洞修复等级为低的漏洞数量。
     * @example `0`
     */
    VulNntfSum: number;
    /**
     * 资产中存在的Web-CMS漏洞的数量。
     * @example `0`
     */
    CmsNum: number;
    /**
     * 本次请求的ID。
     * @example `E22C89D2-FE13-5800-8746-9D0EF1827A59`
     */
    RequestId: string;
    /**
     * 漏洞修复等级为高的漏洞数量。
     * @example `0`
     */
    VulAsapSum: number;
    /**
     * 资产中存在的Windows系统漏洞的数量。
     * @example `0`
     */
    SysNum: number;
}
