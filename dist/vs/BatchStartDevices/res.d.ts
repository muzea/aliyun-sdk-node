export interface BatchStartDevicesResponse {
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
         * 设备ID。
         * @example `32388487****92996-cn-qingdao`
         */
        Id: string;
        /**
         * 设备流列表。
         */
        Streams: {
            /**
             * 流的错误信息。（仅在出错时存在）
             * @example `Stream not found`
             */
            Error: string;
            /**
             * 流名称。
             * @example `310101*****187542126`
             */
            Name: string;
            /**
             * 流ID。
             * @example `3238848****092997-cn-qingdao`
             */
            Id: string;
        }[];
    }[];
}
