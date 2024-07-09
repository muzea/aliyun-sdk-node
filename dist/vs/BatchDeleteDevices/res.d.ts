export interface BatchDeleteDevicesResponse {
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
         * @example `Device not found`
         */
        Error: string;
        /**
         * 设备ID。
         * @example `323884****9092996`
         */
        Id: string;
    }[];
}
