export interface GetOpenJMeterSceneResponse {
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 场景详情。
     */
    Scene: {
        /**
         * 场景名。
         * @example `test`
         */
        SceneName: string;
        /**
         * 场景ID。
         * @example `DYYPZIH`
         */
        SceneId: string;
        /**
         * 环境ID。
         * @example `EEDT7`
         */
        EnvironmentId: string;
        /**
         * 基本信息。
         */
        BaseInfo: {
            /**
             * 备注。
             * @example `小心压测`
             */
            Remark: string;
            /**
             * 场景压测负责人。
             * @example `test-person`
             */
            Principal: string;
            /**
             * 场景来源。
             * @example `create`
             */
            Resource: string;
            /**
             * 创建人名。
             * @example `张三`
             */
            CreateName: string;
            /**
             * 修改人名。
             * @example `里斯`
             */
            ModifyName: string;
            /**
             * 操作类型。
             * @example `保存去压测`
             */
            OperateType: string;
        };
        /**
         * 文件列表。
         */
        FileList: {
            /**
             * 文件ID。
             * @example `61660`
             */
            Id: number;
            /**
             * 文件名。
             * @example `json.jar`
             */
            FileName: string;
            /**
             * 文件的OSS地址。
             * @example `https://test.oss-cn-shanghai.aliyuncs.com/json.jar`
             */
            FileOssAddress: string;
            /**
             * 是否切分。
             * @example `false`
             */
            SplitCsv: boolean;
            /**
             * JAR包的MD5值。
             * @example `43B584026CE5E570F3DE638FA7EEF9E0`
             */
            Md5: string;
            /**
             * 文件大小，单位为Byte。
             * @example `700`
             */
            FileSize: number;
            /**
             * 文件类型。
             * @example `jar`
             */
            FileType: string;
        }[];
        /**
         * 测试文件。
         * @example `baidu.jmx`
         */
        TestFile: string;
        /**
         * 是否为VPC压测。
         * @example `false`
         */
        IsVpcTest: boolean;
        /**
         * 压测持续时间，单位为s。
         * @example `600`
         */
        Duration: number;
        /**
         * DNS配置。
         */
        DnsCacheConfig: {
            /**
             * 是否清除缓存。
             * @example `false`
             */
            ClearCacheEachIteration: boolean;
            /**
             * DNS服务器
             */
            DnsServers: string[];
            /**
             * 域名绑定。
             * @example `{"server.com":"6.6.6.6"}`
             */
            HostTable: any;
        };
        /**
         * 最大并发。
         * @example `1000`
         */
        Concurrency: number;
        /**
         * 施压机数量。一台施压机最多支持500并发。
         * @example `2`
         */
        AgentCount: number;
        /**
         * 递增时间，单位为s。
         * @example `100`
         */
        RampUp: number;
        /**
         * 递增阶梯数。预热时间和预热阶段数都不进行配置时，使用固定压力值；只配置预热时间，不配置阶段数时，使用均匀递增；预热时间和阶段数都进行配置时，且Steps<rampUp，使用阶梯递增。不可只配置Steps，而不配置rampUp。如果使用此配置，则默认使用固定压力值。
         * @example `3`
         */
        Steps: number;
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
         * 同步定时器类型。
         * @example `GLOBAL`
         */
        SyncTimerType: string;
        /**
         * 固定吞吐量定时器类型。
         * @example `STAND_ALONE`
         */
        ConstantThroughputTimerType: string;
        /**
         * 压力来源。“”表示公网，intranet-vpc表示VPC
         * @example `VPC`
         */
        Pool: string;
        /**
         * 施压模式，concurrency_mode表示并发压测,tps_mode表示RPS压测
         * @example `concurrency_mode`
         */
        Mode: string;
        /**
         * 起始的RPS，RPS模式下生效。
         * @example `true`
         */
        StartRps: number;
        /**
         * 最大RPS，RPS模式下生效。
         * @example `true`
         */
        MaxRps: number;
        /**
         * 起始并发，并发模式下生效。
         * @example `true`
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
             * 施压机数量
             * @example `1`
             */
            Amount: number;
        }[];
    };
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
