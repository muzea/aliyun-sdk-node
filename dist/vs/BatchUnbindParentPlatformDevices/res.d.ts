export interface BatchUnbindParentPlatformDevicesResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Results: {
        /**
         * 错误信息。
         * > 仅在出错时存在。
         * @example `some error`
         */
        Error: string;
        /**
         * 上级平台ID。
         * @example `361*****212-cn-qingdao`
         */
        ParentPlatformId: string;
        /**
         * 设备ID。
         * @example `348*****380-cn-qingdao`
         */
        DeviceId: string;
    }[];
}
