export interface GetIntegratedServiceStatusResponse {
    /**
     * 请求ID。
     * @example `2E396C84-8D50-5F95-97FA-C0367181BA8A`
     */
    RequestId: string;
    /**
     * 集成的云产品状态。取值：
     * - true：已集成。
     * - false：未集成。
     * @example `true`
     */
    Data: boolean;
    /**
     * 集成的事件类型，多个事件类型用半角逗号（,）分隔。支持的事件类型有：
     * - ConfigurationItemChangeNotification：资源变更事件。
     * - NonCompliantNotification：不合规事件。
     * @example `NonCompliantNotification`
     */
    IntegratedTypes: string;
}
