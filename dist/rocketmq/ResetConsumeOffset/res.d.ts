export interface ResetConsumeOffsetResponse {
    /**
     * 请求ID
     * @example `F9A95891-EAD4-5A2B-8A30-676CD18921AF`
     */
    requestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `MissingInstanceId`
     */
    code: string;
    /**
     * 错误信息
     * @example `The instance cannot be found.`
     */
    message: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    httpStatusCode: number;
    /**
     * 动态错误码
     * @example `InstanceId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息
     * @example `instanceId`
     */
    dynamicMessage: string;
}
