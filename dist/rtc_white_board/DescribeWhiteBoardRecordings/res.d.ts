export interface DescribeWhiteBoardRecordingsResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
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
         * 文档总个数。
         * @example `10`
         */
        TotalNum: number;
        /**
         * 文档总页数。
         * @example `1`
         */
        TotalPage: number;
        /**
         * 录制信息列表。
         */
        RecordingList: {
            /**
             * 白板应用唯一标识符。
             * @example `7mbj****`
             */
            AppID: string;
            /**
             * 白板文档唯一标识符。
             * @example `4EZlwmRW0gDG****`
             */
            DocKey: string;
            /**
             * 白板录制Session的唯一标识符。
             * @example `8a4556336bc6456b918e8eedbed6****`
             */
            RecordId: string;
            /**
             * 创建白板录制的用户ID。
             * @example `123456`
             */
            UserId: string;
            /**
             * 白板录制操作列表。
             * @example `2020-04-10 12:20:30.567`
             */
            OperateList: string[];
        }[];
    };
}
