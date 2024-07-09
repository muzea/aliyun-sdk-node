export interface StartPairDrillRequest {
    /**
     * 异步复制对中从盘所属的地域ID。您可以调用[DescribeDiskReplicaPairs](~~354206~~)查询异步复制对的当前从盘所属地域。
     * > 必须在当前从端所属地域下启用容灾演练功能。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 复制对ID。您可以调用[DescribeDiskReplicaPairs](~~354206~~)查询异步复制对列表，获得复制对ID。
     * @example `pair-xxxx`
     */
    "PairId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
