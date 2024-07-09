export interface DescribePackageStateResponse {
    /**
     * 已经成功签发该规格证书的数量。
     * @example `1`
     */
    IssuedCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `10CFA380-1C58-45C7-8075-06215F3DB681`
     */
    RequestId: string;
    /**
     * 已购买该规格证书资源包的总数量。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 证书资源包的规格（即证书规格）。取值：
     * - **digicert-free-1-free**：表示DigiCert DV单域名证书（3个月免费试用，仅中国站）。
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
    ProductCode: string;
    /**
     * 已经提交该规格证书申请的次数。
     * > 您只要成功调用一次[CreateCertificateForPackageRequest](~~455296~~)、[CreateCertificateRequest](~~455292~~)或[CreateCertificateWithCsrRequest](~~455801~~)接口，就表示提交了一次证书申请（不论证书是否成功签发）。
     * @example `2`
     */
    UsedCount: number;
}
