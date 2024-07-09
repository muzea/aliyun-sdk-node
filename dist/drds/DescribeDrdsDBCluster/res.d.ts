export interface DescribeDrdsDBClusterResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `60A77FD6-0DE4-4A34-B6FB-9C2673******`
     */
    RequestId: string;
    /**
     * PolarDB的实例信息。
     */
    DbInstance: {
        /**
         * PolarDB实例过期时间。
         * @example `2019-09-27 11:22:33`
         */
        ExpireTime: string;
        /**
         * PolarDB实例购买类型。
         * @example `Postpaid`
         */
        PayType: string;
        /**
         * PolarDB实例状态。
         * @example `1`
         */
        DBInstanceStatus: string;
        /**
         * PolarDB实例网络类型。
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * PolarDB访问端口。
         * @example `3306`
         */
        Port: number;
        /**
         * DRDS数据库存储引擎版本。
         * @example `8.0`
         */
        EngineVersion: string;
        /**
         * RDS实例类型，PolarDB集群不支持该参数。
         * @example `ignore`
         */
        RdsInstType: string;
        /**
         * PolarDB实例剩余天数。
         * @example `0`
         */
        RemainDays: string;
        /**
         * PolarDB集群ID。
         * @example `pc-*****************`
         */
        DBInstanceId: string;
        /**
         * DRDS数据库存储类型。
         * @example `POLARDB`
         */
        DbInstType: string;
        /**
         * DRDS数据库存储引擎类型。
         * @example `POLARDB`
         */
        Engine: string;
        /**
         * 数据库存储类型为PolarDB时，DRDS的读流量配置模式。
         * 取值范围如下：
         * * **DEFAULT**： 默认模式（即读流量全部发往PolarDB读写节点）。
         * * **CUSTOM**： 用户自定义模式（即您可以自定义流量发往读写节点和只读节点的配比）。
         * * **BALANCE**：读均衡模式（读流量由PolarDB集群的读负载模块自动分配，也可以理解为读流量均衡分配到各个节点）。
         * @example `CUSTOM`
         */
        ReadMode: string;
        Endpoints: {
            /**
             * DRDS管理的PolarDB读写分离连接地址。
             */
            Endpoint: {
                /**
                 * DRDS数据库管理的该连接地址的读比例。
                 * @example `85`
                 */
                ReadWeight: number;
                /**
                 * PolarDB连接地址ID。
                 * @example `pe-*****************`
                 */
                EndpointId: string;
                /**
                 * PolarDB连接地址下的节点ID列表，多个节点间用英文逗号（,）隔开。
                 * @example `pi-*****************,pi-*****************`
                 */
                NodeIds: string;
            }[];
        };
        DBNodes: {
            /**
             * PolarDB集群中的节点信息。
             */
            DBNode: {
                /**
                 * PolarDB集群中节点的角色，取值范围如下：
                 * * **Reader**
                 * * **Writer**
                 * @example `Reader`
                 */
                DBNodeRole: string;
                /**
                 * PolarDB集群节点的可用区ID。
                 * @example `cn-hangzhou-i`
                 */
                ZoneId: string;
                /**
                 * PolarDB集群中节点的ID。
                 * @example `pi-***************`
                 */
                DBNodeId: string;
                /**
                 * PolarDB集群节点的状态。
                 * @example `Running`
                 */
                DBNodeStatus: string;
            }[];
        };
    };
}
