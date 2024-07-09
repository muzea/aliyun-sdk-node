export interface CreateDiskResponse {
    /**
     * 请求ID。
     * @example `7030AB96-57CF-1C68-9FEE-D60E547FD79C`
     */
    RequestId: string;
    /**
     * 订单ID，多个ID之间用半角逗号（,）分隔。
     * > 只有预付费返回订单号，按量付费不返回。
     * @example `21127020370****`
     */
    OrderId: string;
    /**
     * 实例ID集合。
     */
    InstanceIds: string[];
}
