export interface UpdateInstanceResponse {
    /**
     * 请求ID，每个请求ID都是唯一的，可用于排查和定位问题。
     * @example `AA87DE09-DA44-52F4-9515-78B1B607****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     * @example `true`
     */
    data: boolean;
    /**
     * 错误码。
     * @example `MissingInstanceId`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Parameter instanceId is mandatory for this action .`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `InstanceId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `instanceId`
     */
    dynamicMessage: string;
}
