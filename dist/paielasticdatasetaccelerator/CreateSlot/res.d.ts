export interface CreateSlotResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF19197`
     */
    RequestId: string;
    /**
     * 数据集加速槽ID。
     * @example `slot-5zk866779me51jgu3w`
     */
    SlotId: string;
    /**
     * 数据集挂载点ID。
     * @example `end-5zk866779me51jgu3w,end-5zk866779me51jgu3w`
     */
    EndpointIds: string;
}
