export interface DescribePurchasedDevicesResponse {
    /**
     * 第几个分页。
     * @example `1`
     */
    PageNum: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 设备总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页总数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 设备列表。
     */
    Devices: {
        /**
         * 按设备类型查询。取值：
         * - ipc（摄像头）
         * - platform（平台）
         * - ied（智能设备）
         * @example `ipc`
         */
        Type: string;
        /**
         * 按设备子类型查询。取值：
         * - bullet（枪机）
         * - dome（球机）
         * - ptz（PTZ）
         * @example `dome`
         */
        SubType: string;
        /**
         * 设备厂商。
         * @example `公司A`
         */
        Vendor: string;
        /**
         * 设备描述。
         * @example `xxx路口摄像头`
         */
        Description: string;
        /**
         * 设备注册码。
         * @example `1234*****67890`
         */
        RegisterCode: string;
        /**
         * 设备所属空间ID。
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
         * @example `xxx路口摄像头`
         */
        Name: string;
        /**
         * 设备创建时间。
         * @example `2019-02-28T17:00:17Z`
         */
        CreatedTime: string;
        /**
         * 设备ID。
         * @example `348*****380-cn-qingdao`
         */
        Id: string;
        /**
         * 订单ID。
         * @example `2117*****0447`
         */
        OrderId: string;
    }[];
}
