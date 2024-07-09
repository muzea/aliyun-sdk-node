export interface CheckSharingWithResourceDirectoryStatusResponse {
    /**
     * 请求ID。
     * @example `819545D0-C97A-5DB3-BD73-A1B17E9A4BC1`
     */
    RequestId: string;
    /**
     * 是否启用与资源目录组织的共享。取值：
     * - false：未启用。
     * - true：已启用。
     * @example `true`
     */
    EnableSharingWithRd: boolean;
}
