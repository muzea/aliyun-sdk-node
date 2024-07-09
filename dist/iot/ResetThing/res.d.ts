export interface ResetThingResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `57b144cf-09fc-4916-a272-a62902d5b207`
     */
    RequestId: string;
    /**
     * 是否调用成功。**true**表示调用成功，**false**表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 设备任务ID，设备任务的全局唯一标识符。
     * @example `450407b***`
     */
    JobId: string;
}
