export interface DeleteUserGroupMembersRequest {
    /**
     * 要退出用户组的用户ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
     * @example `204627493484****`
     */
    "UserId": string;
    /**
     * 要退出的用户组ID。
     * - 支持批量传参，ID之间用半角逗号（,）隔开。
     * @example `34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****`
     */
    "UserGroupIds": string;
}
