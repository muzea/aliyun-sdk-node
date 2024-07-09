export interface DescribeCallRequest {
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
     * 创建频道时间，支持查询最近30天的数据。使用UNIX时间戳表示，单位：秒。
     * > 创建频道时间必须与实际创建时间完全一致（精确到秒）。您可以通过调用接口[DescribeCallList](~~2655884~~)查看创建频道时间（返回的CreatedTS参数）。
     * @example `1614936817`
     */
    "CreatedTs": number;
    /**
     * 释放频道时间，使用UNIX时间戳表示，单位：秒。参数为空表示获取当前时间。
     * > 如果传入的频道释放时间超过真实的释放时间，将返回从创建时间开始到真实释放时间之间的数据。
     * @example `1614936817`
     */
    "DestroyedTs"?: number;
    /**
     * 查询的扩展。取值：USER_DURATION_STAT：用户时长统计数据类型。
     * @example `USER_DURATION_STAT`
     */
    "ExtDataType"?: string;
    /**
     * 是否查询通信体验信息，不传默认是true。
     * @example `false`
     */
    "QueryExpInfo"?: boolean;
}
