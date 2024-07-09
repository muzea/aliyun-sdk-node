export interface DescribePubUserListBySubUserRequest {
    /**
     * APP ID。
     * @example `testappid`
     */
    "AppId": string;
    /**
     * 频道ID。
     * @example `testid`
     */
    "ChannelId": string;
    /**
     * 频道创建时间，支持查询最近30天的数据。使用UNIX时间戳表示，单位：秒。
     * @example `1614936817`
     */
    "CreatedTs": number;
    /**
     * 频道释放时间，使用UNIX时间戳表示，单位：秒。参数为空表示获取当前时间。
     * > 如果传入的频道释放时间超过真实的释放时间，将返回从创建时间开始到真实释放时间之间的数据。
     * @example `1614936817`
     */
    "DestroyedTs"?: number;
    /**
     * 订阅端用户ID。
     * @example `testuserid`
     */
    "SubUserId": string;
}
