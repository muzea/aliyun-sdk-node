export interface EndConferenceRequest {
    /**
     * 实例ID。
     * @example `9cfad875-6260-4a53-ab6e-b13e3fb31f7d`
     */
    "InstanceId": string;
    /**
     * 需要退出会议的坐席ID，选填，不填默认为当前RAM账户映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 通话ID。
     * @example `job-6538214103685****`
     */
    "JobId": string;
}
