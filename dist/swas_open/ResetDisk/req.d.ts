export interface ResetDiskRequest {
    /**
     * 快照对应的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待回滚的磁盘ID。
     * @example `d-bp14wq0149cpp2xy****`
     */
    "DiskId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 快照ID。
     * @example `s-bp16oazlsold4dks****`
     */
    "SnapshotId": string;
}
