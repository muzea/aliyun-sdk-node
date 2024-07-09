export interface DescribeEIURangeResponse {
    /**
     * 弹性IO资源的数量列表。
     */
    EIUInfo: {
        /**
         * 弹性IO资源数量的取值范围列表。
         */
        EIURange: number[];
        /**
         * 弹性IO资源数量的建议取值。
         * @example `2`
         */
        DefaultValue: string;
        /**
         * 预留参数不涉及。
         */
        StorageResourceRange: string[];
        /**
         * 预留参数不涉及。
         * @example `none
        `
         */
        MinValue: string;
        /**
         * 预留参数不涉及。
         * @example `none
        `
         */
        MaxValue: string;
        /**
         * 预留参数不涉及。
         * @example `none
        `
         */
        Step: string;
    };
    /**
     * 请求ID。
     * @example `D65A809F-34CE-4550-9BC1-0ED21ET****`
     */
    RequestId: string;
}
