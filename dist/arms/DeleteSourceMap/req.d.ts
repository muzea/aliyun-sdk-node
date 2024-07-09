export interface DeleteSourceMapRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用ID。
     * 在**ARMS控制台**的**前端监控** > **前端列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为`pid=xxx`。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为`xxx%4074xxx`，则需要将**%40**替换为**@**，即：`xxx@74xxx`。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid": string;
    /**
     * SourceMap的ID标识串列表。
     */
    "FidList": string[];
}
