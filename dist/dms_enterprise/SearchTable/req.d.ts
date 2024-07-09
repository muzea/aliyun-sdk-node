export interface SearchTableRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `1`
     */
    "Tid"?: number;
    /**
     * 搜索表名称的关键字。
     * @example `test`
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
     * @example `PRODUCT`
     */
    "EnvType"?: string;
    /**
     * 权限范围，取值和说明：
     * - **HAS_PERMSSION**：有权限的
     * - **OWNER**：我Owner的
     * - **MY_FOCUS**：我关注的
     * - **UNKNOWN**：不限
     * @example `OWNER`
     */
    "SearchRange"?: string;
    /**
     * 搜索表类型，取值如下：
     * - **TABLE**：表，包含物理表和逻辑表
     * - **SINGLE_TABLE**：物理表
     * - **LOGIC_TABLE**：逻辑表
     * @example `LOGIC_TABLE`
     */
    "SearchTarget"?: string;
    /**
     * 数据库类型，取值为：
     * - **MySQL**
     * - **SQLServer**
     * - **PostgreSQL**
     * - **Oracle**
     * - **DRDS**
     * - **OceanBase**
     * - **Mongo**
     * - **Redis**
     * @example `MySQL`
     */
    "DbType"?: string;
    /**
     * 是否返回表GUID。
     * @example `false`
     */
    "ReturnGuid"?: boolean;
}
