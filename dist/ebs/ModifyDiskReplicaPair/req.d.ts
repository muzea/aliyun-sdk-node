export interface ModifyDiskReplicaPairRequest {
    /**
     * 异步复制关系中主盘或从盘所属的地域ID。您可以调用[DescribeRegions](~~354276~~)查询异步复制功能支持的地域信息。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 异步复制关系的ID。
     * @example `pair-cn-dsa****`
     */
    "ReplicaPairId": string;
    /**
     * 异步复制关系的名称。
     * @example `TestReplicaPair`
     */
    "PairName"?: string;
    /**
     * 异步复制关系的描述信息。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 带宽值，单位Kbps。
     * >该参数暂未开放使用。
     * @example `10240`
     */
    "Bandwidth"?: number;
    /**
     * 一致性组设定的RPO值，单位：秒。当前仅支持900秒。
     * @example `900`
     */
    "RPO"?: number;
}
