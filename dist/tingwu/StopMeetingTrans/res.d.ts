export interface StopMeetingTransResponse {
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
         * 会议状态。
         * NEW：新会议。
         * ONGOING：会议转写中。
         * PAUSED：会议转写暂停。
         * PRE_COMPLETE：会议转写结束后，进行会后智能提取。
         * COMPLETED：会议完成。
         * FAILED：会议转写结束后，会后智能提取失败。
         * INVALID：无效会议。
         * @example `PRE_COMPLETE`
         */
        MeetingStatus: string;
        /**
         * 用户创建会议时设置的会议标识。
         * @example `meeting_123`
         */
        MeetingKey: string;
    };
}
