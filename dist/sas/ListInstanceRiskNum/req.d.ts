export interface ListInstanceRiskNumRequest {
    /**
     * 实例列表。
     */
    "InstanceList"?: {
        /**
         * 实例SerialNumber。
         * @example `f2d6e901-1004-4ca8-9dae-53ec04a9****`
         */
        Uuid: string;
        /**
         * 实例ID。
         * @example `i-wz9fdluqx20mp2x7****`
         */
        InstanceId: string;
    }[];
}
