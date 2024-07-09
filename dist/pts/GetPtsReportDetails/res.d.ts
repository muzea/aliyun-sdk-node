export interface GetPtsReportDetailsResponse {
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
     * 报告概要信息。
     */
    ReportOverView: {
        /**
         * 报告名。
         * @example `下单场景`
         */
        ReportName: string;
        /**
         * 压测结束时间。
         * @example `1988203944`
         */
        EndTime: string;
        /**
         * 开始时间。
         * @example `1988202944`
         */
        StartTime: string;
        /**
         * 引擎数。施压需要的机器数，一个机器一个IP。
         * @example `1`
         */
        AgentCount: number;
        /**
         * 报告ID。
         * @example `GHB56VD`
         */
        ReportId: string;
        /**
         * 消耗的VUM。
         * @example `100`
         */
        Vum: number;
    };
    /**
     * 场景维度的指标信息。
     */
    SceneMetrics: {
        /**
         * 全场景业务失败数。
         * @example `35`
         */
        FailCountBiz: number;
        /**
         * 全场景总请求数。
         * @example `100000`
         */
        AllCount: number;
        /**
         * 全场景业务成功率。
         * @example `0.97`
         */
        SuccessRateBiz: number;
        /**
         * 全场景平均RT。
         * @example `23`
         */
        AvgRt: number;
        /**
         * 全场景请求失败数。
         * @example `34`
         */
        FailCountReq: number;
        /**
         * 全场景平均TPS。
         * @example `78`
         */
        AvgTps: number;
        /**
         * 99分位RT。
         * @example `56`
         */
        Seg99Rt: number;
        /**
         * 全场景请求成功率
         * @example `0.99`
         */
        SuccessRateReq: number;
        /**
         * 90分位RT。
         * @example `35`
         */
        Seg90Rt: number;
    };
    /**
     * 压测场景中每个API的指标信息。
     */
    ApiMetricsList: {
        /**
         * 业务失败数。定义了检查点时，不符合条件为失败。
         * @example `30`
         */
        FailCountBiz: number;
        /**
         * 75分位RT。
         * @example `26`
         */
        Seg75Rt: number;
        /**
         * 总请求个数。
         * @example `1000`
         */
        AllCount: number;
        /**
         * 平均TPS。
         * @example `55`
         */
        AvgTps: number;
        /**
         * 最小RT，单位ms。
         * @example `10`
         */
        MinRt: number;
        /**
         * 99分位RT。
         * @example `35`
         */
        Seg99Rt: number;
        /**
         * 50分位RT。
         * @example `39`
         */
        Seg50Rt: number;
        /**
         * 最大RT，单位ms。
         * @example `50`
         */
        MaxRt: number;
        /**
         * 90分位RT。
         * @example `23`
         */
        Seg90Rt: number;
        /**
         * 业务成功率。等于业务成功数/总请求数。
         * @example `0.98`
         */
        SuccessRateBiz: number;
        /**
         * 平均RT，单位ms。
         * @example `34.5`
         */
        AvgRt: number;
        /**
         * 请求失败数。
         * @example `40`
         */
        FailCountReq: number;
        /**
         * 请求成功率。等于请求成功数/总请求数。
         * @example `0.99`
         */
        SuccessRateReq: number;
        /**
         * API名
         * @example `下单`
         */
        ApiName: string;
    }[];
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 场景快照信息。
     */
    SceneSnapShot: {
        /**
         * 场景状态。
         * @example `STOPPED`
         */
        Status: string;
        /**
         * 施压配置信息。
         */
        LoadConfig: {
            /**
             * API的RPS起始信息。
             */
            ApiLoadConfigList: {
                /**
                 * 起始RPS。
                 * @example `10`
                 */
                RpsBegin: number;
                /**
                 * 最大RPS。
                 * @example `10`
                 */
                RpsLimit: number;
            }[];
            /**
             * 运行时长，单位分钟。
             * @example `2`
             */
            MaxRunningTime: number;
            /**
             * 链路起始和最大并发配置。
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
            }[];
            /**
             * 全场景的并发或RPS限制信息。
             */
            Configuration: {
                /**
                 * 全场景起始RPS。
                 * @example `80`
                 */
                AllRpsBegin: number;
                /**
                 * 全场景起始并发。
                 * @example `10`
                 */
                AllConcurrencyBegin: number;
                /**
                 * 全场景最大并发。
                 * @example `10`
                 */
                AllConcurrencyLimit: number;
                /**
                 * 全场景最大RPS。
                 * @example `160`
                 */
                AllRpsLimit: number;
            };
            /**
             * 施压使用的机器数。
             * @example `1`
             */
            AgentCount: number;
            /**
             * 施压模式。
             * @example `tps_mode`
             */
            TestMode: string;
        };
        /**
         * 场景使用的文件信息。
         */
        FileParameterList: {
            /**
             * 文件的OSS地址。
             * @example `https://www.sss.ccv`
             */
            FileOssAddress: string;
            /**
             * 文件名。
             * @example `city.csv`
             */
            FileName: string;
        }[];
        /**
         * 修改时间。
         * @example `2020-10-10 10:10:10`
         */
        ModifiedTime: string;
        /**
         * 场景高级设置。
         */
        AdvanceSetting: {
            /**
             * 日志采样率。
             * @example `1`
             */
            LogRate: number;
            /**
             * 域名和IP的绑定关系。
             */
            DomainBindingList: {
                /**
                 * 域名。
                 * @example `www.xxx.com`
                 */
                Domain: string;
                /**
                 * 域名绑定的IP。
                 */
                Ips: string[];
            }[];
            /**
             * 全场景超时时间。
             * @example `5`
             */
            ConnectionTimeoutInSecond: number;
            /**
             * 自定义成功状态码。
             * @example `429,404`
             */
            SuccessCode: string;
        };
        /**
         * 创建时间。
         * @example `2023-11-28 16:11:20`
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
             * 链路中使用到的文件参数说明。
             */
            FileParameterExplainList: {
                /**
                 * 是否只循环一次。
                 * @example `true`
                 */
                CycleOnce: boolean;
                /**
                 * 文件中的参数名。
                 * @example `address,name`
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
                 * API ID。
                 * @example `MNB45`
                 */
                ApiId: string;
                /**
                 * API的所有检查点。
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
                 * 压测URL的Header信息。
                 */
                HeaderList: {
                    /**
                     * 参数值。
                     * @example `1111`
                     */
                    HeaderValue: string;
                    /**
                     * 参数名。
                     * @example `userName`
                     */
                    HeaderName: string;
                }[];
                /**
                 * 超时时间。
                 * @example `5`
                 */
                TimeoutInSecond: number;
                /**
                 * 导出参数列表。
                 */
                ExportList: {
                    /**
                     * 导出参数来源。
                     * @example `BODY_JSON`
                     */
                    ExportType: string;
                    /**
                     * 导出参数解析表达式。
                     * @example `data.userId`
                     */
                    ExportValue: string;
                    /**
                     * 导出参数名。
                     * @example `userId`
                     */
                    ExportName: string;
                    /**
                     * 导出参数匹配项。
                     * @example `1`
                     */
                    Count: string;
                }[];
                /**
                 * 压测的URL。
                 * @example `https://www.xxx.com`
                 */
                Url: string;
                /**
                 * 请求方法。
                 * @example `GET`
                 */
                Method: string;
                /**
                 * 请求的Body信息。
                 */
                Body: {
                    /**
                     * body值。
                     * @example `{key:value}`
                     */
                    BodyValue: string;
                    /**
                     * body类型。
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
                 * @example `测试API`
                 */
                ApiName: string;
            }[];
            /**
             * 链路ID。
             * @example `HGBN4D`
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
         * @example `7HBNS3`
         */
        SceneId: string;
        /**
         * 全局变量。
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
    };
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
