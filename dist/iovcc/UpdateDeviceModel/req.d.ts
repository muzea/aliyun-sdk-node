export interface UpdateDeviceModelRequest {
    /**
     * 设备出厂使用性质。
     * 0表示私人设备，1表示运营或共享设备。
     * @example `0`
     */
    "InitUsageType"?: string;
    /**
     * 设备型号名称。
     * @example `X2`
     */
    "ModelName"?: string;
    /**
     * 设备型号ID。
     * @example `10`
     */
    "Id"?: string;
    /**
     * 品牌名称。
     * @example `ROEWE`
     */
    "BrandName"?: string;
    /**
     * 型号描述。
     * @example `荣威 RX5`
     */
    "Description"?: string;
    /**
     * 设备类型。
     * @example `car_auto`
     */
    "DeviceType"?: string;
    /**
     * 是否允许该型号创建设备ID。
     * @example `true`
     */
    "CanCreateDeviceId"?: string;
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 硬件类型。
     * @example `hardware_id`
     */
    "HardwareType"?: string;
    /**
     * 是否启用芯片ID2认证加固。
     * @example `0`
     */
    "SecurityChip"?: string;
    /**
     * 系统平台。
     * @example `android`
     */
    "OsPlatform"?: string;
    /**
     * OSS存储的key。
     * @example `1151125281886341/375KZRO8TARYBQY7P0E4/2019-04-12/1555062240807.jpg`
     */
    "ObjectKey"?: string;
    /**
     * 设备名称。
     * @example `device`
     */
    "DeviceName"?: string;
}
