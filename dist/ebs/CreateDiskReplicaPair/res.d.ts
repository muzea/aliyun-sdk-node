export interface CreateDiskReplicaPairResponse {
    /**
     * 请求ID。
     * @example `C123F94F-4E38-19AE-942A-A8D6F44F****`
     */
    RequestId: string;
    /**
     * 异步复制关系ID。
     * @example `pair-cn-dsa****`
     */
    ReplicaPairId: string;
    /**
     * 订单ID。
     * @example `123456****`
     */
    OrderId: string;
}
