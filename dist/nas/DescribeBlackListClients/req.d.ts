export interface DescribeBlackListClientsRequest {
    /**
     * 文件系统所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 文件系统ID。
     * @example `cpfs-123458****`
     */
    "FileSystemId": string;
    /**
     * 客户端IP地址。
     * @example `192.168.0.0`
     */
    "ClientIP"?: string;
}
