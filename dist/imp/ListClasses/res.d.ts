export interface ListClassesResponse {
    /**
     * Id of the request
     * @example `ER52****O9CA`
     */
    RequestId: string;
    /**
     * 查询课程列表返回的结果。
     */
    Result: {
        /**
         * 课程总数。
         * @example `1000`
         */
        TotalCount: number;
        /**
         * 课程总页数。
         * @example `100`
         */
        PageTotal: number;
        /**
         * 是否还有下一页。
         * @example `true`
         */
        HasMore: boolean;
        /**
         * 课程列表信息。
         */
        ClassList: {
            /**
             * 课程唯一标识。
             * @example `AE35****T95F`
             */
            ClassId: string;
            /**
             * 课程标题，支持中英文，最大长度32个字符。
             * @example `PPT制作培训`
             */
            Title: string;
            /**
             * 创建人用户ID，仅支持英文和数字，最大长度36个字符。
             * @example `34***45`
             */
            CreateUserId: string;
            /**
             * 创建人用户昵称，支持中英文，最大长度32个字符。
             * @example `随风`
             */
            CreateNickname: string;
            /**
             * 课堂状态
             * - 0:未开始
             * - 1:上课中
             * - 2:已下课。
             * @example `2`
             */
            Status: number;
            /**
             * 开始上课时间戳，单位：毫秒。
             * @example `16****450`
             */
            StartTime: number;
            /**
             * 下课时间戳，单位：毫秒。
             * @example `16****950`
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
        }[];
    };
}
