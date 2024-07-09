export interface StartWhiteBoardRecordingResponse {
    /**
     * 请求ID。
     * @example `FFE713C6-BBA9-457B-AF9D-F6584279A790`
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
     * 返回结果信息。
     */
    Result: {
        /**
         * 白板录制Session的唯一标识符。
         * @example `05157a01cb1d4aca97704fc7a473****`
         */
        RecordId: string;
        /**
         * 录制的开始时间，使用UNIX时间戳表示，单位：毫秒。
         * @example `1622173517031`
         */
        StartTime: number;
    };
}
