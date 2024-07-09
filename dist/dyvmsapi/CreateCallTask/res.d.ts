export interface CreateCallTaskResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 任务ID。使用此任务ID，通过[ExecuteCallTask](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-executecalltask?spm=a2c4g.11186623.0.0.2fb55105AJKYdF)接口执行通话任务。
     * @example `18390**`
     */
    Data: number;
    /**
     * 请求ID。
     * @example `ED815433-724A-4357-9991-A54AD2FF09FD`
     */
    RequestId: string;
}
