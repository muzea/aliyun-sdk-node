export interface SyncDtsStatusRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 是否限制实例执行变配操作，取值：
     * * **0**：不限制。
     * * **1**：限制，执行变配时将提示用户。
     * @example `0`
     */
    "Status"?: string;
    /**
     * DTS的实例ID，您可以登录[DTS控制台](https://dts.console.aliyun.com/)查看。
     * > 由于Redis实例可能同时处于多个DTS的迁移或同步任务中时，当您需要取消对Redis实例的变配限制时，您可以传入本参数以避免重复调用本接口。
     * @example ` dtss0611o8vv90****`
     */
    "TaskId"?: string;
}
