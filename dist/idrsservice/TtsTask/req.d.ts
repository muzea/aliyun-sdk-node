export interface TtsTaskRequest {
    /**
     * 任务请求参数
     */
    "Request": {
        /**
         * mrtc 房间 ID
         * @example `655259585579***`
         */
        RoomId: string;
        /**
         * TTS问题KEY
         * @example `d9ee5df9-20bf-47bf-987a-76b26984b***`
         */
        Key: string;
        /**
         * 时间戳
         * @example `1662271315039`
         */
        Timestamp: number;
    };
}
