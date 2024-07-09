export interface RevokeRequest {
    /**
     * 目标实例ID。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
    /**
     * 数据库账号。
     * @example `test01`
     */
    "AccountName": string;
    /**
     * 命名空间。星号（*）表示全局，即所有命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 表名。星号（*）表示全局，即所有表。
     * @example `table`
     */
    "TableName": string;
    /**
     * 权限列表。多个权限之间使用半角逗号（,）分隔。
     * - READ：读取权限。
     * - WRITE：写入权限。
     * - ADMIN：管理权限。
     * - TRASH：清空权限。
     * @example `READ,WRITE`
     */
    "AclActions": string;
}
