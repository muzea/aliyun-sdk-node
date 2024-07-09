export interface ListHotlineRecordResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 热线会话信息
     */
    Data: {
        /**
         * 录音结束时间戳（毫秒）
         * @example `16128694810`
         */
        EndTime: boolean;
        /**
         * 录音开始时间戳（毫秒）
         * @example `16128694110`
         */
        StartTime: boolean;
        /**
         * 连接id
         * @example `100365548`
         */
        ConnectionId: string;
        /**
         * 入呼后，websocket中的acid
         * @example `100365558`
         */
        CallId: string;
        /**
         * 录音文件URL
         * @example `http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com`
         */
        Url: string;
    }[];
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    HttpStatusCode: number;
}
