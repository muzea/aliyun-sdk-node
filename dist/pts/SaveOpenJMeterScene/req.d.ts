export interface SaveOpenJMeterSceneRequest {
    /**
     * 场景详情。
     */
    "OpenJMeterScene": {
        /**
         * 场景名。
         * @example `test`
         */
        SceneName: string;
        /**
         * 关联的环境ID。
         * @example `I8PZIH`
         */
        EnvironmentId: string;
        /**
         * jmeter插件标签。
         * @example `test`
         */
        JmeterPluginLabel: string;
        /**
         * 测试文件。
         * @example `test.jmx`
         */
        TestFile: string;
        /**
         * 文件列表。
         */
        FileList: {
            /**
             * 文件名。
             * @example `test.jmx`
             */
            FileName: string;
            /**
             * 文件在公网可访问的OSS地址。
             * >目前仅支持上海地域。
             * @example `https://test.cn-shanghai.aliyuncs.com/test.jmx`
             */
            FileOssAddress: string;
            /**
             * 文件的MD5。
             * @example `DA70F97A74D76B6A3BEF9CC8AE0D89EB`
             */
            Md5: string;
            /**
             * 文件ID。
             * @example `61232`
             */
            FileId: number;
            /**
             * 是否切分，仅针对CSV有效。
             * @example `false`
             */
            SplitCsv: boolean;
            /**
             * 文件大小，文件总大小不超过500 M，单位Byte。
             * @example `28880`
             */
            FileSize: number;
            /**
             * 文件标签。
             * @example `空`
             */
            Tags: string;
        }[];
        /**
         * JMeter属性。
         */
        JMeterProperties: {
            /**
             * 属性名。
             * @example `https.sessioncontext.shared`
             */
            Name: string;
            /**
             * 属性值。
             * @example `false`
             */
            Value: string;
        }[];
        /**
         * 预热时间，单位秒。
         * @example `600`
         */
        RampUp: number;
        /**
         * 预热阶段。
         * @example `3`
         */
        Steps: number;
        /**
         * 最大并发，并发上限由用户的资源包决定。
         * @example `1000`
         */
        Concurrency: number;
        /**
         * 压测持续时间，最长压测时间不超过一天，单位秒，取值范围为 60~86400。
         * @example `600`
         */
        Duration: number;
        /**
         * 场景ID。没有传场景ID表示新建场景，传场景ID表示更新场景。
         * @example `DYYPZIH`
         */
        SceneId: string;
        /**
         * 是否为VPC测试。默认为false，表示公网测试。当此值为true时，VPC相关配置才会生效。
         * @example `true`
         */
        IsVpcTest: boolean;
        /**
         * DNS配置。
         */
        DnsCacheConfig: {
            /**
             * 每次循环是否清空缓存。
             * @example `true`
             */
            ClearCacheEachIteration: boolean;
            /**
             * DNS服务器。
             */
            DnsServers: string[];
            /**
             * 域名绑定。
             */
            HostTable: any;
        };
        /**
         * 施压机数量。
         * @example `2`
         */
        AgentCount: number;
        /**
         * 地域ID，在VPC压测时配置。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * VPC的ID，在VPC压测时配置。
         * @example `vpc-2ze2sahjdgahsebjkqhf4pyj`
         */
        VpcId: string;
        /**
         * 安全组ID，在VPC压测时配置。
         * @example `sg-2zeid0dd7bhahsgdahspaly`
         */
        SecurityGroupId: string;
        /**
         * 交换机ID，在VPC压测时配置。
         * @example `vsw-2zehsgdhsahw1r`
         */
        VSwitchId: string;
        /**
         * JMeter中的同步定时器类型。
         * @example `GLOBAL`
         */
        SyncTimerType: string;
        /**
         * JMeter中的固定吞吐量定时器类型。
         * @example `GLOBAL`
         */
        ConstantThroughputTimerType: string;
        /**
         * 施压模型。
         * @example `CONCURRENCY`
         */
        Mode: string;
        /**
         * 起始的RPS，RPS模式下生效。
         * @example `10`
         */
        StartRps: number;
        /**
         * 最大RPS，RPS模式下生效。
         * @example `100`
         */
        MaxRps: number;
        /**
         * 起始并发，并发模式下生效。
         * @example `10`
         */
        StartConcurrency: number;
        /**
         * 施压机地域定制
         */
        RegionalCondition: {
            /**
             * 地域id
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 施压机数量，所有地域施压机数量之和需要等于场景的AgentCount值。
             * @example `1`
             */
            Amount: number;
        }[];
    };
}
