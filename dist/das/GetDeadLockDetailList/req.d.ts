export interface GetDeadLockDetailListRequest {
    /**
     * 数据库实例ID。
     * @example `rm-2ze2016723b32****`
     */
    "InstanceId": string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1701755730292`
     */
    "StartTime": string;
    /**
     * 查询结束时间，格式为Unix时间戳，单位为毫秒。
     * @example `1702360530292`
     */
    "EndTime": string;
    /**
     * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNo"?: string;
    /**
     * 每页最大记录数，默认值为10。
     * @example `5`
     */
    "PageSize"?: string;
    /**
     * 数据库名。传入多个数据库时，各个数据库名称间使用英文逗号（,）进行分隔。
     * @example `testdb1,testdb2
    `
     */
    "DbNameList"?: string;
}
