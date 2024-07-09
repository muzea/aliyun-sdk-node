export interface GetClassDetailResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 获取课堂详情的返回结果。
     */
    Result: {
        /**
         * 课程唯一标识。
         * @example `A55-****-Y34O`
         */
        ClassId: string;
        /**
         * 课程标题，支持中英文，最大长度32个字符。
         * @example `ClassTitle001`
         */
        Title: string;
        /**
         * 创建人用户ID，仅支持英文和数字，最大长度36个字符。
         * @example `as****hs`
         */
        CreateUserId: string;
        /**
         * 创建人用户昵称，支持中英文，最大长度32个字符。
         * @example `nickname001`
         */
        CreateNickname: string;
        /**
         * 课程状态。取值：
         * - 0：未开始
         * - 1：上课中
         * - 2：已下课。
         * @example `2`
         */
        Status: number;
        /**
         * 开始上课时间戳，单位：毫秒。
         * @example `1632794405000`
         */
        StartTime: number;
        /**
         * 下课时间戳，单位：毫秒。
         * @example `1632797405000`
         */
        EndTime: number;
        /**
         * 房间ID。可用于查询房间详情信息，和端上SDK接入时作为参数传入。
         * @example `AE35-****-T95F`
         */
        RoomId: string;
        /**
         * 直播ID。可用于查询直播详情，和端上调用直播相关接口时作为参数传入。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
        /**
         * 连麦会议ID。可用于RTC入会，获取会议详情。
         * @example `fb0f-****-4cb1`
         */
        ConfId: string;
        /**
         * 白板ID。可用于查询白板信息，和端上接入白板SDK时作为参数传入。
         * @example `fgej**2`
         */
        WhiteboardId: string;
        /**
         * 白板录制ID。可用于端上获取白板录制内容并播放。
         * @example `eofg**rt`
         */
        WhiteboardRecordId: string;
    };
}
