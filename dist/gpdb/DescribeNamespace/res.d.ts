export interface DescribeNamespaceResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 命名空间信息。
     */
    NamespaceInfo: any;
    /**
     * 命名空间。
     * @example `mynamespace`
     */
    Namespace: string;
    /**
     * 实例ID。
     * @example `gp-bp152460513z****`
     */
    DBInstanceId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * API执行状态，取值如下：
     * - **success**：执行成功。
     * - **fail**：执行失败。
     * @example `success`
     */
    Status: string;
    /**
     * 返回信息。
     * @example `Successful`
     */
    Message: string;
}
