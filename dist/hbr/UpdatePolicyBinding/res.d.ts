export interface UpdatePolicyBindingResponse {
    /**
     * 请求是否成功。
     * - true表示成功。
     * - false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6F24C46-54B9-519B-9AB8-A8988D705E67`
     */
    RequestId: string;
}
