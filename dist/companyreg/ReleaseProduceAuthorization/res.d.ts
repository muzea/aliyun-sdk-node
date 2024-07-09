export interface ReleaseProduceAuthorizationResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `2174AA97-56FB-50FA-B243-0460B9E4CE0C`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: string;
    /**
     * 表示是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
}
