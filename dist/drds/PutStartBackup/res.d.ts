export interface PutStartBackupResponse {
    /**
     * 请求ID。
     * @example `5D64DE5944A1E541E0******`
     */
    RequestId: string;
    /**
     * 请求结果描述。
     * @example `success`
     */
    Result: string;
    /**
     * 当前API是否请求成功。
     * @example `true`
     */
    Success: boolean;
}
