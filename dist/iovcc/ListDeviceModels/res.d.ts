export interface ListDeviceModelsResponse {
    /**
     * 查询结果列表
     */
    DeviceModels: {
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
        OsPlatform: string;
        /**
         * 设备型号
         * @example `X1`
         */
        DeviceModel: string;
        SecurityChip: string;
        DeviceLogoUrl: string;
        /**
         * 设备型号描述
         * @example `天猫精灵X1`
         */
        Description: string;
        ObjectKey: string;
        /**
         * 表示设备使用性质的描述，0：表示私人设备；1：表示运营或共享设备；
         * @example `私人设备`
         */
        InitUsageTypeDesc: string;
        /**
         * 表示设备使用性质，0：表示私人设备；1：表示运营或共享设备；默认为0
         * @example `0`
         */
        InitUsageType: number;
        /**
         * 设备品牌
         * @example `TmallGenius`
         */
        DeviceBrand: string;
    }[];
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
}
