export interface DescribeDomainDnssecInfoResponse {
    /**
     * Dnssec状态：
     * - ON：开启
     * - OFF：关闭
     * @example `ON`
     */
    Status: string;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 摘要（如果Dnssec开启则返回）。
     * @example `C1A0424B97A049F1F9B2EA139CC298533219668164E343BD21203ABC4608C02A`
     */
    Digest: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    DomainName: string;
    /**
     * 公钥（如果Dnssec开启则返回）。
     * @example `mdsswUyr3DPW132mOi8V9xESWE8jTo0dxCjjnopKl+GqJxpVXckHAeF+KkxLbxILfDLUT0rAK9iUzy1L53eKGQ==`
     */
    PublicKey: string;
    /**
     * 摘要类型（如果Dnssec开启则返回）。
     * @example `SHA256`
     */
    DigestType: string;
    /**
     * DS记录（如果Dnssec开启则返回）。
     * @example `example.com. 3600 IN DS 2371 13 2 C1A0424B97A049F1F9B2EA139CC298533219668164E343BD21203ABC4608C02A`
     */
    DsRecord: string;
    /**
     * 密钥标签（如果Dnssec开启则返回）。
     * @example `54931`
     */
    KeyTag: string;
    /**
     * 标志（如果Dnssec开启则返回）。
     * @example `257 (KSK)`
     */
    Flags: string;
    /**
     * 算法类型（如果Dnssec开启则返回）。
     * @example `13`
     */
    Algorithm: string;
}
