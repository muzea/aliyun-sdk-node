export interface GetConferenceResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 返回结果。
     * @example `true`
     */
    Result: {
        /**
         * 连麦唯一标识，由调用CreateConference返回。由字母、数字和短横线（-）组成，长度为36个字符。
         * @example `fb0f-****-4cb1`
         */
        ConferenceId: string;
        /**
         * 会议标题，支持中英文，最大长度128个字符。
         * @example `This is a Title`
         */
        Title: string;
        /**
         * 状态。取值：
         * - **Init**：未开始。
         * - **Start**：连麦中。
         * - **End**：连麦结束。
         * @example `Init`
         */
        Status: string;
        /**
         * 房间唯一标识，最大长度36个字符。
         * @example `AE35-****-T95F`
         */
        RoomId: string;
        /**
         * 创建连麦的用户，在AppId下单独唯一。英文字母、数字、下划线（_）、短横线（-）、小数点（.）和@组成。长度为1到36个字符。
         * @example `as****hs`
         */
        UserId: string;
        /**
         * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
         * @example `7m***q`
         */
        AppId: string;
        /**
         * 连麦创建时间戳，单位：毫秒。
         * @example `1624589848000`
         */
        CreateTime: number;
        /**
         * 录制回放地址，m3u8格式，连麦结束后10秒才会生成。
         * @example `http://xxxx.com/b7f29c02-****-40fd-****-e8d06a8aebb3_merged.m3u8?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
         */
        PlaybackUrl: string;
    };
}
