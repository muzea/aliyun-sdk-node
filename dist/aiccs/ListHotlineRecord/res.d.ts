export interface ListHotlineRecordResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 热线会话信息。
     */
    Data: {
        /**
         * 录音结束时间戳。单位：毫秒。
         * @example `16128694810`
         */
        EndTime: number;
        /**
         * 录音开始时间戳。单位：毫秒。
         * @example `16128694110`
         */
        StartTime: number;
        /**
         * 连接ID。
         * @example `100365548`
         */
        ConnectionId: string;
        /**
         * 会话ID。入呼后，websocket中的acid。
         * @example `100365558`
         */
        CallId: string;
        /**
         * 录音文件URL。
         * @example `http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com`
         */
        Url: string;
    }[];
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
