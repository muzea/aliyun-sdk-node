export interface AddApDeviceRequest {
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 基站设备的Mac地址，可调用DescribeApDevices获取。
     * @example `11:22:33:44:55:66`
     */
    "ApMac": string;
    /**
     * 备注。
     * @example `天猫店的基站设备`
     */
    "Remark"?: string;
    /**
     * 客户端token
     * @example `1*`
     */
    "ClientToken"?: string;
    /**
     * 系统保留字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 设备SN号
     * @example `18****`
     */
    "SerialNumber"?: string;
}
