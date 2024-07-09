export interface CreateRumUploadFileUrlResponse {
    /**
     * Id of the request
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误提示信息。
     * @example `内部错误，请联系管理员。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 文件上传链接。
     * @example `http://arms-rum-v2.oss-cn-hangzhou.aliyuncs.com/113197164xxxxx28/b590lhguqs%40f93xxxxxbf31d3/1.0.0-robots.txt?Expires=1713847079&OSSAccessKeyId=STS.NT6XvoxkyqA&Signature=6ptYX4OTjLMrsleTlA2t97`
     */
    Data: string;
}
