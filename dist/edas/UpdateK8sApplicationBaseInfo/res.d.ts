export interface UpdateK8sApplicationBaseInfoResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `57F146F6-3C94-****-****-A66EF4B9*****`
     */
    RequestId: string;
    /**
     * 修改结果。
     * @example `success`
     */
    Result: string;
}
