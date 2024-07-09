export interface CancelAuthorizationMenuRequest {
    /**
     * 数据门户的ID。
     * @example `0d173abb53e84c8ca7495429163b****`
     */
    "DataPortalId": string;
    /**
     * 数据门户的叶子节点菜单ID。
     * - 目录菜单无法进行授权操作
     * - 支持批量传参，ID之间用半角逗号（,）隔开，批量修改的最大数为100
     * @example `54kqgoa****,pg1n135****`
     */
    "MenuIds": string;
    /**
     * 用户组ID列表。
     * - 支持批量传参，ID之间用半角逗号（,）隔开，批量修改的最大数为200
     * - UserGroupIds和UserIds不能同时为空
     * @example `34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****`
     */
    "UserGroupIds"?: string;
    /**
     * 用户ID列表。此处为Quick BI的UserID，而非阿里云的UID。
     * - 支持批量传参，ID之间用半角逗号（,）隔开，批量修改的最大数为200
     * @example `204627493484****,121344444790****`
     */
    "UserIds"?: string;
}
