export interface CreateBackupRequest {
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f54a343f1a4233c1e7d1c5c******`
     */
    "ClientToken"?: string;
}
