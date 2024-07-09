export interface ListConnectLogsRequest {
    /**
     * 分页查询每页数据集大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * iovcc项目工程ID。
     * @example `fgsggsgg`
     */
    "ProjectId": string;
    /**
     * dis系统设备ID。
     * @example `fc35429dff9b473c81d7ef5f62ab11dc`
     */
    "DeviceId": string;
    /**
     * 查询日志起始时间，精确到秒。
     * @example `1525684245`
     */
    "StartTime"?: number;
    /**
     * 查询日志截止时间，精确到秒。
     * @example `1525694245`
     */
    "EndTime"?: number;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "PageIndex"?: number;
}
