export interface ListColumnsRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 表ID，可通过调用接口[ListTables](~~141878~~)获取该参数的值。
     * @example `39281****`
     */
    "TableId": string;
    /**
     * 是否为逻辑库，取值如下：
     * - **true**：逻辑库
     * - **false**：物理库
     * @example `false`
     */
    "Logic"?: boolean;
}
