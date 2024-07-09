export interface GetUserDatabasesResponse {
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
    Success: string;
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
     * 添加的数据库个数。
     * @example `100`
     */
    Count: number;
    DbInstanceList: {
        /**
         * 数据库实例列表。
         */
        DbInstance: {
            /**
             * 通过网关所在宿主机去访问数据库的端口。
             * @example `3306`
             */
            Port: number;
            /**
             * 通过网关所在宿主机去访问数据库的地址。
             * @example `127.0.XX.XX`
             */
            Host: string;
            /**
             * 网关ID。
             * @example `dg-pil582nbfe6p****`
             */
            GatewayId: string;
            /**
             * 数据库类型。
             * @example `MYSQL`
             */
            DbType: string;
            /**
             * 数据库所在地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 云上DG服务代理IP。
             * @example `10.0.0.0`
             */
            ConnectHost: string;
            /**
             * 云上DG服务代理端口。
             * @example `10001`
             */
            ConnectPort: number;
            /**
             * 云上DG服务机器类型。
             * @example `ECS`
             */
            ServiceType: string;
            /**
             * 云上DG服务代理节点网络类型。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 云上DG服务代理节点ID。
             * @example `dg-node-xxxxx`
             */
            NodeId: string;
            /**
             * 当前实例的状态。
             * @example `SUCCESS`
             */
            InstanceStatus: string;
            /**
             * 备注信息。
             * @example `测试库`
             */
            DbDescription: string;
            /**
             * 数据库实例ID。
             * @example `db-22h1qa9d452f****
            `
             */
            InstanceId: string;
            /**
             * 网关名称。
             * @example `测试库`
             */
            GatewayName: string;
            /**
             * 创建时间。
             * @example `2023-05-03 00:00:00`
             */
            GmtCreate: number;
            /**
             * 用户ID。
             * @example `100XXXXX`
             */
            UserId: string;
            /**
             * 归属主账号ID。
             * @example `100XXXXX`
             */
            ParentId: string;
            /**
             * 云上DG服务VPC ID。
             * @example `vpc-bp1alpkpdb8fh3avx****`
             */
            VpcId: string;
            /**
             * 云上DG服务实例ID。
             * @example `i-xxxxxxxxxx`
             */
            VpcInstanceId: string;
        }[];
    };
}
