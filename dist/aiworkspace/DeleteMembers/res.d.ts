export interface DeleteMembersResponse {
    /**
     * 请求ID。
     * @example `D5BFFEE3-6025-443F-8A03-02D619B5C4B9`
     */
    RequestId: string;
    /**
     * 请求失败时返回的错误代码。
     * @example `100600017`
     */
    Code: string;
    /**
     * 请求失败时的返回信息。
     * @example `Owner not allowed to delete`
     */
    Message: string;
}
