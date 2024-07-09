export interface ListRobotCallDialogRequest {
    /**
     * 呼叫唯一ID。
     * 可调用[RobotCall](~~2717996~~)接口，查看返回参数的**Data**获取。
     * @example `125165515022^11195613****`
     */
    "CallId": string;
    /**
     * 创建时间。格式：YYYY-MM-DD hh:mm:ss，需要精确到时间。
     * 可调用[RobotCall](~~2717996~~)接口，查看调用后的**Response Header**中的**date**参数获取。
     * @example `2021-05-20 00:00:00`
     */
    "CreateTime": string;
}
