export interface BindPrometheusGrafanaInstanceResponse {
    /**
     * Id of the request
     * @example `27E653FA-5958-45BE-8AA9-14D884DC****`
     */
    RequestId: string;
    /**
     * 操作是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
}
