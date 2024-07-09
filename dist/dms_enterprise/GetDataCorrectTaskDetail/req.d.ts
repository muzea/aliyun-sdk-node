export interface GetDataCorrectTaskDetailRequest {
    /**
     * 工单号，您可以调用[CreateDataCorrectOrder](~~208388~~)、[CreateDataImportOrder](~~208387~~)、[CreateFreeLockCorrectOrder](~~208386~~)接口获取该参数。
     * @example `12435523`
     */
    "OrderId": number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `14325432`
     */
    "Tid"?: number;
}
