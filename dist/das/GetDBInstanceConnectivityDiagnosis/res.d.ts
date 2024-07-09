export interface GetDBInstanceConnectivityDiagnosisResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表。
     */
    Data: {
        /**
         * 实例ID。
         * @example `rm-2ze8g2am97624****`
         */
        instanceId: string;
        /**
         * 是否检测通过：
         * - **true**：检测通过。
         * - **false**：检测不通过。
         * @example `false`
         */
        success: boolean;
        /**
         * 异常类型：
         * - **0**：用户可自助处理的。
         * - **1**：需要联系值班人员处理的。
         * @example `0`
         */
        failType: string;
        /**
         * 异常检测项：
         * - **SRC\_IP\_NOT\_IN\_USER\_WHITELIST**：源IP地址没有配置在用户白名单中。
         * - **VIP\_NOT\_EXISTS**：VIP对应的ALB实例不存在。
         * - **RS\_NOT\_EXISTS**：RS不正常挂载。
         * - **VIP\_TUNNEL\_ID\_NOT\_CONSISTENT**：VPC类型VIP使用的TUNNEL ID与VPC对应的实际TUNNEL ID不一致。
         * - **VIP\_VPC\_CLOUD\_INSTANCE\_NOT\_EXISTS**：VPC类型VIP不存在。
         * - **VIP\_IS\_NOT\_NGLB**：VIP关闭了NGLB模式。
         * - **CUSTINS\_NOT\_ASSOCIATE\_ECS\_SECURITY\_GROUP**：实例没有关联安全组。
         * - **SRC\_IP\_NOT\_IN\_USER\_WHITELIST**：源IP地址没有配置在用户白名单中。
         * - **SRC\_IP\_NOT\_IN\_ADMIN\_WHITELIST**：源IP地址没有配置在管理机白名单中。
         * - **SRC\_IP\_NOT\_IN\_ECS\_SECURITY\_GROUP**：源IP地址没有配置在实例关联的安全组中。
         * - **VPC\_INSTANCE\_IP\_NOT\_WORKING\_STATUS**：VPC IP地址状态异常。
         * @example `SRC_IP_NOT_IN_USER_WHITELIST`
         */
        connCheckErrorCode: string;
        /**
         * 异常检测详情信息。
         * @example `Src ip:47.100.XX.XX not in user whitelist`
         */
        connCheckErrorMessage: string;
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * * **true**：执行成功。
     * * **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
