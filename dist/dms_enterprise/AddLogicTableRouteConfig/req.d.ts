export interface AddLogicTableRouteConfigRequest {
    /**
     * 逻辑库的表ID，可通过调用接口[ListLogicTables](~~141875~~)获取该参数的值。
     * @example `4****`
     */
    "TableId": number;
    /**
     * 路由算法唯一键。
     * > - 您可以自定义路由算法唯一键，无任何约束格式。
     * > - 同一个逻辑表下的路由算法配置唯一键不能重复。
     * @example `id-hash-mod16`
     */
    "RouteKey": string;
    /**
     * 路由算法表达式，您可以参考DMS的文档配置路由算法表达式，详情请参见[路由算法配置](~~107594~~)。
     * @example `#id#%16`
     */
    "RouteExpr": string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `4***`
     */
    "Tid"?: number;
}
