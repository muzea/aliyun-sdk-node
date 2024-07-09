export interface GetRumDataForPageRequest {
    /**
     * 符合SLS Logstore查询语法的查询语句，可参考前端界面此接口的传参。
     * @example `* and app.id: xxxx@586810fbxxxx19f
    `
     */
    "Query"?: string;
    /**
     * 应用ID。
     * @example `iixxxjcnuk@582846f37******`
     */
    "Pid"?: string;
    /**
     * 应用分组。
     * @example `default`
     */
    "AppGroup"?: string;
    /**
     * 查询起始时间的时间戳，精确到秒。
     * @example `1713687833`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间的时间戳，精确到秒。
     * @example `1713774233`
     */
    "EndTime"?: number;
    /**
     * 每页的记录条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 查询分页的当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
