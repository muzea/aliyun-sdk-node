export interface DeleteUserRequest {
    /**
     * 待删除的用户ID。此处的用户ID为Quick BI的UserID，而非阿里云的UID。
     * @example `fe67f61a35a94b7da1a34ba174a7****`
     */
    "UserId": string;
    /**
     * 继承者的用户ID。如果不为空，则将删除用户在工作空间内的报表资源转移给继承者，否则转移给空间owner。
     * - 继承者不能是组织访问者
     * - 继承者在工作空间的权限不能小于删除掉的用户，管理权限>开发权限>分享权限>查看权限
     * - 继承者不在工作空间内，会自动加入工作空间
     * @example `f5****afccd9e434a274`
     */
    "TransferUserId"?: string;
}
