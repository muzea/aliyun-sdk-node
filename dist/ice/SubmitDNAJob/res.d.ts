export interface SubmitDNAJobResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 视频DNA作业ID。建议您保存此ID便于后续调用其他相关接口时使用。
     * @example `88c6ca184c0e47098a5b665e2****`
     */
    JobId: string;
}
