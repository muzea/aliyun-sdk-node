export interface DeleteDiagnosticReportsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 诊断报告ID列表。最多支持100个ID。
     */
    "ReportIds": string[];
}
