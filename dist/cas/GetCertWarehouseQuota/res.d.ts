export interface GetCertWarehouseQuotaResponse {
    /**
     * 证书仓库总额度，包括赠送额度和购买额度。
     * @example `5000`
     */
    TotalQuota: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
    /**
     * 已使用额度。
     * @example `1000`
     */
    UseCount: number;
}
