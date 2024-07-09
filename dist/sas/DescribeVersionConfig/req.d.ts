export interface DescribeVersionConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 使用云安全中心服务的阿里云账号ID。
     * > 调用[GetUser](~~28681~~)接口获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: string;
}
