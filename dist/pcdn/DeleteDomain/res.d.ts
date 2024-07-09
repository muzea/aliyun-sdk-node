export interface DeleteDomainResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `5923BFA8-ACC2-4949-A0AB-46B66FF45BDD`
     */
    RequestId: string;
    /**
     * 域名资源ID。
     * @example `23j63d`
     */
    ResourceId: string;
}
