export interface StopDomainResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `9B9F0410-C648-4232-A424-7574905B7982`
     */
    RequestId: string;
    /**
     * 域名资源ID。
     * @example `tu9lfh`
     */
    ResourceId: string;
}
