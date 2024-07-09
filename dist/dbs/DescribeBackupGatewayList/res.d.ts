export interface DescribeBackupGatewayListResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `46361705-8531-492F-807E-A97E482DD4A1`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.  `
     */
    ErrMessage: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总备份网关数。
     * @example `0`
     */
    TotalElements: number;
    /**
     * 每页的记录数。
     * @example `30`
     */
    PageSize: number;
    Items: {
        /**
         * 备份网关详情。
         */
        BackupGateway: {
            /**
             * 备份网关显示名称。
             * @example `test`
             */
            DisplayName: string;
            /**
             * 备份网关创建时间，取值1554560477000。
             * @example `1554560477000`
             */
            BackupGatewayCreateTime: number;
            /**
             * 备份网关ID。
             * @example `2321313123`
             */
            BackupGatewayId: string;
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 备份网关唯一标识。
             * @example `sgdsajhdgu`
             */
            Identifier: string;
            /**
             * 安装备份网关的主机公网IP。
             * @example `XX.XX.XX.XX`
             */
            SourceEndpointInternetIP: string;
            /**
             * 备份网关状态，取值：
             * - ONLINE：在线
             * - OFFLINE：离线
             * - STOPPED：停止
             * - UPGRADING：升级中
             * @example `ONLINE`
             */
            BackupGatewayStatus: string;
            /**
             * 安装备份网关的主机私网IP。
             * @example `XX.XX.XX.XX`
             */
            SourceEndpointIntranetIP: string;
            /**
             * 上次心跳汇报时间，取值：1554560477000。
             * @example `1554560477000`
             */
            LastHeartbeatTime: number;
            /**
             * 安装备份网关的主机名称。
             * @example `test`
             */
            SourceEndpointHostname: string;
        }[];
    };
}
