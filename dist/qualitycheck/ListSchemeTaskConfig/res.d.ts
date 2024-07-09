export interface ListSchemeTaskConfigResponse {
    Data: {
        /**
         * 完整返回内容。
         */
        Data: {
            /**
             * 质检任务ID。
             * @example `123`
             */
            Id: number;
            /**
             * 质检任务ID。
             * @example `123`
             */
            SchemeTaskConfigId: number;
            /**
             * 质检任务名称。
             * @example `检测任务A`
             */
            Name: string;
            /**
             * 质检结果类型：
             * - 1：离线语音质检；
             * - 2：离线文本质检；
             * - 3：实时语音质检；
             * - 4：实时文本质检；
             * - 5：呼叫中心二次质检；
             * - 51：呼叫语音中心二次质检；
             * - 52：呼叫文本中心二次质检；
             * - 11：数据集语音；
             * - 12：数据集文本；
             * @example `2`
             */
            SourceDataType: number;
            /**
             * 任务状态：0（禁用中）；1（启用中）
             * @example `1`
             */
            Status: number;
            /**
             * 人工复核
             * @example `0`
             */
            ManualReview: number;
            /**
             * 分配类型
             * @example `0`
             */
            AssignType: number;
            /**
             * 数据配置信息
             */
            DataConfig: {
                /**
                 * 索引号
                 * @example `0`
                 */
                Index: number;
                AssignConfigs: {
                    /**
                     * 随录数据筛选项
                     */
                    AssignConfig: {
                        AssignConfigContests: {
                            /**
                             * 随录参数匹配配置
                             */
                            AssignConfigContest: {
                                /**
                                 * 检测项名称
                                 * @example `callStartTime`
                                 */
                                Name: string;
                                /**
                                 * value的类型
                                 * - 0：String
                                 * - 1：Number
                                 * - 2：List（在使用=的时候，都使用list类型来传递参数value）
                                 * - 3：Date
                                 * - 4：List_Json
                                 * @example `3`
                                 */
                                DataType: number;
                                /**
                                 * 运算符
                                 * - 1：==
                                 * - 2：>
                                 * - 3：<
                                 * - 4：区间
                                 * - 5：>=
                                 * - 6：<=
                                 * - 7：!=
                                 * - 8：null
                                 * - 9：not null
                                 * - 10：包含
                                 * - 11：不包含
                                 * @example `4`
                                 */
                                Symbol: number;
                                /**
                                 * 随录数据匹配值。
                                 * @example `{\"start\":\"2022-09-01 00:00:00\",\"end\":\"2022-09-30 00:00:00\"}`
                                 */
                                Value: string;
                                ListObject: {
                                    /**
                                     * 随录数据列表。
                                     */
                                    ListObject: any[];
                                };
                            }[];
                        };
                    }[];
                };
                /**
                 * 二次质检用，筛选条件的JSON文本。具体参考获取任务结果GetResult接口的请求参数。
                 * @example `{}`
                 */
                ResultParam: string;
                /**
                 * 数据集任务用，管理数据集。
                 * @example `[]`
                 */
                DataSets: string;
            };
            SchemeIdList: {
                /**
                 * 质检方案ID列表
                 */
                SchemeIdList: number[];
            };
            SchemeList: {
                /**
                 * 质检方案列表
                 */
                SchemeList: {
                    /**
                     * 质检方案ID。
                     * @example `158`
                     */
                    SchemeId: number;
                    /**
                     * 质检方案名称
                     * @example `质检方案B`
                     */
                    Name: string;
                }[];
            };
            /**
             * 任务优先级：
             * - 0（低）
             * - 1（中）
             * - 2（高）
             * @example `2`
             */
            AsrTaskPriority: number;
            /**
             * 语言模型ID。
             * @example `cdae396590b*****ec40f3476e274fc`
             */
            ModeCustomizationId: string;
            /**
             * 语言模型名称
             * @example `语言模型A`
             */
            ModelName: string;
            /**
             * 热词模型ID。
             * @example `9f90b3efa2****0a49acec226eafc17`
             */
            VocabId: string;
            /**
             * 热词模型名称
             * @example `热词模型A`
             */
            VocabName: string;
            /**
             * 用户组ID。
             * @example `1`
             */
            UserGroup: string;
            /**
             * 创建用户ID。
             * @example `1`
             */
            CreateUser: number;
            /**
             * 创建时间。
             * @example `1650418039000`
             */
            CreateTime: string;
            /**
             * 更新时间
             * @example `1650418039000`
             */
            UpdateTime: string;
            /**
             * 更新用户ID。
             * @example `1`
             */
            UpdateUser: number;
            /**
             * 类型
             * @example `0`
             */
            Type: number;
            /**
             * 数据总量。
             * @example `1000`
             */
            NumberSum: number;
            /**
             * 成功数据量。
             * @example `1000`
             */
            NumberSuccess: number;
            /**
             * 失败数据量。
             * @example `0`
             */
            NumberFail: number;
            /**
             * 任务完成率。
             * @example `100`
             */
            FinishRate: number;
            /**
             * 执行中数据量。
             * @example `0`
             */
            NumberExecuting: number;
        }[];
    };
    /**
     * 总条数。
     * @example `22`
     */
    Count: number;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 内部字段，请忽略。
     * @example `忽略`
     */
    ResultCountId: string;
    /**
     * 本条数据标志信息，当通过GetResult查询超过10000条以上的数据时，每次请求入参中需要携带上一次查询结果最后一条数据的lastDataId的值。
     * @example `xxx`
     */
    LastDataId: string;
    /**
     * 请求ID
     * @example `4B0A8DCD-0DDF-5E80-8B9C-0A2F68B3403B`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    Messages: {
        /**
         * 消息的列表
         */
        Message: string[];
    };
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
