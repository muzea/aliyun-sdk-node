export interface RecordFailureRequest {
    /**
     * 实例id
     * @example `9ab43460-c0b9-40e2-8447-48d82c97fc67`
     */
    "InstanceId": string;
    /**
     * 通话id
     * @example `4f21446e-324e-46f2-bf62-7f341fb004ea`
     */
    "CallId": string;
    /**
     * 任务id
     * @example `d2295c0e-3bc3-48a5-9f56-b185db2be909`
     */
    "TaskId": string;
    /**
     * 通话开始时间
     * @example `1579055782000`
     */
    "ActualTime": number;
    /**
     * 主叫号码
     * @example `10086`
     */
    "CallingNumber": string;
    /**
     * 被叫号码
     * @example `135815****`
     */
    "CalledNumber": string;
    /**
     * 失败原因。空号(NotExists)，忙（Busy), 无人接听(NotAnswered)
     * @example `OutOfService`
     */
    "DispositionCode": string;
    /**
     * 外呼未成功时发生的错误编码
     */
    "ExceptionCodes"?: string;
}
