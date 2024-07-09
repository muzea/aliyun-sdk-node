export interface UpdateServiceSafetyLockRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-beijing`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 安全锁级别。
         * - all：锁所有操作。
         * - dangerous：锁危险操作（例如：删除、停止）。
         * - none：不加锁。
         * @example `dangerous`
         */
        Lock: string;
    };
}
