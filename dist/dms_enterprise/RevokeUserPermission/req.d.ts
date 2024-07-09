export interface RevokeUserPermissionRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 用户ID，可通过调用接口[ListUsers](~~141938~~)或[GetUser](~~147098~~)获取该参数的值。
     * @example `51****`
     */
    "UserId": string;
    /**
     * 权限类型，取值如下：
     * - **INSTANCE**：实例权限
     * - **DATABASE**：物理库权限
     * - **LOGIC_DATABASE**：逻辑库权限
     * - **TABLE**：物理表权限
     * - **LOGIC_TABLE**：逻辑表权限
     * @example `DATABASE`
     */
    "DsType": string;
    /**
     * 实例ID，回收实例权限时需要指定。可通过调用接口[ListInstances](~~141936~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `174****`
     */
    "InstanceId"?: number;
    /**
     * 数据库ID（DatabaseId），数据库分为物理库和逻辑库两种：
     * - 物理库ID：可通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * - 逻辑库ID：可通过调用接口[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)获取该参数的值。
     * @example `1860****`
     */
    "DbId"?: string;
    /**
     * 是否为逻辑库，取值如下：
     * - **true**：逻辑库
     * - **false**：物理库
     * > - 如果您的数据库ID为逻辑库ID，此参数取值为**true**。
     * > - 如果您的数据库ID为物理库ID，此参数取值为**false**。
     * @example `false`
     */
    "Logic"?: boolean;
    /**
     * 表ID，回收表权限时需要指定。可通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `13****`
     */
    "TableId"?: string;
    /**
     * 表名，可通过调用接口[ListTables](~~141878~~)获取该参数的值。
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
     * @example `CORRECT`
     */
    "PermTypes": string;
    /**
     * 用户权限记录ID，可通过调用接口[ListUserPermission](~~146957~~)获取该参数的值。
     * @example `774****`
     */
    "UserAccessId": string;
}
