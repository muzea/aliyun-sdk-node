export interface DeleteAddressBookRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 地址簿的唯一标识ID。
     * 删除安全访问控制的地址簿，需要提供该地址簿的唯一标识ID，该ID可调用[DescribeAddressBook](~~138869~~)接口获取。
     * @example `0657ab9d-fe8b-4174-b2a6-6baf358e****`
     */
    "GroupUuid": string;
}
