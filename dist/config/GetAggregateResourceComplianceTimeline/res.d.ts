export interface GetAggregateResourceComplianceTimelineResponse {
    /**
     * 请求ID。
     * @example `8D53A78F-1EB8-4264-A554-72F07E34FAE6`
     */
    RequestId: string;
    /**
     * 资源合规时间线。
     */
    ResourceComplianceTimeline: {
        /**
         * 查询下一页使用的Token。
         * @example `5OVS5J4I1/UKTkHV5oNs****`
         */
        NextToken: string;
        /**
         * 单次请求返回结果的最大条数。
         * @example `10`
         */
        MaxResults: number;
        /**
         * 资源合规时间线列表。
         */
        ComplianceList: {
            /**
             * 资源标签。
             * @example `{\"\"hc\"\":[\"\"value2\"\"]}`
             */
            Tags: string;
            /**
             * 资源归属的阿里云账号ID。
             * @example `100931896542****`
             */
            AccountId: string;
            /**
             * 资源可用区。
             * @example `cn-hangzhou-f`
             */
            AvailabilityZone: string;
            /**
             * 资源类型。
             * @example `ACS::OSS::Bucket`
             */
            ResourceType: string;
            /**
             * 创建资源的时间戳。单位：毫秒。
             * @example `1624961112000`
             */
            ResourceCreateTime: number;
            /**
             * 资源归属的地域ID。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 资源关联的规则列表和规则合规详情。
             * @example `{\"Compliance\":{\"complianceType\":\"COMPLIANT\",\"count\":1},\"ConfigRuleList\":[{\"accountId\":100931896542****,\"configRuleId\":\"cr-9524626622af003d****\",\"configRuleArn\":\"acs:config::100931896542****:rule/cr-9524626622af003d****\",\"configRuleName\":\"OSS存储空间ACL禁止公共读写\",\"complianceType\":\"COMPLIANT\",\"riskLevel\":1,\"annotation\":\"\",\"invokingEventMessageType\":\"ScheduledNotification\"}]}`
             */
            Configuration: string;
            /**
             * 记录资源合规评估的时间戳。单位：毫秒。
             * @example `1625200295276`
             */
            CaptureTime: number;
            /**
             * 触发本次评估的资源变更细节。
             * @example `{\"OSS存储空间ACL禁止公共读写\":[{\"accountId\":100931896542****,\"configRuleId\":\"cr-965f626622af003d****\",\"configRuleArn\":\"acs:config::100931896542****:rule/cr-965f626622af003d****\",\"configRuleName\":\"OSS存储空间ACL禁止公共读写\",\"complianceType\":\"COMPLIANT\",\"riskLevel\":1,\"annotation\":\"\",\"invokingEventMessageType\":\"ScheduledNotification\"},{}]}`
             */
            ConfigurationDiff: string;
            /**
             * 资源ID。
             * @example `new-bucket`
             */
            ResourceId: string;
            /**
             * 资源名称。
             * @example `new-bucket`
             */
            ResourceName: string;
            /**
             * 资源状态。资源状态取决于各云服务对其的定义，该参数可能为空。例如：
             * - 当资源类型为ACS::ECS::Instance时，由于ECS实例有状态，因此该参数为Running或Stopped。
             * - 当资源类型为ACS::OSS::Bucket时，由于OSS Bucket无状态，因此该参数为空。
             * @example `null`
             */
            ResourceStatus: string;
        }[];
    };
}
