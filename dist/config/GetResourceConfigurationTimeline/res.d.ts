export interface GetResourceConfigurationTimelineResponse {
    /**
     * 请求ID。
     * @example `ED9CD1B3-286C-4E05-A765-5E1E0B9BC2AB`
     */
    RequestId: string;
    /**
     * 资源配置时间线。
     */
    ResourceConfigurationTimeline: {
        /**
         * 查询下一页使用的Token。
         * @example `IWBjqMYSy0is7zSMGu16****`
         */
        NextToken: string;
        /**
         * 单次请求返回结果的最大条数。
         * @example `10`
         */
        MaxResults: number;
        /**
         * 资源配置时间线列表。
         */
        ConfigurationList: {
            /**
             * 资源标签。
             * @example `{\"\"hc\"\":[\"\"value2\"\"]}`
             */
            Tags: string;
            /**
             * 资源归属的阿里云账号ID。
             * @example `100931896542****`
             */
            AccountId: number;
            /**
             * 资源变更事件的类型。取值：
             * - DISCOVERED：配置审计新发现的资源事件。
             * - DISCOVERED_REVISED：配置审计新发现的通过周期订正任务产生的资源事件。
             * - MODIFY：修改资源事件。
             * - MODIFY_REVISED：通过周期订正任务产生的修改资源事件。
             * - REMOVE：删除资源事件。
             * > - 配置审计为了保障资源完整，通过周期订正任务对数据进行周期性对齐，产生新发现资源事件，该事件发生的频率较低。
             * > - 通过周期订正任务产生资源事件的时间为任务发现时间，该时间晚于资源的实际变更时间。
             * @example `DISCOVERED`
             */
            ResourceEventType: string;
            /**
             * 可用区。
             * @example `cn-hangzhou-h`
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
            ResourceCreateTime: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 记录资源变更快照的时间戳。单位：毫秒。
             * @example `1624961156000`
             */
            CaptureTime: string;
            /**
             * 触发本次评估的资源变更细节。
             * @example `{\"AccessControlList\":[null,{\"Grant\":\"private\"}],\"ServerSideEncryptionRule\":[null,{\"SSEAlgorithm\":\"None\"}],\"CreationDate\":[null,\"2021-06-29T10:05:12.000Z\"],\"Owner\":[null,{\"DisplayName\":\"100931896542****\",\"ID\":\"100931896542****\"}],\"BucketPolicy\":[null,{\"LogPrefix\":\"\",\"LogBucket\":\"\"}],\"StorageClass\":[null,\"Standard\"],\"ExtranetEndpoint\":[null,\"oss-cn-hangzhou.aliyuncs.com\"],\"DataRedundancyType\":[null,\"LRS\"],\"AllowEmptyReferer\":[null,\"true\"],\"IntranetEndpoint\":[null,\"oss-cn-hangzhou-internal.aliyuncs.com\"],\"Name\":[null,\"new-bucket\"],\"Location\":[null,\"oss-cn-hangzhou\"]}`
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
             * 相关资源的详细信息，包括相关资源所在地域ID、资源关系、资源ID和资源类型。
             * @example `""`
             */
            Relationship: string;
            /**
             * 相关资源的变更项。
             * @example `""`
             */
            RelationshipDiff: string;
        }[];
    };
}
