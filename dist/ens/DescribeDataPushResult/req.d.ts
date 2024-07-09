export interface DescribeDataPushResultRequest {
    /**
     * 应用ID。
     * @example `e76f8985-7965-41fc-925b-9648bb6bf650`
     */
    "AppId": string;
    /**
     * 数据文件名；属于查询的过滤条件，支持多选，以","号分割；默认查询所有。
     * @example `159828628258496/mirror_file/game-2553efe7-7bf8-40fb-a6e7-09c9c00a992a.tar`
     */
    "DataNames"?: string;
    /**
     * 数据文件版本号；属于查询的过滤条件，支持多选，以","号分割；默认查询所有。
     * @example `90396`
     */
    "DataVersions"?: string;
    /**
     * 查询起始时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-02-15`
     */
    "MinDate"?: string;
    /**
     * 查询终止时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-02-20`
     */
    "MaxDate"?: string;
    /**
     * 页码，起始值为1，导出全部信息时可不传入。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，导出全部时可不传入。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 边缘节点ID列表；属于查询的过滤条件，支持多选，以","号分割；默认查询所有。
     * @example `cn-wuhan-telecom_unicom_cmcc-2,cn-jiaozuo-2`
     */
    "RegionIds"?: string;
}
