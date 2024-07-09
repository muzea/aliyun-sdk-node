export interface DescribeEaisResponse {
    /**
     * 请求ID。
     * @example `1E23D585-BBD8-436F-9615-54CACD67****`
     */
    RequestId: string;
    /**
     * EAIS实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的EAIS实例总数。
     * @example `1`
     */
    TotalCount: number;
    Instances: {
        /**
         * 由Instances组成的数组格式，返回实例的信息。
         */
        Instance: {
            /**
             * EAIS实例状态。
             * @example `InUse`
             */
            Status: string;
            /**
             * EAIS实例创建时间。格式为毫秒级的时间戳。
             * @example `1669945859000`
             */
            CreationTime: string;
            /**
             * 与EAIS实例绑定的ECS或ECI实例名称。
             * @example `test1`
             */
            ClientInstanceName: string;
            /**
             * EAIS实例描述。
             * @example `testDescription`
             */
            Description: string;
            /**
             * EAIS实例ID。
             * @example `eais-sz8t15a7gt7****`
             */
            ElasticAcceleratedInstanceId: string;
            /**
             * EAIS实例名称。
             * @example `testName`
             */
            InstanceName: string;
            /**
             * 与EAIS实例绑定的ECS或ECI实例规格。
             * @example `ecs.g5ne.large`
             */
            ClientInstanceType: string;
            /**
             * 与EAIS实例绑定的ECS或ECI实例ID。
             * @example `i-wz93g6pyat2g****`
             */
            ClientInstanceId: string;
            /**
             * EAIS实例所属可用区。
             * @example `cn-shenzhen-e`
             */
            ZoneId: string;
            /**
             * EAIS实例规格。可能值：
             * - eais.ei-a6.4xlarge
             * - eais.ei-a6.2xlarge
             * - eais.ei-a6.xlarge
             * - eais.ei-a6.large
             * @example `eais.ei-a6.2xlarge`
             */
            InstanceType: string;
            /**
             * 实例所属地域ID。
             * @example `cn-shenzhen`
             */
            RegionId: string;
            Tags: {
                /**
                 * EAIS实例的标签集合。
                 */
                Tag: {
                    /**
                     * EAIS实例的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                    /**
                     * EAIS实例的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                }[];
            };
            /**
             * EAIS实例的类别。可能值：
             * - eais：普通的弹性加速计算实例
             * - jupyter：部署了特定的modelscope镜像并支持Jupyter Notebook功能的弹性加速计算实例
             * @example `jupyter`
             */
            Category: string;
            /**
             * Jupyter Notebook的访问地址。仅当返回参数`Category`的值为`jupyter`时有值，当返回参数`Category`的值为`eais`时，值为空字符串。
             * @example `http://121.41.**.24:8888`
             */
            JupyterUrl: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp1sd131hfmd76r******`
             */
            VSwitchId: string;
            /**
             * 安全组ID。
             * @example `sg-bp1gppir818lx4******`
             */
            SecurityGroupId: string;
            /**
             * EAIS实例启动完成时间。格式为毫秒级的时间戳。
             * @example `1669945889000`
             */
            StartTime: string;
            /**
             * 实例所属的资源组ID。
             * @example `rg-acfmvpuy4a5****`
             */
            ResourceGroupId: string;
        }[];
    };
}
