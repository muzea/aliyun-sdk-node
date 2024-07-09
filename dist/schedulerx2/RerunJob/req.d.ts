export interface RerunJobRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间ID，在控制台的命名空间页面中获取
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID，在控制台的应用管理页面中获取
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 任务ID
     * @example `123`
     */
    "JobId": number;
    /**
     * 开始日期时间戳，精确到毫秒
     * @example `1645459200000`
     */
    "StartDate": number;
    /**
     * 结束日期时间戳，精确到毫秒
     * @example `1645718400000`
     */
    "EndDate": number;
    /**
     * 数据时间字符串，格式为HH:mm:ss
     * @example `10:00:00`
     */
    "DataTime": string;
}
