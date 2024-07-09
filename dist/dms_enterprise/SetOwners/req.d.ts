export interface SetOwnersRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 资源ID。不同的Owner类型会指向不同的资源ID，Owner类型与资源ID的对应关系如下：
     * - INSTANCE：实例的InstanceId，可通过调用接口[ListInstances](~~141936~~)获取该参数的值。
     * - DATABASE： 物理库的DatabaseId，可通过调用接口[ListDatabases](~~141873~~)获取该参数的值。
     * - LOGIC_DATABASE：逻辑库的DatabaseId，可通过调用接口[ListLogicDatabases](~~141874~~)获取该参数的值。
     * - TABLE：物理表的TableId，可通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * - LOGIC_TABLE：逻辑表的TableId，可通过调用接口[ListLogicTables](~~141875~~)获取该参数的值。
     * @example `174****`
     */
    "ResourceId": string;
    /**
     * Owner类型，取值如下：
     * - INSTANCE：实例Owner
     * - DATABASE：物理库Owner
     * - LOGIC_DATABASE：逻辑库Owner
     * - TABLE：物理表Owner
     * - LOGIC_TABLE：逻辑表Owner
     * @example `INSTANCE`
     */
    "OwnerType": string;
    /**
     * Owner的用户ID，多个用户ID用逗号分开。可通过调用接口[GetUser](~~147098~~)或[ListUsers](~~141938~~)获取UserId的值。
     * >用户ID的参数名为UserId。
     * @example `51****`
     */
    "OwnerIds": string;
}
