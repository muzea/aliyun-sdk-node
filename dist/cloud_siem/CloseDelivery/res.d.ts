export interface CloseDeliveryResponse {
    /**
     * 威胁分析关闭服务的返回。取值：
     * - true：关闭成功
     * - false：关闭失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `F375A043-4F5B-55F2-A564-CC47FFC6****`
     */
    RequestId: string;
}
