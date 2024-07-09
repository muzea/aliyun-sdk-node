export interface QueryMediaWorkflowExecutionListResponse {
    NonExistRunIds: {
        /**
         * 不存在的媒体工作流实例列表。
         */
        RunId: string[];
    };
    MediaWorkflowExecutionList: {
        /**
         * 媒体工作流列表。
         */
        MediaWorkflowExecution: {
            /**
             * 创建时间。
             * @example `016-04-01T06:53:43Z`
             */
            CreationTime: string;
            /**
             * 媒体工作流ID。
             * @example `93ab850b4f6f44eab54b6e91****81d4`
             */
            MediaWorkflowId: string;
            /**
             * 状态。取值：
             * - Running：执行中。
             * - Completed：执行完成。
             * > Completed仅表示工作流执行完成，每个活动的（转码、截图等）是否成功要看每个活动具体的状态值。
             * - Fail：执行失败。
             * @example `Completed`
             */
            State: string;
            ActivityList: {
                /**
                 * 媒体工作流活动列表。
                 */
                Activity: {
                    /**
                     * 活动结束执行时间。
                     * @example `2016-04-01T06:53:44Z`
                     */
                    EndTime: string;
                    /**
                     * 媒体工作流活动类型。可取值：Start活动、Snapshot活动、Transcode活动、Analysis活动、Report活动。更多活动信息请参见[媒体工作流活动介绍](~~68494~~)。
                     * @example `Start`
                     */
                    Type: string;
                    /**
                     * 活动开始执行时间。
                     * @example `2016-04-01T06:53:44Z`
                     */
                    StartTime: string;
                    /**
                     * 状态。取值：
                     * - Running：活动执行中。
                     * - Success：活动执行成功。
                     * - Fail：活动执行失败。
                     * - Skipped：活动被跳过。
                     * > 例如：分析活动之后有高清、标清两个转码活动，会根据实际分析的结果来决策，如果原视频内容清晰度不够，高清的转码活动就可能被跳过。
                     * @example `Running`
                     */
                    State: string;
                    /**
                     * 活动执行时生成的作业ID（例如分析作业ID、转码作业ID、截图作业ID）。
                     * @example `2376030d9d0849399cd20e20f4f3****`
                     */
                    JobId: string;
                    /**
                     * 错误码。
                     * - 当活动状态是**Fail**时，会给出具体的错误码。
                     * - 当活动状态是**Success**时，不返回此参数。
                     * @example `InvalidParameter.ResourceContentBad`
                     */
                    Code: string;
                    /**
                     * 错误信息。
                     * - 当活动状态是**Fail**时，会给出详细的错误描述信息。
                     * - 当活动状态是**Success**时，此参数不返回。
                     * @example `The resource operated InputFile is bad`
                     */
                    Message: string;
                    /**
                     * 媒体工作流活动名称。
                     * > 在同一个工作流中活动的名字是唯一的。
                     * @example `Start`
                     */
                    Name: string;
                    /**
                     * MNS通知用户作业完成结果。
                     */
                    MNSMessageResult: {
                        /**
                         * 执行成功时消息的ID。如果执行失败则不返回此参数。
                         * @example `4f3bc83233de4e2f81c7dade443e****`
                         */
                        MessageId: string;
                        /**
                         * 执行失败时错误信息。如果执行成功则不返回此参数。
                         * @example `MessageConfigEmpty`
                         */
                        ErrorMessage: string;
                        /**
                         * 执行失败时错误码。如果执行成功则不返回此参数。
                         * @example `The Topic/Queue config is empty, not send message`
                         */
                        ErrorCode: string;
                    };
                }[];
            };
            /**
             * 媒体工作流名称。
             * @example `example-mediaworkflow-****`
             */
            Name: string;
            /**
             * 媒体工作流的用户自定义数据。
             */
            Input: {
                /**
                 * 用户自定义数据。
                 * @example `example data ****`
                 */
                UserData: string;
                /**
                 * 媒体工作流的输入文件。
                 */
                InputFile: {
                    /**
                     * 输入文件的OSS Object。
                     * @example `example-mediaWorkflow-****​/example-object-****​/example.mp4`
                     */
                    Object: string;
                    /**
                     * 输入文件的OSS Location。
                     * @example `mps-cn-shanghai`
                     */
                    Location: string;
                    /**
                     * 输入文件的OSS Bucket。
                     * @example `example-bucket-****`
                     */
                    Bucket: string;
                };
            };
            /**
             * 媒体ID。媒体工作流生成的所有信息都属于这个媒体ID。
             * @example `512046582a924698a41e0f8b0d2b****`
             */
            MediaId: string;
            /**
             * 执行实例ID。
             * @example `48e33690ac19445488c706924321****`
             */
            RunId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `D1D5C080-8E2F-5030-8AB4-13092F17631B`
     */
    RequestId: string;
}
