export interface ListSmartAGByAccessPointResponse {
    /**
     * 当前接入点下智能接入网关实例总个数。
     * @example `16`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `AE203140-5D0C-4B4D-88D1-D008206B3A01`
     */
    RequestId: string;
    /**
     * 智能接入网关实例信息。
     */
    SmartAccessGateways: {
        /**
         * 当前智能接入网关实例线下路由同步方式。取值：
         * - **static**：静态路由。
         * - **dynamic**：动态路由。
         * @example `static`
         */
        RoutingStrategy: string;
        /**
         * 智能接入网关实例名称。
         * @example `test`
         */
        SmartAGName: string;
        /**
         * 智能接入网关实例ID。
         * @example `sag-p86e06z4geaji1****`
         */
        SmartAGId: string;
        /**
         * 智能接入网关实例状态：
         * - **Active**：可用。
         * - **Offline**：离线。
         * @example `Active`
         */
        SmartAGStatus: string;
        /**
         * 智能接入网关实例描述。
         * @example `test`
         */
        SmartAGDescription: string;
        /**
         * 智能接入网关实例绑定的云连接网实例ID。
         * @example `ccn-l42qf3vpvb****`
         */
        AssociatedCcnId: string;
        /**
         * 智能接入网关实例绑定的设备类型。
         * - **sag-1000**。
         * - **sag-100WM**。
         * @example `sag-1000`
         */
        HardwareVersion: string;
    }[];
}
