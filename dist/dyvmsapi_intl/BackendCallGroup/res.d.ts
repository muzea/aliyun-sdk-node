export interface BackendCallGroupResponse {
    /**
     * 请求ID
     * @example `E50F****-****-****-****-********966F`
     */
    RequestId: string;
    /**
     *
     * 请求状态码。
     * 返回OK代表请求成功。
     * 其他错误码，请参见API错误码。
     * @example `OK`
     */
    Code: string;
    /**
     * 返回信息描述
     * @example `OK`
     */
    Message: string;
    /**
     * 任务ID，可以通过此ID查询任务的详情。
     * @example `550E****-****-****-****-********00A0`
     */
    TaskId: string;
}
