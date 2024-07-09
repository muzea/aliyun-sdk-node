export interface DescribeSecurityStatInfoRequest {
    /**
     * 访问源IP地址。
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
     * 云安全中心多账号安全管控功能，用于查询资源目录内其他成员账号安全信息，填入其他成员账号的账号ID。
     * @example `12345`
     */
    "ResourceDirectoryAccountId"?: string;
}
