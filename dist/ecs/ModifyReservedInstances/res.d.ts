export interface ModifyReservedInstancesResponse {
    /**
     * 请求ID。
     * @example `ED9E4A5F-FF4D-4C96-BE80-6B4227060DD7`
     */
    RequestId: string;
    ReservedInstanceIdSets: {
        /**
         * 预留实例券ID列表。
         */
        ReservedInstanceId: string[];
    };
}
