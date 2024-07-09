export interface AddContainerClusterResponse {
    /**
     * 请求ID。
     * @example `1FCBC078-FFCB-542A-8555-566477679720`
     */
    RequestId: string;
    /**
     * 集群token，用于集群中hbr客户端注册使用。
     * @example `eyJhY2NvdW*****VnZpgXQC5A==`
     */
    Token: string;
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
     * 集群ID。
     * @example `cc-00049slr9iuvvv6pp134`
     */
    ClusterId: string;
}
