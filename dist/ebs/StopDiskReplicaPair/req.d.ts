export interface StopDiskReplicaPairRequest {
    /**
     * 异步复制关系中主盘或从盘所属的地域ID。您可以调用[DescribeDiskReplicaPairs](~~354206~~)查询存量异步复制关系的地域信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 异步复制关系的ID。
     * @example `pair-cn-dsa****`
     */
    "ReplicaPairId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
