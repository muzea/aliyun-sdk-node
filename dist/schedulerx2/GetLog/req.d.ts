export interface GetLogRequest {
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
    "JobId"?: string;
    /**
     * 任务实例ID
     * @example `123456`
     */
    "JobInstanceId"?: string;
    /**
     * 开始时间戳，精确到毫秒
     * ><notice>开始时间戳不设置，默认取当前时间的30分钟之前></notice>
     * @example `1675739364000`
     */
    "StartTimestamp"?: number;
    /**
     * 结束时间戳，精确到毫秒><notice>结束时间戳不设置，默认取当前时间></notice>
     * @example `1675739484000`
     */
    "EndTimestamp"?: number;
    /**
     * 关键字
     * @example `ERROR`
     */
    "Keyword"?: string;
    /**
     * 行数，最大不超过200行
     * @example `50`
     */
    "Line"?: number;
    /**
     * 偏移多少行，可以作为分页查询
     * @example `0`
     */
    "Offset"?: number;
    /**
     * 是否逆序，默认逆序
     * @example `true`
     */
    "Reverse"?: boolean;
}
