export interface UploadRobotTaskCalledFileResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 机器人呼叫任务的唯一任务ID。
     * 可通过此ID调用[QueryRobotTaskDetail](~~QueryRobotTaskDetail~~)接口查询任务详情。
     * @example `10450****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
}
