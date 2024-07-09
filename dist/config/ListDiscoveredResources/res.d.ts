export interface ListDiscoveredResourcesResponse {
    /**
     * 资源列表。
     */
    DiscoveredResourceProfiles: {
        /**
         * 资源列表详情。
         */
        DiscoveredResourceProfileList: {
            /**
             * 资源类型。
             * @example `ACS::ECS::NetworkInterface`
             */
            ResourceType: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 资源创建时间戳。单位：毫秒。
             * @example `1618675206000`
             */
            ResourceCreationTime: number;
            /**
             * 资源标签。
             * @example `{\"key1\":[\"value2\"]}`
             */
            Tags: string;
            /**
             * 资源拥有者的阿里云账号ID。
             * @example `161259599160****`
             */
            AccountId: number;
            /**
             * 资源ID。
             * @example `eni-hp31cqoba96jagtz****`
             */
            ResourceId: string;
            /**
             * 资源名称。
             * @example `Cloud Firewall`
             */
            ResourceName: string;
            /**
             * 资源状态。取值：
             * - 0：已删除。
             * - 1：保有中。
             * @example `1`
             */
            ResourceDeleted: number;
            /**
             * 资源状态。资源的状态取决于各云服务对其的定义，该参数可能为空。例如：
             * - 当资源类型为ACS::ECS::Instance时，由于ECS实例有状态，因此该参数为Running或Stopped。
             * - 当资源类型为ACS::OSS::Bucket时，由于OSS Bucket无状态，因此该参数为空。
             * @example `InUse`
             */
            ResourceStatus: string;
            /**
             * 资源变更的版本。
             * @example `1`
             */
            Version: number;
            /**
             * 可用区。
             * @example `cn-hangzhou-h`
             */
            AvailabilityZone: string;
        }[];
        /**
         * 查询下一页使用的Token。
         * @example `IWBjqMYSy0is7zSMGu16****`
         */
        NextToken: string;
        /**
         * 每页的最大记录数。
         * @example `10`
         */
        MaxResults: number;
        /**
         * 资源总数。
         * @example `8`
         */
        TotalCount: number;
    };
    /**
     * 请求ID。
     * @example `C7817373-78CB-4F9A-8AFA-E7A88E9D64A2`
     */
    RequestId: string;
}
