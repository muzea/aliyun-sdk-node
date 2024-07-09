export interface DescribePurchasedDeviceResponse {
    /**
     * 设备类型。取值：
     * - ipc（摄像头）
     * - platform（平台）
     * - ied（智能设备）
     * @example `ipc`
     */
    Type: string;
    /**
     * 设备子类型。取值：
     * - bullet（枪机）
     * - dome（球机）
     * - ptz（PTZ）
     * @example `dome`
     */
    SubType: string;
    /**
     * 设备厂商。
     * @example `8yd*****qem`
     */
    Vendor: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 设备描述。
     * @example `xxx路口摄像头`
     */
    Description: string;
    /**
     * 设备注册码。
     * @example `12345*****67890`
     */
    RegisterCode: string;
    /**
     * 空间ID。
     * @example `348*****174-cn-qingdao`
     */
    GroupId: string;
    /**
     * 空间名称。
     * @example `测试空间`
     */
    GroupName: string;
    /**
     * 空间所属区域，即服务中心。
     * @example `cn-qingdao`
     */
    Region: string;
    /**
     * 设备名称。
     * @example `test`
     */
    Name: string;
    /**
     * 设备创建时间。
     * @example `2018-12-10T21:00:00Z`
     */
    CreatedTime: string;
    /**
     * 设备ID。
     * @example `33763****77224964-cn-qingdao`
     */
    Id: string;
    /**
     * 订单ID。
     * @example `2117*****0447`
     */
    OrderId: string;
}
