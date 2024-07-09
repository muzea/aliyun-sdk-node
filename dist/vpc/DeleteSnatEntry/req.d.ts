export interface DeleteSnatEntryRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SNAT条目所属的SNAT表的ID。
     * @example `stb-bp190wu8io1vgev80****`
     */
    "SnatTableId": string;
    /**
     * 要删除的SNAT条目的ID。
     * @example `snat-bp1vcgcf8tm0plqcg****`
     */
    "SnatEntryId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
}
