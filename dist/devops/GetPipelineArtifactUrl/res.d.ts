export interface GetPipelineArtifactUrlResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: boolean;
    /**
     * 错误码
     * @example `”“`
     */
    errorCode: string;
    /**
     * 文件临时下载路径，一个小时有效期
     * @example `http://aliyun.com/`
     */
    fileUrl: string;
}
