export interface GetTurnCredentialsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，非必填，不填则默认使用当前RAM账户映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
}
