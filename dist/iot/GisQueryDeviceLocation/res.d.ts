export interface GisQueryDeviceLocationResponse {
    /**
     * 200表示成功。其它表示错误码。错误码详情，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息，如果调用成功，没有ErrorMessage字段。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4C717018-B6D4-5EB0-8495-2A4FF08D58CA`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回设备的位置信息。
     */
    Data: {
        /**
         * 设备所属产品的**productKey**。
         * @example `g3r****Vjta`
         */
        ProductKey: string;
        /**
         * 设备名称。
         * @example `mock_device_name`
         */
        DeviceName: string;
        /**
         * 坐标类型。
         * - **1**：WGS_84，国际经纬度坐标系统。
         * - **2**：GCJ_02，由国测局制定，是对地理位置进行首次加密后的一种坐标系统。
         * @example `1`
         */
        CoordinateSystem: number;
        /**
         * 设备位置的经度。
         * @example `120.0`
         */
        Longitude: number;
        /**
         * 设备所在国家。
         * @example `中国`
         */
        Country: string;
        /**
         * 设备上线的IP。
         * @example `127.0.0.1`
         */
        Ip: string;
        /**
         * 设备所在城市。
         * @example `杭州`
         */
        City: string;
        /**
         * 高德adcode,adcode信息可参考城市编码表。
         * > 城市编码表，更新于2020年7月27日，该表用于查询不同城市对应的编码。仅供查询使用，建议通过地址解析等线上服务实时获取最新编码。暂时不支持台湾省的行政区域编码查询。
         * [下载链接](https://a.amap.com/lbs/static/amap_3dmap_lite/AMap_adcode_citycode.zip)
         * @example `90000`
         */
        Adcode: number;
        /**
         * 设备位置的纬度。
         * @example `30.0`
         */
        Latitude: number;
        /**
         * 设备所在省。
         * @example `浙江省`
         */
        Province: string;
    }[];
}
