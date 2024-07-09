export interface CreateInstanceResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `CCBB1225-C392-480E-8C7F-D09AB2CD2***`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `xxx failed,xxxx`
     */
    Message: string;
    /**
     * 返回已创建实例的ID
     * @example `amqp-cn-xxxxx`
     */
    Data: any;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
