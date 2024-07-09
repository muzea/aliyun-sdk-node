export interface CheckAccessLogAuthResponse {
    /**
     * DDoS原生防护是否被授权访问阿里云日志服务。取值：
     * - **true**：表示已经获得授权。
     * - **false**：表示没有获得授权。
     * @example `true`
     */
    AccessLogAuth: boolean;
    /**
     * 本次请求的ID。
     * @example `864FE2F4-CB2E-4024-B9EF-D59FD08ABD41`
     */
    RequestId: string;
}
