export interface DescribeWebLockStatusRequest {
    /**
     * 访问源的IP地址。
     * @example `221.214.XXX.XX`
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
     * 请求来源标识，固定为sas。
     * @example `sas`
     */
    "From"?: string;
}
