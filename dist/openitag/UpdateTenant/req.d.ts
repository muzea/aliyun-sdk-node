export interface UpdateTenantRequest {
    /**
     * 租户ID。如何查询租户ID，请参见[ListTenants](~~454649~~) 。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 参数。
     */
    "body"?: {
        /**
         * 租户名称。
         * @example `测试任务202208101424`
         */
        TenantName: string;
        /**
         * 租户介绍。
         * @example `demo`
         */
        Description: string;
    };
}
