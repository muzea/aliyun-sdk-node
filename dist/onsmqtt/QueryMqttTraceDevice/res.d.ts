export interface QueryMqttTraceDeviceResponse {
    /**
     * 当前位于第几页。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `317076B7-F946-46BC-A98F-4CF9777C****`
     */
    RequestId: string;
    /**
     * 每页最多显示的设备活动信息数量。
     * @example `2`
     */
    PageSize: number;
    /**
     * 查询到的设备活动信息总数。
     * @example `3`
     */
    Total: number;
    /**
     * 查询的设备活动信息明细。
     */
    DeviceInfoList: {
        /**
         * 设备连接标识。
         * @example `c69fe839209547fa9d073781b9cd****`
         */
        ChannelId: string;
        /**
         * 设备动作发生的时间。
         * @example `2021-05-21 15:51:54.867`
         */
        Time: string;
        /**
         * 设备动作的返回码。取值说明如下：
         * - **mqtt.trace.action.connect**：设备动作为**connect**时返回该参数值。
         * - **mqtt.trace.action.close**：设备动作为**close**时返回该参数值。
         * - **mqtt.trace.action.disconnect**：设备动作为**disconnect**时返回该参数值。
         * @example `mqtt.trace.action.connect`
         */
        ActionCode: string;
        /**
         * 设备动作。取值说明如下：
         * - **connect**：客户端请求与服务端连接。
         * - **close**：TCP连接断开。
         * - **disconnect**：客户端请求与服务端断开连接。
         * @example `connect`
         */
        Action: string;
        /**
         * 设备动作的描述信息。取值说明如下：
         * - **accepted**：服务端接收客户端发起的连接请求。
         * - **not authorized**：客户端访问的实例权限校验失败导致TCP连接断开。
         * - **clientId conflict**：客户端标识冲突导致TCP连接断开。
         * - **resource auth failed**：客户端访问的Topic或Group ID资源权限校验失败导致TCP连接断开。
         * - **no heart**：客户端无心跳导致TCP连接断开。
         * - **closed by client**：客户端异常导致TCP连接断开。
         * - **disconnected by client**：客户端请求断开连接。
         * - **invalid param**：请求参数不合法导致TCP连接断开。
         * - **Socket IOException**：网络抖动或丢包导致TCP连接断开。
         * @example `accept`
         */
        ActionInfo: string;
    }[];
}
