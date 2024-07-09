export interface PauseWhiteBoardRecordingResponse {
    /**
     * 请求ID。
     * @example `B62D36BC-C41E-4436-B74B-2D0DB2E9E338`
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
         * 暂停录制的时间，使用UNIX时间戳表示，单位：秒。
         * @example `1622173522279`
         */
        PauseTime: number;
    };
}
