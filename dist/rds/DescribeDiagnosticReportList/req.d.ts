export interface DescribeDiagnosticReportListRequest {
    /**
     * 实例ID。可调用[DescribeDBInstances](~~610396~~)获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
