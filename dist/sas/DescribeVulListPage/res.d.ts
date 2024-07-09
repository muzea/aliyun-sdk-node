export interface DescribeVulListPageResponse {
    /**
     * 总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 结果的请求id。
     * @example `4347E985-6E64-467B-96EC-30D4EA9E32FB`
     */
    RequestId: string;
    /**
     * 返回参数。
     */
    Data: {
        /**
         * 发布时间。
         * @example `2022-12-13T08:00Z`
         */
        ReleaseTime: number;
        /**
         * 编号。
         * @example `AVD-2018-8218`
         */
        OtherId: string;
        /**
         * 是否poc验证。可取值：
         * - 1 是
         * - 0  不是
         * @example `0`
         */
        IsSas: number;
        /**
         * Cve编号。
         * @example `CVE-2022-42836`
         */
        CveId: string;
        /**
         * 数据库主键id。
         * @example `40586`
         */
        Id: number;
        /**
         * 是否版本比对。可取值：
         * - 1  是
         * - 0 不是
         * @example `1`
         */
        IsAegis: number;
        /**
         * 漏洞名称。
         * @example `Windows 终端远程代码执行漏洞`
         */
        Title: string;
        /**
         * 安骑士拓展字段。
         * @example `{\"relatedType\":[{\"type\":\"sys\"}]}`
         */
        ExtAegis: string;
    }[];
}
