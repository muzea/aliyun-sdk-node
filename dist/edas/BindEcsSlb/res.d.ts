export interface BindEcsSlbResponse {
    /**
     * 此次变更对应的变更记录ID
     * @example `cd65b247-****-475b-ad4b-7039040d625c`
     */
    ChangeOrderId: string;
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `03FD1520-0FD6-436A-****-265318D7****`
     */
    RequestId: string;
}
