export interface ModifyDiskSpecResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 变配云盘的任务ID。
     * > 如果您只修改了一块ESSD云盘的性能级别，则不会返回该参数。
     * @example `t-bp67acfmxazb4p****`
     */
    TaskId: string;
    /**
     * 生成的订单ID。
     * > 仅在变更或修改包年包月云盘时会返回订单ID。
     * @example `20413515388****`
     */
    OrderId: string;
}
