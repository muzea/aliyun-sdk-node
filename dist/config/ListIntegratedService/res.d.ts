export interface ListIntegratedServiceResponse {
    /**
     * 请求ID。
     * @example `86DB52A5-0C25-505A-96D5-9BAE1EFA00B9`
     */
    RequestId: string;
    /**
     * 可集成服务信息。
     */
    Data: {
        /**
         * 可集成服务名称。
         * @example `云监控`
         */
        ServiceName: string;
        /**
         * 可集成云服务标识。取值：
         * - eventbridge：事件总线。
         * - cms：云监控。
         * - bpstudio：云速搭。
         * @example `cms`
         */
        ServiceCode: string;
        /**
         * 云服务的集成状态。取值：
         * - true：已集成。
         * - false：未集成。
         * @example `true`
         */
        Status: boolean;
        /**
         * 集成的事件类型，多个事件类型用半角逗号（,）分隔。支持的事件类型有：
         * - ConfigurationItemChangeNotification：资源变更事件。
         * - NonCompliantNotification：不合规事件。
         * @example `NonCompliantNotification`
         */
        IntegratedTypes: string;
    }[];
}
