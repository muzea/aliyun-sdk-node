export interface ModifyActiveOperationTaskResponse {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * @example `11111,22222`
     */
    Ids: string;
    /**
     * 请求ID。
     * @example `5D622714-AEDD-4609-9167-F5DDD3D1****`
     */
    RequestId: string;
}
