export interface DescribeSslVpnClientsResponse {
    /**
     * 请求ID。
     * @example `885E117D-06A9-38A3-8DD2-40BDAC429FFC`
     */
    RequestId: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-gw8gfb947ctddabja****`
     */
    VpnGatewayId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页可显示的最大条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * VPN网关实例所属的地域ID。
     * @example `eu-central-1`
     */
    RegionId: string;
    /**
     * 客户端信息列表。
     */
    ClientInfoList: {
        /**
         * SSL-VPN连接的状态。
         * 取值：**online**，表示客户端和阿里云已成功建立SSL-VPN连接。
         * @example `online`
         */
        Status: string;
        /**
         * 客户端与阿里云建立SSL-VPN连接时，VPN网关为客户端分配的私网IP地址。
         * @example `10.10.10.10`
         */
        PrivateIp: string;
        /**
         * 指VPN网关通过SSL-VPN连接向客户端发送的流量。单位：Byte。
         * @example `57144`
         */
        SendBytes: number;
        /**
         * 客户端与阿里云建立SSL-VPN连接时的时间戳。单位：毫秒。
         * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至建立SSL-VPN连接时的总时长。
         * @example `1670985008000`
         */
        ConnectedTime: number;
        /**
         * 客户端与阿里云建立SSL-VPN连接时，使用的SSL客户端证书。
         * > 如果客户端使用双因子认证功能与阿里云建立SSL-VPN连接，则当前参数的返回值为客户端的用户名。
         * @example `CN=vsc-gw8gkh6gtilf1whgc****`
         */
        CommonName: string;
        /**
         * 客户端与阿里云建立SSL-VPN连接时，客户端实际使用的公网IP地址。
         * @example `8.XX.XX.15`
         */
        Ip: string;
        /**
         * 指VPN网关通过SSL-VPN连接从客户端接收的流量。单位：Byte。
         * @example `60782`
         */
        ReceiveBytes: number;
        /**
         * 客户端与阿里云建立SSL-VPN连接时，客户端实际使用的端口号。
         * @example `4****`
         */
        Port: string;
    }[];
}
