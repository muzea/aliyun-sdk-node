export interface DescribeDeviceModelResponse {
    /**
     * 返回内容。
     */
    DeviceModel: {
        /**
         * 型号ID
         * @example `10`
         */
        DeviceModelId: number;
        /**
         * 设备ID生成依据
         * @example `sn`
         */
        HardwareType: string;
        /**
         * 设备名称
         * @example `device`
         */
        DeviceName: string;
        /**
         * 设备类型
         * @example `智能家居`
         */
        DeviceType: string;
        /**
         * 是否可生成设备ID
         * @example `1`
         */
        CanCreateDeviceId: number;
        /**
         * 项目ID
         * @example `projectTest`
         */
        ProjectId: string;
        /**
         * 系统平台
         * @example `android`
         */
        OsPlatform: string;
        /**
         * 设备型号名称
         * @example `ROEWE RX5`
         */
        DeviceModel: string;
        /**
         * 是否启用芯片ID2认证加固
         * @example `0`
         */
        SecurityChip: string;
        /**
         * 设备LogoURL
         * @example `http://dis-cdn.aicc.aliyun.com/1151125281886341/375KZRO8TARYBQY7P0E4/2019-04-12/1555062240807.jpg`
         */
        DeviceLogoUrl: string;
        /**
         * 设备型号描述
         * @example `荣威RX5`
         */
        Description: string;
        /**
         * OSS存储的key
         * @example `1151125281886341/375KZRO8TARYBQY7P0E4/2019-04-12/1555062240807.jpg`
         */
        ObjectKey: string;
        /**
         * 设备使用性质描述。
         * 0表示私人设备，1表示运营或共享设备。
         * @example `0`
         */
        InitUsageTypeDesc: string;
        /**
         * 设备使用性质。
         * 0表示private，1表示business。默认为**0**。
         * @example `0`
         */
        InitUsageType: number;
        /**
         * 设备品牌名称
         * @example `ROEWE`
         */
        DeviceBrand: string;
    };
    /**
     * 请求ID。
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
}
