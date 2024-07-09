export interface AddDevicesResponse {
    /**
     * 请求ID。
     * @example `A87DBB05-653A-5E4B-B72B-5F4A1E07****`
     */
    RequestId: string;
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `The parameter is not specified.`
     */
    Message: string;
}
