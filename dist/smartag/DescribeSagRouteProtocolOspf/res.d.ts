export interface DescribeSagRouteProtocolOspfResponse {
    /**
     * 请求ID。
     * @example `60F9B653-25B7-4511-A3C7-BCBAF462393E`
     */
    RequestId: string;
    /**
     * 超时时间间隔。
     * 单位：秒。
     * @example `40`
     */
    DeadTime: number;
    /**
     * MD5 Key的编号。
     * @example `1`
     */
    Md5KeyId: number;
    /**
     * OSPF区域ID。
     * @example `10`
     */
    AreaId: string;
    /**
     * OSPF路由器ID。
     * @example `1.XX.XX.1`
     */
    RouterId: string;
    /**
     * 发送Hello报文的时间间隔。
     * 单位：秒。
     * @example `10`
     */
    HelloTime: number;
    /**
     * OSPF区域类型。
     * >仅支持NSSA区域类型。
     * @example `NSSA`
     */
    AreaType: string;
    /**
     * 查询任务信息状态。
     */
    TaskStates: {
        /**
         * 错误信息。Successful标识查询任务成功。
         * @example `Successful`
         */
        ErrorMessage: string;
        /**
         * 异步任务状态：
         * - **Initialized**：查询任务初始化。
         * - **Offline**：智能接入网关设备离线未下发查询任务，智能接入网关设备上线后会继续下发。
         * - **Succeed**：查询任务下发成功。
         * - **Processing**：查询任务下发中。
         * - **VersionNotSupport**：智能接入网关设备当前版本不支持。
         * - **BuildRequestError**：管控不支持。
         * - **HardwareError**：由于设备原因查询任务下发失败。
         * - **TaskNotExist**：查询任务不存在。
         * - **OfflineNotConfiged**：智能接入网关设备离线未下发查询任务，智能接入网关设备上线后也不会下发。
         * @example `Succeed`
         */
        State: string;
        /**
         * 错误码。200标识查询任务成功。
         * @example `200`
         */
        ErrorCode: string;
        /**
         * 查询任务创建时间。
         * @example `1586843621000`
         */
        CreateTime: string;
    }[];
    /**
     * MD5 Key值。
     * @example `123****`
     */
    Md5Key: string;
    /**
     * 认证类型：
     * - **NONE**：不开启认证。
     * - **CLEARTEXT**：采用明文认证。
     * - **MD5**：采用MD5认证。
     * @example `MD5`
     */
    AuthenticationType: string;
}
