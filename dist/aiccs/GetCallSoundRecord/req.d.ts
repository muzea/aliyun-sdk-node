export interface GetCallSoundRecordRequest {
    /**
     * 呼叫创建时间。格式：YYYY-MM-DD hh:mm:ss。
     * 可调用[RobotCall](~~2717996~~)接口，查看调用后的**Response Header**中的**date**参数获取。
     * @example `2021-10-15 08:56:23`
     */
    "CreateTime": string;
    /**
     * 呼叫唯一ID。
     * 可调用[RobotCall](~~2717996~~)接口，查看返回参数的**Data**获取。
     * @example `125165515022^11195613****`
     */
    "CallId": string;
}
