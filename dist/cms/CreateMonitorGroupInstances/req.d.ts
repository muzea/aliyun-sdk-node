export interface CreateMonitorGroupInstancesRequest {
    /**
     * 应用分组ID。
     * @example `3607****`
     */
    "GroupId": string;
    /**
     * 实例列表。
     */
    "Instances": {
        /**
         * 实例名称。
         * @example `test-instance-ecs`
         */
        InstanceName: string;
        /**
         * 云服务名称缩写。
         * 关于如何获取云服务名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
         * @example `ecs`
         */
        Category: string;
        /**
         * 实例ID。
         * @example `i-2ze26xj5wwy12****`
         */
        InstanceId: string;
        /**
         * 实例所在地域。
         * @example ` cn-hangzhou`
         */
        RegionId: string;
    }[];
}
