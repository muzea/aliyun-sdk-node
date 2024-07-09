export interface GetDataCronClearTaskDetailListRequest {
    /**
     * 工单号，您可以调用[CreateDataCronClearOrder](~~208385~~)接口获取该参数。
     * @example `432532`
     */
    "OrderId": number;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `12345`
     */
    "Tid"?: number;
}
