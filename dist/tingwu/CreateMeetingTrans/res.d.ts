export interface CreateMeetingTransResponse {
    /**
     * 请求ID，仅用于联调。
     * @example `35124E1C-AE99-5D6C-A52E-BD689D8D****`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `0`
     */
    Code: string;
    /**
     * 状态说明。
     * @example `Success.`
     */
    Message: string;
    /**
     * 返回对象。
     */
    Data: {
        /**
         * 会议ID。
         * @example `f7de74778d94422283534102dfc0****`
         */
        MeetingId: string;
        /**
         * 会议语音推流地址。
         * @example `wss://tingwu-realtime-cn-beijing.aliyuncs.com/api/ws/v1?mc=****`
         */
        MeetingJoinUrl: string;
        /**
         * 用户创建会议时设置的会议标识。
         * @example `meeting_123`
         */
        MeetingKey: string;
    };
}
