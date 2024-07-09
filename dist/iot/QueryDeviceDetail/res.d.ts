export interface QueryDeviceDetailResponse {
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
         * API调用者是否是该设备的拥有者。
         * @example `true`
         */
        Owner: boolean;
        /**
         * 设备的激活时间，UTC格式。
         * @example `2018-08-06T02:48:41.000Z`
         */
        UtcActive: string;
        /**
         * 设备所属产品的名称。
         * @example `test`
         */
        ProductName: string;
        /**
         * 设备名称。
         * @example `light`
         */
        DeviceName: string;
        /**
         * 设备的创建时间，UTC格式。
         * @example `2018-08-06T02:47:50.000Z`
         */
        UtcCreate: string;
        /**
         * 设备默认（default）OTA模块的版本号。
         * 如果需要查询设备上报过的其他OTA模块版本信息，请参见[ListOTAModuleVersionsByDevice](~~190622~~)。
         * @example `V1.0.0.0`
         */
        FirmwareVersion: string;
        /**
         * 设备最近一次上线的时间，GMT格式。
         * @example `2018-08-06 13:43:12`
         */
        GmtOnline: string;
        /**
         * 设备最近一次上线的时间，UTC格式。
         * @example `2018-08-06T05:43:12.000Z`
         */
        UtcOnline: string;
        /**
         * 设备所属产品的ProductKey。
         * @example `a1rYuVF****`
         */
        ProductKey: string;
        /**
         * 设备的IP地址。
         * @example `10.0.0.1`
         */
        IpAddress: string;
        /**
         * 节点类型，取值：
         * - **0**：设备。设备不能挂载子设备。可以直连物联网平台，也可以作为网关的子设备连接物联网平台。
         * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，和将拓扑关系同步到物联网平台。
         * @example `0`
         */
        NodeType: number;
        /**
         * 设备所在地区（与控制台上的物联网地平台服务地域对应）。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 设备密钥。
         * @example `mz2Canp4GB7qRVf1OYPNtRqB2anu****`
         */
        DeviceSecret: string;
        /**
         * 设备的激活时间，GMT格式。
         * @example `2018-08-06 10:48:41`
         */
        GmtActive: string;
        /**
         * 设备的创建时间，GMT格式。
         * @example `2018-08-06 10:47:50`
         */
        GmtCreate: string;
        /**
         * 设备的备注名称。
         * @example `detectors_in_beijing`
         */
        Nickname: string;
        /**
         * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
         * @example `Q7uOhVRdZRRlDnTLv****00100`
         */
        IotId: string;
    };
}
