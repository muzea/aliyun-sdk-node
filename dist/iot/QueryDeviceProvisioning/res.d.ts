export interface QueryDeviceProvisioningResponse {
    /**
     * - 调用成功时，返回**success**。
     * - 调用失败，返回错误码。详细信息，请参见下文**错误码**。
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
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功后，返回的设备分发结果。
     */
    Data: {
        /**
         * 设备所属的目标地域。
         * @example `ap-southeast-1`
         */
        TargetRegion: string;
        /**
         * 设备所属产品的**ProductKey**。
         * @example `a1ji*****`
         */
        ProductKey: string;
        /**
         * 设备名称。
         * @example `testDevcieBwT3Un`
         */
        DeviceName: string;
        /**
         * 设备所属分发任务的创建时间（毫秒级时间戳）。
         * 如果设备未分发，则返回当前服务器时间戳。
         * @example `1676297683000`
         */
        GmtCreate: number;
        /**
         * 设备所属的目标实例ID。
         * @example `iot-09k****`
         */
        TargetIotInstanceId: string;
        /**
         * 设备所属的源实例ID。
         * @example `iot-6ja****`
         */
        SourceIotInstanceId: string;
        /**
         * 设备当前所属阿里云账号。
         * @example `io****@example.com`
         */
        AliyunUid: string;
        /**
         * 设备所属分发任务的修改时间（毫秒级时间戳）。
         * 如果设备未分发，则返回当前服务器时间戳。
         * @example `1676297683000`
         */
        GmtModified: number;
        /**
         * 设备所属的源地域。
         * @example `cn-shanghai`
         */
        SourceRegion: string;
    };
}
