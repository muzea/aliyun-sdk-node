export interface GetTableDBTopologyRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 表在DMS中的唯一识别码GUID（Globally Unique Identifier）。
     * > - 逻辑库：可调用[ListLogicTables](~~141875~~)接口获取，需要将ReturnGuid参数设置为true。
     * > - 物理库：可调用[ListTables](~~141878~~)接口获取，需要将ReturnGuid参数设置为true。
     * @example `IDB_L_9032.db-test.yuyang_test`
     */
    "TableGuid": string;
}
