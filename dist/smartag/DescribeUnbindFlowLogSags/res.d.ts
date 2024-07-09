export interface DescribeUnbindFlowLogSagsResponse {
    /**
     * 请求ID。
     * @example `C850C10E-9856-45FF-8640-80288BA467DF`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `20`
     */
    Count: number;
    Sags: {
        /**
         * 智能接入网关实例信息列表。
         */
        Sag: {
            /**
             * 智能接入网关实例的描述信息。
             * @example `desctest`
             */
            Description: string;
            /**
             * 智能接入网关实例ID。
             * @example `sag-tzirqx07bvcngm****`
             */
            SmartAGId: string;
            /**
             * 智能接入网关实例名称。
             * @example `sj1000-yf-01`
             */
            Name: string;
        }[];
    };
}
