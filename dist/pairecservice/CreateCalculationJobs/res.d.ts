export interface CreateCalculationJobsResponse {
    /**
     * 请求ID。
     * @example `8C27790E-CCA5-56BB-BA17-646295DEC0A2`
     */
    RequestId: string;
    /**
     * 计算任务ID列表。
     */
    CalculationJobIds: string[];
}
