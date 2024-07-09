export interface ListDeviceRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 指定显示返回结果中的第几页，最小取值是1。
     * @example `1`
     */
    "Num": number;
    /**
     * 指定返回结果中每页显示的记录数量，最大值是100。
     * @example `2`
     */
    "Size": number;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * IoT数据源组标识。
     * @example `475020454741****`
     */
    "DeviceGroupId": string;
    /**
     * 要查询IoT设备的ID。
     * >  不传则查询该IoT数据源组下的所有IoT设备。
     * @example `183329761572****`
     */
    "IotId"?: string;
}
