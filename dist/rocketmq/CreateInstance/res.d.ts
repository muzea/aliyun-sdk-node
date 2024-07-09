export interface CreateInstanceResponse {
    /**
     * 请求ID，每个请求ID都是唯一的，可用于排查和定位问题。
     * @example `AF9A8B10-C426-530F-A0DD-96320B39****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回已创建实例的ID。
     * @example `rmq-cn-7e22ody****`
     */
    data: string;
    /**
     * 错误码。
     * @example `200`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Success`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `200`
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
