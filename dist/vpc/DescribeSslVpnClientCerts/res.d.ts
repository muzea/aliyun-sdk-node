export interface DescribeSslVpnClientCertsResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `5BE01CD7-5A50-472D-AC14-CA181C5C03BE`
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
    SslVpnClientCertKeys: {
        /**
         * SSL客户端证书的信息列表。
         */
        SslVpnClientCertKey: {
            /**
             * 客户端证书的状态。
             * - **expiring-soon**：证书将在1周后过期。
             *
             * - **normal**：正常。
             * - **expired**：已过期。
             *
             * @example `normal`
             */
            Status: string;
            /**
             * SSL客户端证书的到期时间戳。单位：毫秒。
             * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至SSL客户端证书到期时的总时长。
             * @example `1494966335000`
             */
            EndTime: number;
            /**
             * SSL客户端证书的创建时间戳。单位：毫秒。
             * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建SSL客户端证书时的总时长。
             * @example `1492747187000`
             */
            CreateTime: number;
            /**
             * SSL客户端证书的ID。
             * @example `vsc-bp1n8wcf134yl0osr****`
             */
            SslVpnClientCertId: string;
            /**
             * SSL服务端ID。
             * @example `vss-bp18q7hzj6largv4v****`
             */
            SslVpnServerId: string;
            /**
             * SSL客户端证书的名称。
             * @example `cert1`
             */
            Name: string;
            /**
             * SSL客户端证书的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * SSL客户端证书所属的资源组ID。
             * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
             * @example `rg-acfmzs372yg****`
             */
            ResourceGroupId: string;
        }[];
    };
}
