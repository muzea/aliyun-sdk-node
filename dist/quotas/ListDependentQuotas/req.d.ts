export interface ListDependentQuotasRequest {
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `cloudsso`
     */
    "ProductCode": string;
    /**
     * 配额ID。
     * > 关于如何获取目标云产品的配额ID，请参见[ListProductQuotas](~~440554~~)中的`QuotaActionCode`。
     * @example `q_system-policy-per-access-configuration`
     */
    "QuotaActionCode": string;
}
