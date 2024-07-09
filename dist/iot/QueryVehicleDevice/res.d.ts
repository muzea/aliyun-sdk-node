export interface QueryVehicleDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见下文**错误码**。
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
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
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
     * 返回的设备信息。
     */
    Data: {
        /**
         * 设备所属云网关产品的**ProductKey**。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 设备更新时间的时间戳。单位为毫秒。
         * @example `1657062301656`
         */
        ModifiedTime: number;
        /**
         * 设备名称。
         * @example `light`
         */
        DeviceName: string;
        /**
         * 云网关协议类型。取值：
         * - **gb32960**：GB/T 32960协议。
         * - **jt808**：JT/T 808协议。
         * - **sl651**：SL 651协议。
         * @example `gb32960`
         */
        Protocol: string;
        /**
         * 设备创建时间的时间戳。单位为毫秒。
         * @example `1557062301656`
         */
        CreateTime: number;
        /**
         * 物联网平台为该设备颁发的ID，设备的唯一标识符。
         * @example `dm0001`
         */
        IotId: string;
        /**
         * 仅JT/T 808协议云网关设备返回的注册认证信息。
         */
        JtProtocolDeviceData: {
            /**
             * 设备状态。可取值：
             * - **create**：设备已创建。
             * - **register**：设备已注册。
             * - **unregister**：设备已注销。
             * @example `create`
             */
            Status: string;
            /**
             * 设备注册时间的时间戳。单位为毫秒。
             * @example `1517062301656`
             */
            RegisterTime: string;
            /**
             * 设备认证的鉴权码。
             * @example `*******`
             */
            AuthCode: string;
            /**
             * 车牌颜色。取值符合标准JT/T 808协议要求即可。详细说明，请参见[JT/T 808的2019版本协议](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/file-manage-files/zh-CN/20221220/mdsf/JT-T%20808-2019.pdf)。
             * @example `1`
             */
            VehicleColour: string;
            /**
             * 设备ID。
             * @example `di0001`
             */
            DeviceId: string;
            /**
             * 车牌号。
             * @example `浙A****`
             */
            VehicleNumber: string;
            /**
             * 设备注册的城市。
             * @example `杭州`
             */
            City: string;
            /**
             * 设备型号。
             * @example `dm0001`
             */
            DeviceModel: string;
            /**
             * 设备厂商ID。
             * @example `mf0001`
             */
            Manufacturer: string;
            /**
             * 设备注册的省。
             * @example `浙江`
             */
            Province: string;
        };
    };
}
