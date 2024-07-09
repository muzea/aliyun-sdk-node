export interface GetAppJVMConfigRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用ID。
     * 在ARMS控制台的**应用监控**>**应用列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid"?: string;
    /**
     * 起始时间的时间戳，精确到毫秒。
     * @example `1480521600000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * @example `1480607940000`
     */
    "EndTime"?: number;
}
