export interface DescribeDiagnosticReportAttributesRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 诊断报告ID。
     * @example `dr-i-uf6i0tv2refv8wz*****`
     */
    "ReportId": string;
}
