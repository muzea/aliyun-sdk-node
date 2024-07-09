export interface QueryHotlineInQueueResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 热线坐席数据。
     * @example `{"n_online_now":10,"n_idle_now":3,"n_resttype_now":3,"n_acw_now":1}`
     */
    Data: string;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
