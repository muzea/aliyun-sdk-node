export interface SubmitDomainSpecialBizCredentialsResponse {
    /**
     * 唯一请求识别码
     * @example `A83E1D74-E46B-505C-947A-8C6B7E41C011
    `
     */
    RequestId: string;
    /**
     * 直接指定返回的Http状态码
     * @example `200
    `
     */
    HttpStatusCode: number;
    /**
     * 动态错误Code
     * @example `-`
     */
    DynamicCode: string;
    /**
     * 动态错误信息
     * @example `-`
     */
    DynamicMessage: string;
    /**
     * 是否同步处理
     * @example `True`
     */
    Synchro: boolean;
    /**
     * 错误信息
     * @example `110001`
     */
    ErrorMsg: string;
    /**
     * 错误码
     * @example `参数错误`
     */
    ErrorCode: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回对象
     * @example `-`
     */
    Module: any;
    /**
     * 是否允许重试
     * @example `False`
     */
    AllowRetry: boolean;
    /**
     * 返回错误参数数组
     */
    ErrorArgs: any[];
    /**
     * 产生errorCode的应用名称
     * @example `test-com
    `
     */
    AppName: string;
}
