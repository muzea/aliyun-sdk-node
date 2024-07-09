export interface ReadyForServiceRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，不填默认为当前RAM账户映射的坐席。
     * @example `user-test@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
    /**
     * 上线后是否进入仅外呼模式，选填，默认false。
     * @example `false`
     */
    "OutboundScenario"?: boolean;
}
