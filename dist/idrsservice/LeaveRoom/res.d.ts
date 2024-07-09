export interface LeaveRoomResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `8F5F961D-07AA-5293-BFFE-32CDC251***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误消息
     * @example `无`
     */
    Message: string;
    /**
     * 数据
     * @example `无`
     */
    Data: string;
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
}
