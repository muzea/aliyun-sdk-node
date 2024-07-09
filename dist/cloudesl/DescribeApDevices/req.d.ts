export interface DescribeApDevicesRequest {
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 基站设备的Mac地址。
     * @example `112233445566`
     */
    "ApMac"?: string;
    /**
     * 设备在线或离线状态 ，true：在线、false：离线。
     * @example `true`
     */
    "Status"?: boolean;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 设备型号。
     * @example `aliyun`
     */
    "Model"?: string;
    /**
     * 设备的激活状态。
     * @example `false`
     */
    "BeActivate"?: boolean;
    /**
     * 系统保留字段，请忽略
     * @example `{}`
     */
    "ExtraParams"?: string;
}
