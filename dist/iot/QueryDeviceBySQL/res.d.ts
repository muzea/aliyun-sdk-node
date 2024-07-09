export interface QueryDeviceBySQLResponse {
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
     * 当SELECT子句为`SELECT count(*) FROM device`时，返回的count计数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的设备信息。
     */
    Data: {
        /**
         * 设备状态。返回值：
         * - **ONLINE**：在线。
         * - **OFFLINE**：离线。
         * - **UNACTIVE**：未激活。
         * - **DISABLE**：已禁用。
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 设备所属产品**ProductKey**。
         * @example `a1BwAGV****	`
         */
        ProductKey: string;
        /**
         * 设备名称。
         * @example `light`
         */
        DeviceName: string;
        /**
         * 设备创建时间，GMT格式。
         * @example `2020-04-04 16:38:17.000`
         */
        GmtCreate: string;
        /**
         * 设备的备注名称。
         * @example `智能灯设备`
         */
        Nickname: string;
        /**
         * 设备激活时间，GMT格式。
         * @example `2020-04-04 16:38:18.607`
         */
        ActiveTime: string;
        /**
         * 设备信息最后一次更新时间，GMT格式。
         * @example `2020-04-04 16:38:19.000`
         */
        GmtModified: string;
        /**
         * 设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
         * @example `Q7uOhVRdZRRlDnTLv****00100	`
         */
        IotId: string;
        /**
         * 设备分组信息。
         */
        Groups: {
            /**
             * 分组ID。
             * @example `a1d21d2fas`
             */
            GroupId: string;
        }[];
        /**
         * 设备标签信息。
         */
        Tags: {
            /**
             * 标签名。
             * @example `Color`
             */
            TagName: string;
            /**
             * 标签值。
             * @example `Red`
             */
            TagValue: string;
        }[];
        /**
         * 设备的模块固件信息列表。
         */
        OTAModules: {
            /**
             * OTA模块名称。
             * @example `SomeSampleModule`
             */
            ModuleName: string;
            /**
             * OTA模块版本号。
             * @example `a1-dads2-dad2`
             */
            FirmwareVersion: string;
        }[];
    }[];
}
