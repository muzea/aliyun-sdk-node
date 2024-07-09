export interface GetPtsSceneResponse {
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DC4E3177-6745-4925-B423-4E89VV34221A`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 场景结构。
     */
    Scene: {
        /**
         * 场景状态。
         * @example `Draft：草稿
        WaitStart：待启动
        Debugging：调试中
        Running：运行中
        `
         */
        Status: string;
        /**
         * 施压配置信息。
         */
        LoadConfig: {
            /**
             * API施压配置信息。
             */
            ApiLoadConfigList: {
                /**
                 * 起始RPS。
                 * @example `10`
                 */
                RpsBegin: number;
                /**
                 * 最大RPS。
                 * @example `20`
                 */
                RpsLimit: number;
                /**
                 * API ID。可以根据此ID在Relation中找到对应的API信息。
                 * @example `GBFDCV8`
                 */
                ApiId: string;
            }[];
            /**
             * 运行时长，单位分钟。
             * @example `2`
             */
            MaxRunningTime: number;
            /**
             * 链路施压配置信息。
             */
            RelationLoadConfigList: {
                /**
                 * 起始并发。
                 * @example `10`
                 */
                ConcurrencyBegin: number;
                /**
                 * 最大并发。
                 * @example `20`
                 */
                ConcurrencyLimit: number;
                /**
                 * 链路ID。
                 * @example `HNBGS7M`
                 */
                RelationId: string;
            }[];
            /**
             * 全场景并发或RPS配置信息。
             */
            Configuration: {
                /**
                 * 起始RPS。
                 * @example `100`
                 */
                AllRpsBegin: number;
                /**
                 * 起始并发。
                 * @example `100`
                 */
                AllConcurrencyBegin: number;
                /**
                 * 最大并发。
                 * @example `200`
                 */
                AllConcurrencyLimit: number;
                /**
                 * 最大RPS。
                 * @example `200`
                 */
                AllRpsLimit: number;
            };
            /**
             * 施压机器。
             * @example `1`
             */
            AgentCount: number;
            /**
             *  施压模式。TPS表示施压模式为RPS模式。
             * >该返回结果为CONCURRENCY/TPS。
             * @example `TPS`
             */
            TestMode: string;
            /**
             * 是否为自动递增模式。
             * @example `false`
             */
            AutoStep: boolean;
            /**
             * 递增百分比，取值范围[10,100]，且是整十倍。只有在并发模式且是自动递增模式下有效，即 testMode=concurrency_mode 且 autoStep=true 时。
             * @example `10`
             */
            Increment: number;
            /**
             * 单量级持续时长，单位分钟，一定是小于施压时长 maxRunningTime。
             * @example `2`
             */
            KeepTime: number;
            /**
             * VPC配置，VPC压测模式下生效。
             */
            VpcLoadConfig: {
                /**
                 * 专有网络ID。
                 * @example `vpc-akjhsdajgjsfggahjkga`
                 */
                VpcId: string;
                /**
                 * 虚拟交换机ID。
                 * @example `vsw-skjfhlahsljkhsfalkjdoiw`
                 */
                VSwitchId: string;
                /**
                 * 安全组 ID。
                 * @example `sg-jkasgfieiajidsjakjscb`
                 */
                SecurityGroupId: string;
                /**
                 * 地域ID。
                 * @example `cn-beijing`
                 */
                RegionId: string;
            };
        };
        /**
         * 文件参数。
         */
        FileParameterList: {
            /**
             * 您自己的OSS文件地址，要求公网可访问。
             * @example `https://test.oss-cn-shanghai.aliyuncs.com/json.jar`
             */
            FileOssAddress: string;
            /**
             * 文件名。
             * @example `city.csv`
             */
            FileName: string;
        }[];
        /**
         * 最新修改时间。
         * @example `2021-03-26 15:30:30`
         */
        ModifiedTime: string;
        /**
         * 高级设置。
         */
        AdvanceSetting: {
            /**
             * 日志采样率。
             * @example `1`
             */
            LogRate: number;
            /**
             * 域名和IP绑定关系。
             */
            DomainBindingList: {
                /**
                 * 域名。
                 * @example `www.aliyundoc.com`
                 */
                Domain: string;
                /**
                 * 绑定IP。
                 */
                Ips: string[];
            }[];
            /**
             * 场景超时时间，单位s。
             * @example `5`
             */
            ConnectionTimeoutInSecond: number;
            /**
             * 自定义成功状态码。
             * @example `429,304`
             */
            SuccessCode: string;
        };
        /**
         * 创建时间。
         * @example `2021-02-26 15:30:30`
         */
        CreateTime: string;
        /**
         * 链路信息。
         */
        RelationList: {
            /**
             * 链路名。
             * @example `下单链路`
             */
            RelationName: string;
            /**
             * 文件参数说明。
             */
            FileParameterExplainList: {
                /**
                 * 是否循环一次。
                 * @example `true`
                 */
                CycleOnce: boolean;
                /**
                 * 文件中的参数名。
                 * @example `userName,age`
                 */
                FileParamName: string;
                /**
                 * 文件名。
                 * @example `city.csv`
                 */
                FileName: string;
                /**
                 * 是否作为基准列。
                 * @example `true`
                 */
                BaseFile: boolean;
            }[];
            /**
             * API信息。
             */
            ApiList: {
                /**
                 * API ID。可以根据此ID在Relation中找到对应的API信息。
                 * @example `GBFDCV8`
                 */
                ApiId: string;
                /**
                 * 所有检查点。
                 */
                CheckPointList: {
                    /**
                     * 检查类型。
                     * @example `EXPORTED_PARAM`
                     */
                    CheckType: string;
                    /**
                     * 比较符号。
                     * @example `ctn`
                     */
                    Operator: string;
                    /**
                     * 期望值。
                     * @example `111`
                     */
                    ExpectValue: string;
                    /**
                     * 检查点。
                     * @example `userId`
                     */
                    CheckPoint: string;
                }[];
                /**
                 * Header信息。
                 */
                HeaderList: {
                    /**
                     * 参数值。
                     * @example `1111`
                     */
                    HeaderValue: string;
                    /**
                     * 参数名。
                     * @example `userId`
                     */
                    HeaderName: string;
                }[];
                /**
                 * 超时时间，单位秒。
                 * @example `5`
                 */
                TimeoutInSecond: number;
                /**
                 * 所有导出参数。
                 */
                ExportList: {
                    /**
                     * 导出参数来源。
                     * @example `BODY_JSON`
                     */
                    ExportType: string;
                    /**
                     * 解释表达式。
                     * @example `username`
                     */
                    ExportValue: string;
                    /**
                     * 导出参数名。
                     * @example `data.username`
                     */
                    ExportName: string;
                    /**
                     * 导出参数匹配项。
                     * @example `0`
                     */
                    Count: string;
                }[];
                /**
                 * 请求URL。
                 * @example `https://www.aliyundoc.com`
                 */
                Url: string;
                /**
                 * 请求方法。
                 * @example `GET`
                 */
                Method: string;
                /**
                 * Body内容。
                 */
                Body: {
                    /**
                     * Body值。
                     * @example `{\"key1\":\"111\",\"key2\":\"222\"}`
                     */
                    BodyValue: string;
                    /**
                     * Body类型。
                     * @example `application/x-www-form-urlencoded`
                     */
                    ContentType: string;
                };
                /**
                 * 重定向次数。
                 * @example `5`
                 */
                RedirectCountLimit: number;
                /**
                 * API名称。
                 * @example `下单`
                 */
                ApiName: string;
            }[];
            /**
             * 链路ID。
             * @example `HNBGS7M`
             */
            RelationId: string;
        }[];
        /**
         * 场景名。
         * @example `下单场景`
         */
        SceneName: string;
        /**
         * 场景ID。
         * @example `BGFJ7GV`
         */
        SceneId: string;
        /**
         * 全局参数。
         */
        GlobalParameterList: {
            /**
             * 参数名。
             * @example `userName`
             */
            ParamName: string;
            /**
             * 参数值。
             * @example `lisi`
             */
            ParamValue: string;
        }[];
        /**
         * 场景所设置的全局Header
         */
        Headers: {
            /**
             * Header的名称
             * @example `key1`
             */
            Name: string;
            /**
             * Header的值
             * @example `value1`
             */
            Value: string;
        }[];
    };
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    Success: boolean;
}
