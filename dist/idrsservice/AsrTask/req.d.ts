export interface AsrTaskRequest {
    /**
     * 请求参数
     */
    "Request"?: {
        /**
         * 双录质检应用ID
         * @example `d9ee5df9-20bf-47bf-987a-76b26984b***`
         */
        AppId: string;
        /**
         * mrtc 房间 ID
         * @example `662027426755***`
         */
        RoomId: string;
        /**
         * 时间戳
         * @example `1656388156399`
         */
        Timestamp: number;
        /**
         * 事件类型，开始START，结束END
         * @example `START`
         */
        Event: string;
        /**
         * 任务id
         * @example `d9ee5df9-20bf-47bf-987a-76b26984b***
        `
         */
        AsrTaskId: string;
    };
}
