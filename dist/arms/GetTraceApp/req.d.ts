export interface GetTraceAppRequest {
    /**
     * 应用ID。
     * 在ARMS控制台的**应用监控**>**应用列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `b590lhguqs@d8deedfa9bf****`
     */
    "Pid": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签的键（key）。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签的值（value）。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
