export interface CreateDIJobResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `4F6AB6B3-41FB-5EBB-AFB2-0C98D49DA2BB`
     */
    RequestId: string;
    /**
     * 数据集成任务ID。
     * @example `11792`
     */
    DIJobId: number;
}
