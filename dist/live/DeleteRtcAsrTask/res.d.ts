export interface DeleteRtcAsrTaskResponse {
    /**
     * 结果描述，为success时成功，失败则返回错误信息。
     * @example `success`
     */
    Description: string;
    /**
     * 网关请求ID。
     * @example `85F94125-B695-1FB8-A7E7-3BE7CE07EF31`
     */
    RequestId: string;
    /**
     * 状态码。返回2000表示成功，返回其他表示异常。
     * @example `2000`
     */
    RetCode: number;
}
