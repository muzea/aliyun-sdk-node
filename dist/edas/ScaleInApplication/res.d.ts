export interface ScaleInApplicationResponse {
    /**
     * 变更流程ID，调用[GetChangeOrderInfo](~~62072~~)接口获取这次下线具体执行进展。如果forceStatus置为true则不产生ID，根据code判断是否成功。
     * @example `ddf5a4c7-a507-4a6e****************`
     */
    ChangeOrderId: string;
    /**
     * code码。
     * @example `200`
     */
    Code: number;
    /**
     * 信息。
     * @example `success`
     */
    Message: string;
}
