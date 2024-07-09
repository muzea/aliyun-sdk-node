export interface ModifyWebLockStatusRequest {
    /**
     * 访问源的IP地址。
     * @example `125.71.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要修改防暴力破解状态的服务器UUID。
     * 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `inet-1234567****`
     */
    "Uuid": string;
    /**
     * 指定服务器的防护状态。取值：
     * - **on**：开启防护
     * - **off**：关闭防护
     * > 关闭当前服务器的网页防篡改防护后，会释放出一个防篡改授权数。
     * @example `on`
     */
    "Status": string;
}
