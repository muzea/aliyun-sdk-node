export interface AddDatabaseResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 报错信息。
     * @example `SYSTEM_ERR`
     */
    ErrorMsg: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A8B2EED2-70EF-51F1-8820-914F9AC9BAD2`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据库连接实例列表。
     */
    DbInstance: {
        /**
         * 通过网关所在宿主机去访问数据库的端口。
         * @example `3306`
         */
        Port: number;
        /**
         * 通过网关所在宿主机去访问数据库的地址。
         * @example `127.0.0.1`
         */
        Host: string;
        /**
         * 网关ID。
         * @example `dg-8d9bqu1030mhk0ix`
         */
        GatewayId: string;
        /**
         * 数据库类型。
         * @example `MYSQL`
         */
        DbType: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 数据库连接在DG服务侧的映射地址。
         * @example `10.0.0.1`
         */
        ConnectHost: string;
        /**
         * 数据库连接在DG服务侧的映射端口。
         * @example `32875`
         */
        ConnectPort: number;
        /**
         * DG服务器类型。
         * @example `ECS`
         */
        ServiceType: string;
        /**
         * DG服务器网络类型。
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * DG服务器节点ID。
         * @example `dg-node-r0SR-E90lsIRNgj6B_9m`
         */
        NodeId: string;
        /**
         * 当前DG网关实例的状态。
         * @example `SUCCESS`
         */
        InstanceStatus: string;
        /**
         * 备注信息
         * @example `test`
         */
        DbDescription: string;
        /**
         * 数据库连接实例ID。
         * @example `dg-db-rgfg9p4586o7y79b`
         */
        InstanceId: string;
        /**
         * 网关名称。
         * @example `测试`
         */
        GatewayName: string;
        /**
         * 用户ID。
         * @example `167xxxxxxxxxx`
         */
        UserId: string;
        /**
         * 归属主账号ID。
         * @example `167xxxxxxxxxx`
         */
        ParentId: string;
        /**
         * DG服务器所在VpcId
         * @example `vpc-xxxxx`
         */
        VpcId: string;
        /**
         * DG服务器Vpc实例ID
         * @example `i-xxxxxxx`
         */
        VpcInstanceId: string;
    };
}
