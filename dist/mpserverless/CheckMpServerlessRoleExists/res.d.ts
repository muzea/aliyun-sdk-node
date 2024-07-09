export interface CheckMpServerlessRoleExistsResponse {
    /**
     * 请求ID。
     * @example `F340DF8D-7125-49B7-AC48-7F5C8DB382CB`
     */
    RequestId: string;
    /**
     * 是否有相应权限。
     * - true：有权限。
     * - false：无权限。
     * @example `true`
     */
    Exists: boolean;
}
