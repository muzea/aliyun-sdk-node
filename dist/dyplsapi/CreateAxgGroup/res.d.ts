export interface CreateAxgGroupResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `635C0FDA-9EBC-43D7-B368-9F583C08A126`
     */
    RequestId: string;
    /**
     * 新建的G号码组的ID，即GID。通过接口[BindAXG](~~110249~~)绑定号码时需要输入此参数。
     * @example `200001234****`
     */
    GroupId: number;
}
