export interface DescribeDohUserInfoResponse {
    /**
     * 唯一请求识别码。
     * @example `0F32959D-417B-4D66-8463-68606605E3E2`
     */
    RequestId: string;
    /**
     * 已接入子域名数量。
     * @example `5`
     */
    SubDomainCount: number;
    /**
     * 公共DNS用户ID。
     * @example `12345678`
     */
    PdnsId: number;
    /**
     * 已接入域名数量。
     * @example `2`
     */
    DomainCount: number;
}
