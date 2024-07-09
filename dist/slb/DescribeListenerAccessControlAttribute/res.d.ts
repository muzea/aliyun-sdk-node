export interface DescribeListenerAccessControlAttributeResponse {
    /**
     * 访问控制列表。
     * @example `192.168.XX.XX`
     */
    SourceItems: string;
    /**
     * 是否开启访问控制。取值：
     * - **open_white_list**：开启白名单访问控制功能。
     * - **close**：关闭访问控制功能。
     * @example `open_white_list`
     */
    AccessControlStatus: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
}
