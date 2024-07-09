export interface InstallAckOperatorResponse {
    /**
     * 返回结果。支持：
     * - true：安装成功
     * - false：安装失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `EFA88951-7A6F-4A8E-AB8F-2BB7132BA751`
     */
    RequestId: string;
}
