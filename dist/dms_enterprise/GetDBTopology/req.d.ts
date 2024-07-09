export interface GetDBTopologyRequest {
    /**
     * 逻辑库ID。
     * > 您可以通过调用[ListLogicDatabases](~~141874~~)接口获取该参数。
     * @example `134325`
     */
    "LogicDbId": number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `43215`
     */
    "Tid"?: number;
}
