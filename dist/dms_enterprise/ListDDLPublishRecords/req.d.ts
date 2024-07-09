export interface ListDDLPublishRecordsRequest {
    /**
     * 工单ID。
     * > 您可以在控制台（请参见[结构设计](~~69711~~)）或通过[CreateOrder](~~144649~~)接口创建结构设计工单，并获取工单ID。
     * @example `3214325`
     */
    "OrderId": number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `1`
     */
    "Tid"?: number;
}
