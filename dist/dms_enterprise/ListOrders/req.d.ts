export interface ListOrdersRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 工单类型，取值请参见[PluginType参数说明](~~429109~~)。
     * @example `DC_COMMON`
     */
    "PluginType"?: string;
    /**
     * 搜索类型。若您不填写此参数，则默认获取您发起的工单（AS_COMMITTER）信息。取值及说明如下：
     * - **AS_ADMIN**：工单大盘
     * - **AS_COMMITTER**：我发起的工单
     * - **AS_HANDLER**：待我处理的工单
     * - **AS_OWNER**：我已处理的工单
     * - **AS_Related**：与我相关
     * @example `AS_COMMITTER`
     */
    "OrderResultType"?: string;
    /**
     * 时间搜索条件，取值如下：
     * - **CREATE_TIME**： 创建时间
     * - **MODIFY_TIME**： 修改时间
     * @example `CREATE_TIME`
     */
    "SearchDateType"?: string;
    /**
     * 开始时间。
     * @example `2022-04-08 11:00:00`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * @example `2022-04-09 11:00:00`
     */
    "EndTime"?: string;
    /**
     * 搜索内容。
     * @example `test`
     */
    "SearchContent"?: string;
    /**
     * 工单状态，取值如下：
     * - **ALL**：不限
     * - **FINISHED**：已结束
     * - **RUNNING**：进行中
     * @example `ALL`
     */
    "OrderStatus"?: string;
    /**
     * 每页数据量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 开始页码。
     * @example `1`
     */
    "PageNumber"?: number;
}
