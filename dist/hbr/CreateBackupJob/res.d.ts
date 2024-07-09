export interface CreateBackupJobResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `25F49E7B-7E39-542E-83AD-62E6E7F73786`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 备份任务ID。
     * @example `job-000csy09q50a2jdcbwbo`
     */
    JobId: string;
}
