export interface StartK8sApplicationResponse {
    /**
     * 此次操作的变更流程ID。
     * @example `*********d237-4827-a4f4-ed2ae98de18d`
     */
    ChangeOrderId: string;
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
     * @example `03FD1520-0FD6-436A-****-265318D7****`
     */
    RequestId: string;
}
