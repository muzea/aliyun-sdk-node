export interface GetJobInstanceListRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间ID，在控制台的**命名空间**页面中获取
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 任务ID
     * @example `92583`
     */
    "JobId"?: number;
    /**
     * 实例状态。包含以下几种状态：
     * 1：等待
     * 3：运行中
     * 4：成功
     * 5：失败
     * 9：拒绝
     * 对应枚举类： com.alibaba.schedulerx.common.domain.InstanceStatus
     * @example `5`
     */
    "Status"?: number;
    /**
     * 开始时间（时间戳）。
     * @example `1684116000000`
     */
    "StartTimestamp"?: number;
    /**
     * 结束时间（时间戳）。
     * @example `1684202400000`
     */
    "EndTimestamp"?: number;
    /**
     * 分页获取数据，分页号，默认是1
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 分页获取数据，分页大小，默认是10
     * @example `10`
     */
    "PageSize"?: number;
}
