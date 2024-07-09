export interface AddVirtualNumberRelationResponse {
    /**
     * 请求状态码。
     * - 返回200代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 返回关联失败号码列表。
     * > 如果全部关联成功，此参数不返回。
     * @example `1321111****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
}
