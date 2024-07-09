export interface CancelActiveOperationTasksResponse {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * @example `11111,22222`
     */
    Ids: string;
    /**
     * 请求ID。
     * @example `AE4F6C34-065F-45AA-F5BN-4B8D816F6305`
     */
    RequestId: string;
}
