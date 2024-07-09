export interface DescribeInstanceAutoRenewAttributeResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    InstanceRenewAttributes: {
        /**
         * 实例的续费状态。
         */
        InstanceRenewAttribute: {
            /**
             * 续费状态。
             * - **true**：自动续费类型。
             * - **false**：非自动续费类型。
             * @example `false`
             */
            AutoRenewal: boolean;
            /**
             * 自动续费时长，单位：月。
             * @example `0`
             */
            Duration: string;
            /**
             * 实例ID。
             * @example `i-5ci7l7k1m9m2zmhp4iw3o****`
             */
            InstanceId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `4DD66F05-3116-4BAA-B588-52EB2E7F431D`
     */
    RequestId: string;
}
