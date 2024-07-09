export interface GetUserGatewayInstancesResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `514F794F-7E30-5DAA-97C0-0B0D75DA0259`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 网关节点实例列表。
     */
    GatewayInstanceList: {
        /**
         * 网关节点ID。
         * @example `dg-node-wJOb0tO-gaaWFCug****`
         */
        GatewayInstanceId: string;
        /**
         * 网关ID。
         * @example `dg-159t17m19ps0****`
         */
        GatewayId: string;
        /**
         * 上次更新网关节点的时间戳。
         * @example `1699330233000`
         */
        LastUpdateTime: number;
        /**
         * 本地IP地址。
         * @example `127.0.XX.XX`
         */
        LocalIP: string;
        /**
         * 主机。
         * @example `  127.0.0.1`
         */
        OutputIP: string;
        /**
         * 提示信息。
         * @example `SUCCESS`
         */
        Message: string;
        /**
         * 端点地址。
         * @example `127.0.XX.XX`
         */
        EndPoint: string;
        /**
         * 进程的版本号。
         * @example `3.0`
         */
        CurrentDaemonVersion: string;
        /**
         * 版本号。
         * @example `3.0`
         */
        CurrentVersion: string;
        /**
         * 网关节点所在地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 连接类型。
         * @example `internet`
         */
        ConnectEndpointType: string;
        /**
         * 网关节点状态。
         * @example `STOPPED`
         */
        GatewayInstanceStatus: string;
    }[];
}
