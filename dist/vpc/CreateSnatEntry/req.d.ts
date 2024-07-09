export interface CreateSnatEntryRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SNAT表的ID。
     * @example `stb-bp190wu8io1vgev****`
     */
    "SnatTableId": string;
    /**
     * 交换机的ID。
     * * 当为公网NAT网关添加SNAT条目时，该参数表示该交换机内的ECS实例均可以通过SNAT规则访问公网。指定多个EIP配置SNAT IP地址池时，业务连接会通过哈希算法分配到多个EIP，由于每个连接的流量不同，可能会出现多EIP业务流量不均匀的情况，建议您将每个EIP都加入到同一个共享带宽中以避免单EIP带宽达到上限导致业务受损。
     * * 当为VPC NAT网关添加SNAT条目时，该参数表示该交换机内的ECS实例均可以通过SNAT规则访问外部网络。
     * > 参数**SourceCIDR**和参数**SourceVSwtichId**必须输入一个且不能都输入。
     * @example `vsw-bp1nhx2s9ui5o****`
     */
    "SourceVSwitchId"?: string;
    /**
     * 输入VPC、交换机或ECS实例的网段，还可以输入任意网段。
     * SNAT条目有以下几种粒度：
     * - VPC粒度：NAT网关所在VPC的网段，该VPC下的所有ECS实例均可以通过SNAT规则访问互联网或者外部网络。
     * - 交换机粒度：指定交换机的网段（如192.168.1.0/24），该交换机下的ECS实例均可以通过SNAT规则访问互联网或者外部网络。
     * - ECS粒度：指定ECS实例的地址（如192.168.1.1/32），该ECS实例可以通过SNAT规则访问互联网或者外部网络。
     * - 输入任意网段，该网段下的所有ECS实例均可以通过SNAT服务访问互联网或者外部网络。
     * 当为公网NAT网关添加SNAT条目时，如果**SnatIp**仅指定了一个公网IP，ECS实例使用指定的公网IP访问互联网；
     * 如果**SnatIp**指定了多个公网IP，ECS实例随机使用**SnatIp**中的公网IP访问互联网。
     * > 参数**SourceCIDR**和参数**SourceVSwtichId**必须输入一个且不能都输入。
     * @example `10.1.1.0/24`
     */
    "SourceCIDR"?: string;
    /**
     * * 为公网NAT网关添加SNAT条目时，该参数为SNAT条目中的EIP，多个EIP之间用半角逗号（,）隔开。
     * >指定多个EIP配置SNAT IP地址池时，业务连接会通过哈希算法分配到多个EIP，由于每个连接的流量不同，可能会出现多EIP业务流量不均匀的情况，建议您将每个EIP都加入到同一个共享带宽中以避免单EIP带宽达到上限导致业务受损。
     * * 为VPC NAT网关添加SNAT条目时，该参数为SNAT条目中的NAT IP地址，多个NAT IP地址之间用半角逗号（,）隔开。
     * @example `47.98.XX.XX`
     */
    "SnatIp": string;
    /**
     * SNAT条目的名称。
     * 长度为2~128个字符，必须以大小写字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `SnatEntry-1`
     */
    "SnatEntryName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的**Requestld**作为**ClientToken**标识。每次API请求的**Requestld**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44****`
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
