export interface ListVoicemailsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条目数，只有PageNumber为1才会返回，其他都是0。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 语音信箱记录列表。
         */
        List: {
            /**
             * 话务开始时间。
             * @example `1532448000000，已废弃，请使用StartTime。`
             */
            CdrStartTime: number;
            /**
             * 主叫号码。
             * @example `073xxxx7539`
             */
            Caller: string;
            /**
             * 通话ID。
             * @example `job-125152394144124921`
             */
            ContactId: string;
            /**
             * 留言时长，单位秒。
             * @example `10，已废弃，请使用Duration`
             */
            RecordingDuration: number;
            /**
             * 呼叫中心实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 语音信箱名称。
             * @example `voicemail-test`
             */
            Name: string;
            /**
             * 被叫号码。
             * @example `0533128****`
             */
            Callee: string;
            /**
             * 语音信箱开始时间。
             * @example `1631440860000`
             */
            StartTime: string;
            /**
             * 留言时长，单位秒。
             * @example `16`
             */
            Duration: number;
        }[];
    };
}
