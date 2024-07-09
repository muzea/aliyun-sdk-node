export interface DescribeUserLayoutAuthorizationResponse {
    /**
     * 防暴力破解的授权结果。取值：
     * - **true**：已授权
     * - **false**：未授权
     * @example `false`
     */
    Authorized: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4A80EE8F-2175-49DA-B8BF-FAE1B3D52E4C`
     */
    RequestId: string;
}
