export interface DescribeMonitoringAgentAccessKeyResponse {
    /**
     * 安装插件需要的AccessKey。
     * @example `E7A27f9****`
     */
    AccessKey: string;
    /**
     * 安装插件需要的AccessSecret。
     * @example `sBjNOUhLylrxMX-Xv1****`
     */
    SecretKey: string;
    /**
     * 请求ID。
     * @example `C0F655E9-D793-51E6-BD78-CABBCCFC1047`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
}
