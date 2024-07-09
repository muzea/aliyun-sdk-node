export interface DescribePackageStateRequest {
    /**
     * 要查询的证书资源包的规格（即证书规格）。取值：
     * - **digicert-free-1-free**（默认）：表示DigiCert DV单域名证书（3个月免费试用，仅中国站）。
     * - **symantec-free-1-free**：表示DigiCert DV单域名证书（1年免费试用，仅中国站）。
     * - **symantec-dv-1-starter**：表示DigiCert DV通配符域名证书。
     * - **symantec-ov-1-personal**：表示DigiCert OV单域名证书。
     * - **symantec-ov-w-personal**：表示DigiCert OV通配符域名证书。
     * - **geotrust-dv-1-starter**：表示GeoTrust DV单域名证书。
     * - **geotrust-dv-w-starter**：表示GeoTrust DV通配符域名证书。
     * - **geotrust-ov-1-personal**：表示GeoTrust OV单域名证书。
     * - **geotrust-ov-w-personal**：表示GeoTrust OV通配符域名证书。
     * - **globalsign-dv-1-personal**：表示GlobalSign DV单域名证书。
     * - **globalsign-dv-w-advanced**：表示GlobalSign DV通配符域名证书。
     * - **globalsign-ov-1-personal**：表示GlobalSign OV单域名证书。
     * - **globalsign-ov-w-advanced**：表示GlobalSign OV通配符域名证书。
     * - **cfca-ov-1-personal**：表示CFCA OV单域名证书（仅中国站）。
     * - **cfca-ev-w-advanced**：表示CFCA OV通配符域名证书（仅中国站）。
     * @example `digicert-free-1-free`
     */
    "ProductCode"?: string;
}
