export interface ListVpcEndpointsResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC47D9`
     */
    RequestId: string;
    /**
     * 终端节点信息详情。
     */
    Result: {
        /**
         * 终端节点的业务状态，取值含义如下：
         * - Normal：正常。
         * - FinancialLocked：欠费锁定。
         * @example `Normal`
         */
        endpointBusinessStatus: string;
        /**
         * 终端节点关联的终端节点服务的ID。
         * @example `epsrv-bp1w0p3jdirbfmt6****`
         */
        serviceId: string;
        /**
         * 终端节点名称。
         * @example `test`
         */
        endpointName: string;
        /**
         * 终端节点ID。
         * @example `ep-bp1tah7zbrwmkjef****`
         */
        endpointId: string;
        /**
         * 终端节点关联的终端节点服务的名称。
         * @example `com.aliyuncs.privatelink.cn-hangzhou.epsrv-bp1w0p3jdirbfmt6****`
         */
        serviceName: string;
        /**
         * 终端节点的创建时间。
         * @example `2021-07-22T01:19:24Z`
         */
        createTime: string;
        /**
         * 终端节点连接状态，取值含义如下：
         * - Pending：修改中。
         * - Connecting：连接中。
         * - Connected：已连接。
         * - Disconnecting：断开连接中。
         * - Disconnected：未连接。
         * - Deleting：删除中。
         * - ServiceDeleted：终端节点对应的服务已删除。
         * @example `Disconnected`
         */
        connectionStatus: string;
        /**
         * 终端节点域名，用于连接配置。
         * @example `ep-bp18s6wy9420wdi4****.epsrv-bp1bz3efowa4kc0****.cn-hangzhou.privatelink.aliyuncs.com`
         */
        endpointDomain: string;
        /**
         * 终端节点状态，取值含义如下：
         * - Creating：创建中。
         * - Active：可用。
         * - Pending：修改中。
         * - Deleting：删除中。
         * @example `Active`
         */
        endpointStatus: string;
    }[];
}
