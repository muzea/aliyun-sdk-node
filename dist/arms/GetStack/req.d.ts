export interface GetStackRequest {
    /**
     * 调用链ID。您可以在ARMS控制台的**调用链查询**页面获取。
     * @example `0a5800611641470044457853******`
     */
    "TraceID": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 接口ID，您可以通过调用**GetTrace**接口获取。
     * @example `0.1`
     */
    "RpcID": string;
    /**
     * 应用ID。
     * 在ARMS控制台的**应用监控**>**应用列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `eb4zdose6v@36bab313a******`
     */
    "Pid"?: string;
    /**
     * 调用方法的入口时间戳。
     * @example `1653555396`
     */
    "StartTime"?: number;
    /**
     * 调用方法的结束时间戳。
     * @example `1653641800`
     */
    "EndTime"?: number;
}
