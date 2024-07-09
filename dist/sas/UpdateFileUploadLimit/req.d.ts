export interface UpdateFileUploadLimitRequest {
    /**
     * 设置客户端上传文件的QPS限制阈值。取值范围：100~10000。
     * @example `100`
     */
    "Limit": number;
}
