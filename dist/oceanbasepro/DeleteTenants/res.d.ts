export interface DeleteTenantsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户的 ID 列表。
     */
    TenantIds: string[];
}
