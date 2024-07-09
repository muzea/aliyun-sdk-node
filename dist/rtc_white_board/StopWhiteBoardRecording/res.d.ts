export interface StopWhiteBoardRecordingResponse {
    /**
     * 请求ID。
     * @example `C4670A7A-CF1F-4223-BA18-6778FFB2A9E1`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    ResponseSuccess: boolean;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMsg: string;
    /**
     * 返回的结果信息。
     */
    Result: {
        /**
         * 结束录制的时间，使用UNIX时间戳表示，单位：秒。
         * @example `1622173532900`
         */
        StopTime: number;
    };
}
