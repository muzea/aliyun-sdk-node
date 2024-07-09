export interface BatchQueryDeviceDetailResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 调用成功时，返回设备的详细信息。
         */
        Data: {
            /**
             * 设备状态。取值：
             * - **ONLINE**：设备在线。
             * - **OFFLINE**：设备离线。
             * - **UNACTIVE**：设备未激活。
             * - **DISABLE**：设备已禁用。
             * @example `ONLINE`
             */
            Status: string;
            /**
             * ​设备的激活时间，UTC格式。
             * @example `2019-06-21T12:31:42.000Z`
             */
            UtcActive: string;
            /**
             * 设备所属产品的名称。
             * @example `路灯产品`
             */
            ProductName: string;
            /**
             * 设备名称。
             * @example `light`
             */
            DeviceName: string;
            /**
             * ​设备的创建时间，UTC格式。
             * @example `2019-06-21T12:31:42.000Z`
             */
            UtcCreate: string;
            /**
             * 设备的固件版本号。
             * @example `V1.0.0.0`
             */
            FirmwareVersion: string;
            /**
             * 设备所属产品的**ProductKey**。
             * @example `a1BwAGV****`
             */
            ProductKey: string;
            /**
             * 节点类型，取值：
             * - **0**：设备。设备不能挂载子设备。可以直连物联网平台，也可以作为网关的子设备连接物联网平台。
             * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，和将拓扑关系同步到物联网平台。
             * @example `0`
             */
            NodeType: number;
            /**
             * 设备所在地域（与控制台上物联网平台服务地域对应）。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 设备密钥。
             * @example `mz2Canp4GB7qRVf1OYPNtRqB2anu****`
             */
            DeviceSecret: string;
            /**
             * 设备的创建时间，GMT格式。
             * @example `2019-06-21 20:31:42`
             */
            GmtCreate: string;
            /**
             * 设备的激活时间，GMT格式。
             * @example `2019-06-21 20:33:00`
             */
            GmtActive: string;
            /**
             * 设备的备注名称。
             * @example `智能路灯`
             */
            Nickname: string;
            /**
             * 物联网平台为该设备颁发的ID，设备的唯一标识符。
             * @example `Q7uOhVRdZRRlDnTLv****00100`
             */
            IotId: string;
        }[];
    };
}
