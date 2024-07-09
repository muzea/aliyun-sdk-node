export interface ListRoleUsersResponse {
    /**
     * RequestId
     * @example `558D764F-8C55-49CA-BF38-80EA532FC08F`
     */
    RequestId: string;
    /**
     * 状态码描述
     * @example `OK`
     */
    Code: string;
    /**
     * 提示相关错误信息
     * @example `.`
     */
    Message: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * user roles
     * @example `UserRole列表`
     */
    UserRoles: any;
    /**
     * NextPageToken
     * @example `token!`
     */
    NextPageToken: string;
}
