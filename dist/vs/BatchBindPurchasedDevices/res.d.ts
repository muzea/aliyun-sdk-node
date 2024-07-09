export interface BatchBindPurchasedDevicesResponse {
    /**
     * 该条任务请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Results: {
        /**
         * 设备错误信息。（仅在出错时存在）
         * @example `some error`
         */
        Error: string;
        /**
         * 空间ID。
         * @example `238*****380-cn-qingdao`
         */
        GroupId: string;
        /**
         * 设备ID
         * @example `348*****380-cn-qingdao`
         */
        DeviceId: string;
        /**
         * 地域。
         * @example `cn-qingdao`
         */
        Region: string;
    }[];
}
