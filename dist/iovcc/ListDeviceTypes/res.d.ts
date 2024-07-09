export interface ListDeviceTypesResponse {
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 返回内容
     */
    DeviceTypes: {
        /**
         * 设备类型标识
         * @example `car_auto`
         */
        DeviceType: string;
        /**
         * 设备类型名称
         * @example `智能汽车`
         */
        Name: string;
    }[];
}
