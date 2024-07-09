export interface GetUserRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，选填，UserId和Extension任选一个填写即可。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 坐席分机号，选填，UserId和Extension任选一个填写即可。
     * @example `8003****`
     */
    "Extension"?: string;
}
