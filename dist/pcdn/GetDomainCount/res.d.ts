export interface GetDomainCountResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 域名数量。
     * @example `6`
     */
    Data: number;
    /**
     * 请求ID。
     * @example `B40C0B7C-C90E-43CD-963A-1B6AC6BCF6FF`
     */
    RequestId: string;
}
