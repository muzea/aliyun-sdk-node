export interface DoSelfDelegateResponse {
    /**
     * 普通成员资源授权的返回结果。取值：
     * - true：授权
     * - false：取消授权
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `9B9CBCEE-9225-5069-BC7F-880938A2****`
     */
    RequestId: string;
}
