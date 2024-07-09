export interface GetDrdsDbRdsRelationInfoResponse {
    /**
     * 查询是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `82FD0D9B-9A65-40D3-B1D9-8851B1D4AF75`
     */
    RequestId: string;
    /**
     * 存储实例结构列表，每一项对应一个主存储实例。
     */
    Data: {
        /**
         * 存储实例ID。
         * @example `rm-bp16ad920ndxxxx02`
         */
        RdsInstanceId: string;
        /**
         * 使用中的存储实例类型。
         * @example `RDS`
         */
        UsedInstanceType: string;
        /**
         * 使用中的存储实例ID，对主DRDS实例为主存储实例，对只读DRDS实例为选用的存储实例。
         * @example `rm-bp1l8xi1dd9xxxxbj`
         */
        UsedInstanceId: string;
        ReadOnlyInstanceInfo: string[];
    }[];
}
