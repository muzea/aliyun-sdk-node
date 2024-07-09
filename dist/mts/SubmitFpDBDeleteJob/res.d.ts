export interface SubmitFpDBDeleteJobResponse {
    /**
     * 请求ID。
     * @example `4247B23C-26DE-529F-8D9F-FD6811AE979B`
     */
    RequestId: string;
    /**
     * 清空或删除DNA库作业ID。建议您保存此ID便于后续使用其他接口时使用。
     * @example `d98459323c024947a104f6a50cbf****`
     */
    JobId: string;
}
