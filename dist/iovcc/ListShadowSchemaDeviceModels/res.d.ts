export interface ListShadowSchemaDeviceModelsResponse {
    /**
     * 返回的机型列表
     */
    ModelList: {
        /**
         * 设备模型ID
         * @example `208`
         */
        DeviceModelId: number;
        /**
         * 硬件类型
         * @example `sn`
         */
        HardwareType: string;
        /**
         * 设备类型
         * @example `car_auto`
         */
        DeviceType: string;
        /**
         * 是否可创建设备ID
         * @example `1`
         */
        CanCreateDeviceId: number;
        /**
         * 项目ID
         * @example `PIC3UA0V`
         */
        ProjectId: string;
        /**
         * 操作系统的平台类型：**android**，**alios**，**linux**，**qnx**。
         * @example `linux`
         */
        OsPlatform: string;
        /**
         * 设备机型
         * @example `model_2nd`
         */
        DeviceModel: string;
        /**
         * 芯片认证加固方案。0：不启用，1：启用。
         * @example `0`
         */
        SecurityChip: number;
        /**
         * 描述信息
         * @example `description`
         */
        Description: string;
        /**
         * 使用性质解释
         * @example `private`
         */
        InitUsageTypeDesc: string;
        /**
         * 使用性质，私营或商业
         * @example `1`
         */
        InitUsageType: number;
        /**
         * 设备品牌
         * @example `brand_2nd`
         */
        DeviceBrand: string;
    }[];
    /**
     * 请求ID
     * @example `4F501674-4FE3-47F9-ADAD-A1875A325798`
     */
    RequestId: string;
}
