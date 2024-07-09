export interface ListInstanceRiskLevelsRequest {
    /**
     * 实例列表
     */
    "InstanceList"?: {
        /**
         * 实例UUID。
         * @example `f2d6e901-1004-4ca8-9dae-53ec04a9****`
         */
        Uuid: string;
        /**
         * 实例ID。
         * @example `i-m5efigezp50l2cmb****`
         */
        InstanceId: string;
    }[];
}
