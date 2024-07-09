export interface UpdateAdminPasswordResponse {
    /**
     * 请求ID。
     * @example `0FA05123-745C-42FD-A69B-AFF48EF9****`
     */
    RequestId: string;
    /**
     * 密码是否更新成功：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Result: boolean;
}
