export interface DescribeSslVpnServersResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `D350187B-EA41-4577-950B-95434C8302E1`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    SslVpnServers: {
        /**
         * SSL-VPN服务端的详细信息。
         */
        SslVpnServer: {
            /**
             * VPN网关的公网IP地址。
             * @example `47.5.XX.XX`
             */
            InternetIp: string;
            /**
             * IDaaS EIAM实例ID。
             * @example `idaas-cn-hangzhou-****`
             */
            IDaaSInstanceId: string;
            /**
             * 创建SSL-VPN服务端的时间戳。
             * @example `1613800884000`
             */
            CreateTime: number;
            /**
             * VPN网关ID。
             * @example `vpn-bp1on0xae9d771ggi****`
             */
            VpnGatewayId: string;
            /**
             * IDaaS EIAM实例所属地域ID。
             * @example `cn-hangzhou`
             */
            IDaaSRegionId: string;
            /**
             * 是否对通信进行压缩。
             * - **true**：是。
             * - **false**（默认值）：否。
             * @example `false`
             */
            Compress: boolean;
            /**
             * SSL-VPN服务端所使用的端口。
             * @example `1194`
             */
            Port: number;
            /**
             * 本端网段。
             * @example `192.168.0.0/24`
             */
            LocalSubnet: string;
            /**
             * SSL-VPN服务端的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 使用的加密算法。
             * @example `AES-128-CBC`
             */
            Cipher: string;
            /**
             * 当前连接数。
             * @example `0`
             */
            Connections: number;
            /**
             * SSL-VPN服务端的ID。
             * @example `vss-bp15j3du13gq1dgey****`
             */
            SslVpnServerId: string;
            /**
             * 最大连接数。
             * @example `5`
             */
            MaxConnections: number;
            /**
             * SSL-VPN服务端名称。
             * @example `test`
             */
            Name: string;
            /**
             * 是否开启了双因子认证。
             * - **true**：已开启。
             * - **false**（默认值）：未开启。
             * @example `true`
             */
            EnableMultiFactorAuth: boolean;
            /**
             * 客户端网段。
             * @example `10.10.1.0/24`
             */
            ClientIpPool: string;
            /**
             * SSL-VPN服务端所使用的协议。
             * @example `UDP`
             */
            Proto: string;
            /**
             * SSL-VPN服务端所属的资源组ID。
             * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
             * @example `rg-acfmzs372yg****`
             */
            ResourceGroupId: string;
            /**
             * IDaaS应用ID。
             * @example `app_my6g4qmvnwxzj2f****`
             */
            IDaaSApplicationId: string;
            /**
             * IDaaS EIAM实例的版本。
             * - 仅当SSL服务端绑定的是IDaaS EIAM 2.0实例，系统才会返回该参数。仅取值：**EIAM 2.0**。
             * - 如果SSL服务端绑定的是IDaaS EIAM 1.0实例，系统不会返回该参数。
             * @example `EIAM 2.0`
             */
            IDaaSInstanceVersion: string;
        }[];
    };
}
