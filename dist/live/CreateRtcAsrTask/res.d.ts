export interface CreateRtcAsrTaskResponse {
    /**
     * 结果描述，为success时成功，有错误信息则返回。
     * @example `success`
     */
    Description: string;
    /**
     * 网关请求ID。
     * @example `7FF5417D-06E9-5A2C-9A70-581F6149E6C1`
     */
    RequestId: string;
    /**
     * 状态码。返回2000表示成功，返回其他表示异常。
     * @example `2000`
     */
    RetCode: number;
    /**
     * 生成的任务ID。
     * @example `asr-a6ac15e0-9118-4b4c-9e64-306163a0****`
     */
    TaskId: string;
}
