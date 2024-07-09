export interface GetOverviewRequest {
    /**
     * 区域Region ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间UID
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace"?: string;
    /**
     * 命名空间来源，特殊第三方才需要填写
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId"?: string;
    /**
     * 可选项
     * query:查询区间数据
     * query_range:查询区间时许数据
     * @example `query`
     */
    "Operate": string;
    /**
     * 可选项
     * 0:任务类基础信息
     * 1:任务运行信息
     * @example `0`
     */
    "MetricType": number;
    /**
     * 数据起始时间戳（单位：秒），如：1684166400
     * @example `1684166400`
     */
    "StartTime": number;
    /**
     * 数据结束时间戳（单位：秒），如：1684166400
     * 不填默认为当前时间
     * @example `1684166400`
     */
    "EndTime"?: number;
}
