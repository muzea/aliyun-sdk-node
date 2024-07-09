export interface ModifyWebLockDeleteConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
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
     * 要删除的防护目录的ID。
     * > 您可以调用[DescribeWebLockConfigList](~~DescribeWebLockConfigList~~)接口获取防护目录的ID。
     * @example `12`
     */
    "Id": number;
    /**
     * 要删除防护目录的服务器的UUID。
     * > 您可以调用[DescribeWebLockConfigList](~~DescribeWebLockConfigList~~)接口获取服务器的UUID。
     * @example `7f7fe9a2-55de-4b9d-a37a-0d981d36****`
     */
    "Uuid": string;
}
