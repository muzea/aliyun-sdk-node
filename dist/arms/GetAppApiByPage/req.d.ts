export interface GetAppApiByPageRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 开始时间的时间戳，精确到毫秒。
     * @example `1600063200000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * @example `1600066800000`
     */
    "EndTime"?: number;
    /**
     * 查询结果的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 此参数已不支持使用。查询结果的每页项目数量。默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据片的时间间隔，单位为毫秒，最小值为60000，最大值为2147483647。
     * @example `60000`
     */
    "IntervalMills"?: number;
    /**
     * 应用ID。
     * 在ARMS控制台的**应用监控**>**应用列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `a2n80plglh@745eddxxx`
     */
    "PId": string;
}
