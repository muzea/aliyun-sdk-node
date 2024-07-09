export interface CreateRoomRealTimeStreamAddressRequest {
    /**
     * 互动直播应用ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 要加入的房间ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourChannelId`
     */
    "ChannelId": string;
    /**
     * 向RTMP地址推流的用户ID，不能和房间中的其他用户ID重复。由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `rtmp-uuid`
     */
    "UserId": string;
    /**
     * RTMP流在房间中显示的名称，最大40字符。
     * @example `rtmp-dname`
     */
    "DisplayName": string;
    /**
     * RTMP地址有效时长，单位：秒，默认值36000，即10小时。
     * @example `43200`
     */
    "ExpireTime"?: number;
}
