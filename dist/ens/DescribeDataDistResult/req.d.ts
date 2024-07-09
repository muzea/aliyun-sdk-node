export interface DescribeDataDistResultRequest {
    /**
     * 应用ID。
     * @example `e76f8985-7965-41fc-925b-9648bb6bf650`
     */
    "AppId": string;
    /**
     * 数据文件名；属于查询的过滤条件，支持多选，以","号分割；默认查询所有。
     * @example `cloudgame-shanghai/deploy_app/20220215/1644895216305ACG_M21B-ota-1.1.2-D-0215.0628_V1_0002-pre-weiduan.zip`
     */
    "DataNames"?: string;
    /**
     * 数据文件版本号；属于查询的过滤条件，支持多选，以","号分割；默认查询所有。
     * @example `4885`
     */
    "DataVersions"?: string;
    /**
     * 边缘实例ID列表；属于查询的过滤条件，支持多选，以","号分割；默认查询所有。
     * @example `i-7ecpqvkicnchxccozrp,i-6ecpqvkicnchxccozrp`
     */
    "InstanceIds"?: string;
    /**
     * 查询起始时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-01-02`
     */
    "MinDate"?: string;
    /**
     * 查询终止时间，格式"2006-01-02"；默认无时间限制。
     * @example `2022-02-01`
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
     * ENS节点ID列表。
     */
    "EnsRegionIds"?: string[];
}
