export interface DescribeSmartAccessGatewayClientUsersResponse {
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `62F4CF10-F909-487E-8E95-BC35457C5F50`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    Users: {
        /**
         * 客户端账号信息列表。
         */
        User: {
            /**
             * 客户端可使用的上云带宽。单位：Kbps。
             * @example `2000`
             */
            Bandwidth: number;
            /**
             * 客户端的启用状态：
             * - **0**：表示启用该客户端。
             * - **1**：表示禁用该客户端。
             * @example `1`
             */
            State: number;
            /**
             * 系统为客户端分配的IP地址。
             * @example `10.10.10.1`
             */
            ClientIp: string;
            /**
             * 客户端的用户名。
             * @example `username`
             */
            UserName: string;
            /**
             * 客户端的邮箱地址。
             * @example `username@example.com`
             */
            UserMail: string;
            /**
             * 客户端可使用的应用加速带宽峰值。单位：Kbps。
             * @example `1000`
             */
            AccelerateBandwidth: number;
            /**
             * 客户端的IP地址是否为固定IP地址。
             * - **1**：是。
             * - **0**：否。
             * @example `0`
             */
            IsStaticIp: number;
        }[];
    };
}
