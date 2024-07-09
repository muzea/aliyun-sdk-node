export interface GetMseFeatureSwitchResponse {
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6B4653A3-8D9C-5FDC-BB0C-936D40E9794B`
     */
    RequestId: string;
    /**
     * 返回结果。
     * @example `{'nacos_config_encrypt': False}`
     */
    Result: any;
    /**
     * 错误码。
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
