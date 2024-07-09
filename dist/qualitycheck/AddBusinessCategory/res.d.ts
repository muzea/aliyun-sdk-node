export interface AddBusinessCategoryResponse {
    /**
     * 响应码
     * @example `200`
     */
    Code: string;
    /**
     * 响应信息
     * @example `successful`
     */
    Message: string;
    /**
     * 业务类型ID
     * @example `348193421`
     */
    Data: string;
    /**
     * 请求ID
     * @example `76DB5D8C-5BD9-42A7-B527-5AF3A5F83F12`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
}
