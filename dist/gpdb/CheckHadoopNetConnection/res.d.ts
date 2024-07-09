export interface CheckHadoopNetConnectionResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 连接状态：
     * - 网络联通：Success
     * - 网络不通：Failed
     * @example `Success`
     */
    ConnectionStatus: string;
    /**
     * 返回信息：连接不通时返回报错信息，否则返回为""。
     * @example `connection timeout`
     */
    ConnectionMessage: string;
}
