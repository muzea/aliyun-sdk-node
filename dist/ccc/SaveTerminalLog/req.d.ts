export interface SaveTerminalLogRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 话务通道的CallId，有SIP协议生成，每个SIP通话都有一个CallId。
     * @example `e13c9740-1e37-123b-21b6-00163e352f9`
     */
    "CallId": string;
    /**
     * 通话ID。
     * @example `job-b8b0ca63-330c-4e65-8ae3-9de2c7ce7683`
     */
    "JobId": string;
    /**
     * APP名称。
     * @example `CCCClient`
     */
    "AppName": string;
    /**
     * 数据类型，默认是1。
     * @example `1`
     */
    "DataType": number;
    /**
     * 内容信息。
     * @example `none`
     */
    "Content": string;
    /**
     * 状态信息，true或false。
     * @example `true`
     */
    "Status": string;
    /**
     * 方法请求ID。
     * @example `none`
     */
    "UniqueRequestId": string;
    /**
     * 方法名称。
     * @example `TurnServerTest`
     */
    "MethodName"?: string;
}
