export interface RestartDedicatedHostResponse {
    /**
     * 主机ID。
     * @example `ch-bp10a5id3boqi****`
     */
    DedicatedHostId: string;
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22EDSH`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `10254125`
     */
    TaskId: number;
}
