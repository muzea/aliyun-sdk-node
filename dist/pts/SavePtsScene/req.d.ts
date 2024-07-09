export interface SavePtsSceneRequest {
    /**
     * 场景详细信息。
     */
    "Scene": {
        /**
         * 场景ID。没有传场景ID表示新建场景，传场景ID表示更新场景。
         * @example `IUYAHGJ`
         */
        SceneId: string;
        /**
         * 场景名。
         * @example `test`
         */
        SceneName: string;
        /**
         * 链路配置。
         */
        RelationList: {
            /**
             * 链路名。
             * @example `链路1`
             */
            RelationName: string;
            /**
             * 链路ID。
             * @example `1`
             */
            RelationId: string;
            /**
             * 链路下的API信息。
             */
            ApiList: {
                /**
                 * API名称。
                 * @example `api`
                 */
                ApiName: string;
                /**
                 * 压测URL。
                 * @example `http://www.example.com`
                 */
                Url: string;
                /**
                 * 请求方法。
                 * @example `GET`
                 */
                Method: string;
                /**
                 * API的ID。
                 * @example `1`
                 */
                ApiId: string;
                /**
                 * 出参。
                 */
                ExportList: {
                    /**
                     * 出参来源。包括：
                     * - 请求体（BODY_TEXT）
                     * - 请求体（BODY_JSON）
                     * - 请求头（HEADER）
                     * - 响应状态码（STATUS_CODE）
                     * @example `BODY_JSON`
                     */
                    ExportType: string;
                    /**
                     * 出参名。
                     * @example `test`
                     */
                    ExportName: string;
                    /**
                     * 第几个匹配项。可以是数字或Random，当出参来源为请求体（BODY_TEXT）时需要填写该项。
                     * @example `0`
                     */
                    Count: string;
                    /**
                     * 出参的解析表达式。
                     * @example `data.itemlist[0]`
                     */
                    ExportValue: string;
                }[];
                /**
                 * Header请求头。
                 */
                HeaderList: {
                    /**
                     * Header参数名。
                     * @example `Accept-Encoding`
                     */
                    HeaderName: string;
                    /**
                     * 参数对应的值。
                     * @example `gzip, deflate, br`
                     */
                    HeaderValue: string;
                }[];
                /**
                 * 检查点。
                 */
                CheckPointList: {
                    /**
                     * 检查点条件。
                     * @example `ctn`
                     */
                    Operator: string;
                    /**
                     * 检查内容，即期望值。
                     * @example `111`
                     */
                    ExpectValue: string;
                    /**
                     * 检查点类型。包括：
                     * - 响应Body（BODY_TEXT）
                     * - 响应Header（HEADER）
                     * - 响应状态码（STATUS_CODE）
                     * - 出参（EXPORTED_PARAM）
                     * @example `EXPORTED_PARAM`
                     */
                    CheckType: string;
                    /**
                     * 检查对象。
                     * 当`type=HEADER`时，表示Header中的字段；当`type=EXPORTED_PARAM` 时，表示出参名。
                     * @example `userId`
                     */
                    CheckPoint: string;
                }[];
                /**
                 * API超时时间。单位秒，默认5s，取值范围[1-60]。
                 * @example `5`
                 */
                TimeoutInSecond: number;
                /**
                 * 请求Body。
                 */
                Body: {
                    /**
                     * Body类型，默认`application/x-www-form-urlencoded`。
                     * @example `application/x-www-form-urlencoded`
                     */
                    ContentType: string;
                    /**
                     * body的实际内容。例如， {"key1":"value2","key2":"value2"}。
                     * @example `{\"global\":\"${global}\",\"name\":\"${name}\"}`
                     */
                    BodyValue: string;
                };
                /**
                 * 重定向次数。只能是0（允许重定向）或者10（不允许重定向），用户根据自己的情况配置。
                 * @example `0`
                 */
                RedirectCountLimit: number;
            }[];
            /**
             * 链路中的文件参数配置信息。
             */
            FileParameterExplainList: {
                /**
                 * 文件名。
                 * @example `fileName.csv`
                 */
                FileName: string;
                /**
                 * 文件使用的参数列名。
                 * @example `name,uid,age`
                 */
                FileParamName: string;
                /**
                 * 是否作为基准文件。
                 * @example `true`
                 */
                BaseFile: boolean;
                /**
                 * 文件是否轮询一次。
                 * @example `true`
                 */
                CycleOnce: boolean;
            }[];
        }[];
        /**
         * 施压配置。
         */
        LoadConfig: {
            /**
             * 施压模式。包括：
             * - 并发模式（concurrency_mode）
             * - RPS模式（tps_mode）
             * @example `concurrency_mode`
             */
            TestMode: string;
            /**
             * 场景施压量级配置信息。
             */
            Configuration: {
                /**
                 * 所有API的起始RPS总值。
                 * 均分给每个API，在RPS模式下使用，若不设置该值，则**apiLoadConfig**必须填写。
                 * @example `100`
                 */
                AllRpsBegin: number;
                /**
                 * 所有API的最大RPS总值。
                 * 均分给每个API，在RPS模式下使用，若不设置该值，则**apiLoadConfig**必须填写。
                 * @example `100`
                 */
                AllRpsLimit: number;
                /**
                 * 所有链路的起始并发总值。
                 * 均分给每个链路，在并发模式下使用，若不设置该值，则**relationLoadConfig**必须填写。
                 * @example `100`
                 */
                AllConcurrencyBegin: number;
                /**
                 * 所有链路的最大并发总值。
                 * 均分给每个链路，在并发模式下使用，若不设置该值，则**relationLoadConfig**必须填写。
                 * @example `100`
                 */
                AllConcurrencyLimit: number;
            };
            /**
             * 施压时长。单位分钟，取值范围[1-1440]。
             * @example `10`
             */
            MaxRunningTime: number;
            /**
             * 是否自动递增。只有在并发模式下有效，即`testMode=concurrency_mode`时有效。
             * @example `true`
             */
            AutoStep: boolean;
            /**
             * 指定机器数。并发需要＞250（RPS＞2000）时使用，最大扩展机器数不能超过最大并发数/250（最大RPS/2000）。
             * @example `1`
             */
            AgentCount: number;
            /**
             * 递增百分比。取值范围[10,100]，取值需是10的倍数。
             * 只在并发模式且同时是自动递增模式下有效，即`testMode=concurrency_mode`且`autoStep=true`时有效。
             * @example `30`
             */
            Increment: number;
            /**
             * 单量级持续时长。单位分钟，该时长需小于施压时长**maxRunningTime**。
             * @example `3`
             */
            KeepTime: number;
            /**
             * API的起始、最大RPS值设置，在RPS模式下使用。
             */
            ApiLoadConfigList: {
                /**
                 * API ID。
                 * @example `1`
                 */
                ApiId: string;
                /**
                 * 最大RPS值。
                 * @example `100`
                 */
                RpsLimit: number;
                /**
                 * 起始RPS值。
                 * @example `100`
                 */
                RpsBegin: number;
            }[];
            /**
             * VPC配置。
             */
            VpcLoadConfig: {
                /**
                 * VPC ID。
                 * @example `vpc-akjhsdajgjsfggahjkga`
                 */
                VpcId: string;
                /**
                 * 交换机 ID。
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
            /**
             * 链路的起始、最大并发值设置，在并发模式下使用。
             */
            RelationLoadConfigList: {
                /**
                 * 链路ID。
                 * @example `1`
                 */
                RelationId: string;
                /**
                 * 最大并发数。
                 * @example `100`
                 */
                ConcurrencyLimit: number;
                /**
                 * 起始并发。
                 * @example `100`
                 */
                ConcurrencyBegin: number;
            }[];
        };
        /**
         * 高级设置。
         */
        AdvanceSetting: {
            /**
             * 日志采样率。取值范围[1,50]，大于2时取值需要是10的倍数，即[1,10,20,30,40,50]。
             * @example `1`
             */
            LogRate: number;
            /**
             * 域名绑定IP关系。
             */
            DomainBindingList: {
                /**
                 * 域名。
                 * @example `www.example.com`
                 */
                Domain: string;
                /**
                 * 对应的IP。
                 */
                Ips: string[];
            }[];
            /**
             * 超时时间，单位秒。
             * @example `5`
             */
            ConnectionTimeoutInSecond: number;
            /**
             * 新增成功状态码，多个需用半角逗号（,）隔开。
             * @example `205`
             */
            SuccessCode: string;
        };
        /**
         * 全局自定义参数。
         */
        GlobalParameterList: {
            /**
             * 参数名。
             * @example `global`
             */
            ParamName: string;
            /**
             * 全局参数值，不可参数化。
             * @example `11111`
             */
            ParamValue: string;
        }[];
        /**
         * 文件参数。
         */
        FileParameterList: {
            /**
             * 文件名。
             * @example `test.csv`
             */
            FileName: string;
            /**
             * 您自己的OSS文件地址，要求公网可访问。
             * @example `https://jmeter-pts-testing-version.oss-cn-shanghai.aliyuncs.com/param-file.csv`
             */
            FileOssAddress: string;
        }[];
    };
}
