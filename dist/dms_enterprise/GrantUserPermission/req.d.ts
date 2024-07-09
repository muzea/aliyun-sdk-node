export interface GrantUserPermissionRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 用户ID，可通过调用接口[GetUser](~~147098~~)或[ListUsers](~~141938~~)获取该参数的值。
     * >用户ID不是用户的阿里云Uid。
     * @example `51****`
     */
    "UserId": string;
    /**
     * 权限类型，取值：
     * - INSTANCE: 实例权限
     * - DATABASE： 物理库权限
     * - LOGIC_DATABASE：逻辑库权限
     * - TABLE：物理表权限
     * - LOGIC_TABLE：逻辑表权限
     * @example `DATABASE`
     */
    "DsType": string;
    /**
     * 实例ID，授权实例权限时需要指定。可通过调用接口[ListInstances](~~141936~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `174****`
     */
    "InstanceId"?: number;
    /**
     * 数据库ID，可通过调用接口[ListDatabases](~~141873~~)获取物理库ID的值，调用接口[ListLogicDatabases](~~141874~~)获取逻辑库ID的值。
     * >DatabaseId的值即为DbId的值。
     * @example `1***`
     */
    "DbId"?: string;
    /**
     * 是否是逻辑库，授权数据库权限时需要指定。取值：
     * - true：逻辑库
     * - false：物理库
     * @example `false`
     */
    "Logic"?: boolean;
    /**
     * 表ID，授权表权限时需要指定。可通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `132***`
     */
    "TableId"?: string;
    /**
     * 表名，授权表权限时需要指定。
     * @example `table_name`
     */
    "TableName"?: string;
    /**
     * 权限类型，取值如下：
     * - **QUERY**：查询
     * - **EXPORT**：导出
     * - **CORRECT**：变更
     * - **LOGIN**：登录权限
     * - **PERF**：实例性能查看权限
     * @example `QUERY`
     */
    "PermTypes": string;
    /**
     * 权限过期时间。
     * @example `2021-12-12 00:00:00`
     */
    "ExpireDate": string;
}
