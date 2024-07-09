export interface GetAggregateDiscoveredResourceResponse {
    /**
     * 请求ID。
     * @example `E4D71ACE-6B0A-46E0-8352-56952378CC7F`
     */
    RequestId: string;
    /**
     * 资源详情。
     */
    DiscoveredResourceDetail: {
        /**
         * 资源可用区。
         * @example `cn-hangzhou-h`
         */
        AvailabilityZone: string;
        /**
         * 资源类型。
         * @example `ACS::ECS::Instance`
         */
        ResourceType: string;
        /**
         * 资源的完整配置信息。
         * @example `{\"ResourceGroupId\":\"\",\"Memory\":4096,\"InstanceChargeType\":\"PostPaid\",\"Cpu\":2,\"OSName\":\"Windows Server  2022 数据中心版 64位中文版\",\"InstanceNetworkType\":\"vpc\",\"InnerIpAddress\":{\"IpAddress\":[]},\"ExpiredTime\":\"2099-12-31T15:59Z\",\"ImageId\":\"win2022_21H2_x64_dtc_zh-cn_40G_alibase_20240110.vhd\",\"EipAddress\":{\"AllocationId\":\"\",\"IpAddress\":\"\",\"InternetChargeType\":\"\"},\"ImageOptions\":{},\"VlanId\":\"\",\"HostName\":\"iZl4i0brknq****\",\"Status\":\"Stopped\",\"HibernationOptions\":{\"Configured\":false},\"MetadataOptions\":{\"HttpTokens\":\"\",\"HttpEndpoint\":\"\"},\"InstanceId\":\"i-bp12g4xbl4i0brkn****\",\"StoppedMode\":\"KeepCharging\",\"CpuOptions\":{\"ThreadsPerCore\":2,\"Numa\":\"ON\",\"CoreCount\":1},\"StartTime\":\"2024-02-29T07:08Z\",\"DeletionProtection\":false,\"VpcAttributes\":{\"PrivateIpAddress\":{\"IpAddress\":[\"172.16.XX.XX\"]},\"VpcId\":\"vpc-bp1wjaw8t272wwmkg****\",\"VSwitchId\":\"vsw-bp103i8xzww5132ul****\",\"NatIpAddress\":\"\"},\"SecurityGroupIds\":{\"SecurityGroupId\":[\"sg-bp1h96fz9fagaegp****\"]},\"InternetChargeType\":\"PayByTraffic\",\"InstanceName\":\"test123\",\"DeploymentSetId\":\"\",\"InternetMaxBandwidthOut\":5,\"SerialNumber\":\"6764f567-28fb-4a39-bfc3-48404995****\",\"OSType\":\"windows\",\"CreationTime\":\"2024-02-29T07:08Z\",\"AutoReleaseTime\":\"\",\"Description\":\"\",\"InstanceTypeFamily\":\"ecs.c7\",\"DedicatedInstanceAttribute\":{\"Tenancy\":\"\",\"Affinity\":\"\"},\"PublicIpAddress\":{\"IpAddress\":[\"47.98.XX.XX\"]},\"GPUSpec\":\"\",\"NetworkInterfaces\":{\"NetworkInterface\":[{\"Type\":\"Primary\",\"PrimaryIpAddress\":\"172.16.XX.XX\",\"MacAddress\":\"00:16:3e:0c:**:**\",\"NetworkInterfaceId\":\"eni-bp19uj35v8won3x9****\",\"PrivateIpSets\":{\"PrivateIpSet\":[{\"PrivateIpAddress\":\"172.16.XX.XX\",\"Primary\":true}]}}]},\"SpotPriceLimit\":0.0,\"SaleCycle\":\"\",\"DeviceAvailable\":true,\"InstanceType\":\"ecs.c7.large\",\"OSNameEn\":\"Windows Server  2022 DataCenter Edition 64bit Chinese Edition\",\"SpotStrategy\":\"NoSpot\",\"IoOptimized\":true,\"ZoneId\":\"cn-hangzhou-b\",\"ClusterId\":\"\",\"EcsCapacityReservationAttr\":{\"CapacityReservationPreference\":\"\",\"CapacityReservationId\":\"\"},\"DedicatedHostAttribute\":{\"DedicatedHostId\":\"\",\"DedicatedHostName\":\"\",\"DedicatedHostClusterId\":\"\"},\"GPUAmount\":0,\"OperationLocks\":{\"LockReason\":[]},\"InternetMaxBandwidthIn\":2000,\"Recyclable\":false,\"RegionId\":\"cn-hangzhou\",\"CreditSpecification\":\"\"}`
         */
        Configuration: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 资源创建时间戳。
         * @example `1624961112000`
         */
        ResourceCreationTime: number;
        /**
         * 资源标签。
         * @example `{\"\"hc\"\":[\"\"value2\"\"]}`
         */
        Tags: string;
        /**
         * 资源拥有者的阿里云账号ID。
         * @example `100931896542****`
         */
        AccountId: number;
        /**
         * 资源ID。
         * @example `i-bp12g4xbl4i0brkn****`
         */
        ResourceId: string;
        /**
         * 资源删除状态。取值：
         * - 1：未删除。
         * - 0：已删除。
         * @example `1`
         */
        ResourceDeleted: number;
        /**
         * 资源名称。
         * @example `test123`
         */
        ResourceName: string;
        /**
         * 资源状态。资源的状态取决于各云服务对其的定义，该参数可能为空。例如：
         * - 当资源类型为ACS::ECS::Instance时，由于ECS实例有状态，因此该参数为Running或Stopped。
         * - 当资源类型为ACS::OSS::Bucket时，由于OSS Bucket无状态，因此该参数为空。
         * @example `Stopped`
         */
        ResourceStatus: string;
        ComplianceType: string;
    };
}
