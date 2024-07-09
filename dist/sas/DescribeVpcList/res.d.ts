export interface DescribeVpcListResponse {
    /**
     * 查询到的VPC信息的总数量。
     * @example `1`
     */
    Count: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * VPC信息列表。
     */
    VpcList: {
        /**
         * VPC实例的描述。
         * @example `TestVpcNote`
         */
        InstanceDesc: string;
        /**
         * 实例名称。
         * @example `test`
         */
        InstanceName: string;
        /**
         * ECS服务器数量。
         * @example `9`
         */
        EcsCount: number;
        /**
         * 实例的ID。
         * @example `ins_1321_asedb_ada`
         */
        InstanceId: string;
        /**
         * 服务器所在的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
