export interface CreateCapacityReservationResponse {
    /**
     * 容器预定任务ID。
     * @example `b354****`
     */
    TaskId: string;
    /**
     * 当前最大可分配的容器数量。
     * ><notice>当您重复调用本接口时，参数取值存在差异。></notice>
     * @example `10000`
     */
    CurrMaxAllocatableSessionCapacity: number;
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
}
