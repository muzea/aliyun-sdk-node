export interface DescribeChannelAreaDistributionStatDataRequest {
    /**
     * APP ID。
     * @example `testappid`
     */
    "AppId": string;
    /**
     * 频道ID
     * @example `testid`
     */
    "ChannelId": string;
    /**
     * 创建频道的时间戳，支持查询最近30天的数据。使用UNIX时间戳表示，单位：秒。
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
     * 父级地区名称，例如：深圳市的父级为广东省。参数为空表示世界范围（国家维度）的统计，例如：中国、英国。
     * @example `中国_浙江省`
     */
    "ParentArea"?: string;
}
