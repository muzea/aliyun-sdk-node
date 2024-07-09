export interface ModifySnatEntryRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  SNAT条目所在的SNAT表的ID。
     * @example `stb-8vbczigrhop8x5u3t****`
     */
    "SnatTableId": string;
    /**
     *  要修改的SNAT条目的ID。
     * @example `snat-bp1vcgcf8tm0plqcg****`
     */
    "SnatEntryId": string;
    /**
     * - 为公网NAT网关修改SNAT条目时，该参数为SNAT条目中的EIP，多个EIP之间用半角逗号（,）隔开。
     *
     *     指定多个EIP配置SNAT IP地址池时，业务连接会通过哈希算法分配到多个EIP，由于每个连接的流量不同，可能会出现多EIP业务流量不均匀的情况，建议您将每个EIP都加入到同一个共享带宽中以避免单EIP带宽达到上限导致业务受损。
     * - 为VPC NAT网关修改SNAT条目时，该参数为SNAT条目中的NAT IP地址。
     * @example `47.98.XX.XX`
     */
    "SnatIp"?: string;
    /**
     * SNAT条目的名称。
     * 长度为2~128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `SnatEntry-1`
     */
    "SnatEntryName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否打开IP亲和性。取值：
     * - **0**：关闭IP亲和性。
     * - **1**：打开IP亲和性。
     * > 打开IP亲和性开关后，如果SNAT条目绑定多个EIP或NAT IP，同一个客户端将使用相同的EIP或NAT IP进行访问，否则客户端将从绑定的EIP或NAT IP中随机选取进行访问。
     * @example `1`
     */
    "EipAffinity"?: number;
}
