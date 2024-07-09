export interface CreateEnsServiceRequest {
    /**
     * 需求资源ID。仅支持传入单个ID。
     * @example `ens-20190806****`
     */
    "EnsServiceId": string;
    /**
     * 创建边缘服务预览后的操作。取值：
     * - **Buy**：创建。
     * - **Upgrade**：修改。
     * @example `Buy`
     */
    "OrderType": string;
}
