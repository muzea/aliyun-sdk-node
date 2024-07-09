export interface SearchDatabaseRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 搜索数据库名称的关键字。
     * @example `testdb`
     */
    "SearchKey"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据库的环境类型，更多信息，请参见[实例环境说明](~~163309~~)。
     * @example `test`
     */
    "EnvType"?: string;
    /**
     * 权限范围，取值如下：
     * - **HAS_PERMSSION**：有权限的数据库
     * - **OWNER**：我Owner的数据库
     * - **MY_FOCUS**：我关注的数据库
     * - **UNKNOWN**：不限
     * @example `HAS_PERMSSION`
     */
    "SearchRange"?: string;
    /**
     * 搜索目标，取值如下：
     * - **DB**：不限（不区分单库或逻辑库）
     * - **SINGLE_DB**：单库
     * - **LOGIC_DB**：逻辑库
     * @example `SINGLE_DB`
     */
    "SearchTarget"?: string;
    /**
     * 数据库类型，取值请参见[DbType参数说明](~~198106~~)。
     * @example `MYSQL`
     */
    "DbType"?: string;
}
