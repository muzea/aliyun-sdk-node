export interface GetMPUTaskStatusResponse {
    /**
     * 旁路转推任务的状态ID。
     *  - **0**：等待Channel开始。
     * >  30天内没有启动任务，任务将自动停止。
     *  - **1**：任务运行中 。
     *  - **2**：任务已停止 。
     *  - **3**：用户停止任务。
     *  - **4**：Channel已停止。
     *  - **5**：CDN网络问题，直播停止。
     *  - **6**：直播URL问题，直播停止。
     * @example `0`
     */
    Status: number;
    /**
     * 请求ID。
     * @example `760bad53276431c499e30dc36f6b26be`
     */
    RequestId: string;
}
