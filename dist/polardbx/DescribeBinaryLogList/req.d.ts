export interface DescribeBinaryLogListRequest {
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页获取当前binlog列表时，需填写当前页码，默认从第1页开始。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页获取binlog数量，默认填写30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 当前实例名称。
     * @example `pxc-hz1fds`
     */
    "DBInstanceName": string;
    /**
     * 查询binlog列表开始时间。
     * @example `2021-09-09 10:27:46`
     */
    "StartTime": string;
    /**
     * 查询binlog列表结束时间。
     * @example `2021-11-09 10:27:46`
     */
    "EndTime": string;
    "InstanceName"?: string;
}
