export interface ListUsersRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 用户角色，取值说明如下：
     * - **USER**：普通用户
     * - **DBA**：DBA
     * - **ADMIN**：管理员
     * - **SECURITY_ADMIN**：安全管理员
     * - **STRUCT\_READ\_ONLY**：结构只读
     * > 您可在DMS控制台右上角头像处查看您的角色。
     * @example `DBA`
     */
    "Role"?: string;
    /**
     * 用户状态，取值说明如下：
     * - **NORMAL**：正常
     * - **DISABLE**：禁用
     * - **DELETE**：已删除
     * @example `NORMAL`
     */
    "UserState"?: string;
    /**
     * 搜索关键词，支持模糊搜索。
     * @example `test`
     */
    "SearchKey"?: string;
    /**
     * 开始页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数。
     * > 每页记录数，取值：10、20、50、100。默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
