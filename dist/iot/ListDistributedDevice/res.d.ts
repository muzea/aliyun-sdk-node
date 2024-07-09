export interface ListDistributedDeviceResponse {
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
     * 调用成功时，返回的设备列表，详情请参见**Info**下信息。
     */
    Data: {
        /**
         * 返回的设备总数。
         * @example `10`
         */
        Total: number;
        Info: {
            /**
             * 设备的信息。
             */
            items: {
                /**
                 * 设备名称。
                 * @example `mydevice`
                 */
                DeviceName: string;
                /**
                 * 接收设备的目标阿里云账号。
                 * @example `io****@example.com`
                 */
                TargetAliyunId: string;
                /**
                 * 分发设备的源阿里云账号ID。
                 * 目前仅支持同一阿里云账号下跨地域和跨实例分发设备，此参数与**TargetUid**值相同。
                 * @example `198***`
                 */
                SourceUid: string;
                /**
                 * 分发任务的修改时间。
                 * @example `1581595942222`
                 */
                GmtModified: number;
                /**
                 * 设备的目标实例ID。
                 * @example `iot-cn-09k***`
                 */
                TargetInstanceId: string;
                /**
                 * 接收设备的目标阿里云账号ID。
                 * 目前仅支持同一阿里云账号下跨地域和跨实例分发设备，此参数与**SourceUid**值相同。
                 * @example `198***`
                 */
                TargetUid: string;
                /**
                 * 设备所属产品的**ProductKey**。
                 * @example `a1BwAGV***`
                 */
                ProductKey: string;
                /**
                 * 设备的目标地域。
                 * @example `cn-shenzhen`
                 */
                TargetRegion: string;
                /**
                 * 设备所属分发任务的创建时间。
                 * @example `1581595942000`
                 */
                GmtCreate: number;
                /**
                 * 设备的目标实例名称。
                 * @example `newinstance`
                 */
                TargetInstanceName: string;
                /**
                 * 设备的源实例名称。
                 * @example `myproInstance`
                 */
                SourceInstanceName: string;
                /**
                 * 设备所属的源地域。
                 * @example `cn-shanghai`
                 */
                SourceRegion: string;
                /**
                 * 设备的源实例ID。
                 * @example `iot-cn-6ja***`
                 */
                SourceInstanceId: string;
            }[];
        };
    };
}
