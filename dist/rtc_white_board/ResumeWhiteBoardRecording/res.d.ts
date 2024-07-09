export interface ResumeWhiteBoardRecordingResponse {
    /**
     * 请求ID。
     * @example `ECC1446C-0B06-4A5B-9D5D-0FE60343DA66`
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
         * 恢复录制的时间，使用UNIX时间戳表示，单位：毫秒。
         * @example `1622173527622`
         */
        ResumeTime: number;
    };
}
