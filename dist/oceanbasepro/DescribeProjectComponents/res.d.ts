export interface DescribeProjectComponentsResponse {
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误详情。
     */
    ErrorDetail: {
        /**
         * 错误码（新）。
         * @example `CM-RESOAT1111
        `
         */
        Code: string;
        /**
         * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
         * @example `ERROR`
         */
        Level: string;
        /**
         * 错误描述（新）。
         * @example `A system error occurred.`
         */
        Message: string;
        /**
         * 用于填充 Message 中的占位符。
         */
        ExtraContext: any;
        /**
         * 错误信息的 Key。
         * @example `null`
         */
        MessageMcmsKey: string;
        /**
         * 用于填充 MessageMcmsKey 中的占位符。
         */
        MessageMcmsContext: any;
        /**
         * 错误原因。
         * @example `null`
         */
        Reason: string;
        /**
         * 错误原因的 Key。
         * @example `null`
         */
        ReasonMcmsKey: string;
        /**
         * 错误原因的上下文。
         */
        ReasonMcmsContext: any;
        /**
         * 建议（新）。
         * @example `null`
         */
        Proposal: string;
        /**
         * 建议内容的 Key。
         * @example `null`
         */
        ProposalMcmsKey: string;
        /**
         * 建议内容的上下文。
         */
        ProposalMcmsContext: any;
        /**
         * 上游错误详情，用于处理 HTTP 请求。
         * @example `null`
         */
        UpstreamErrorDetail: any;
    };
    /**
     * 错误码（旧）。
     * @example `INNER_ERROR`
     */
    Code: string;
    /**
     * 错误描述（旧）。
     * @example `A system error occurred.`
     */
    Message: string;
    /**
     * 建议（旧）。
     * @example `Contact the administrator. `
     */
    Advice: string;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数，分页查询时生效。
     * @example `9`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `48`
     */
    Cost: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 增量拉取组件 Store 列表。
         */
        StoreList: {
            /**
             * Store 组件的名称。
             * @example `xxx.xxx.xxx.1-7145:OB_ORACLE_np_4w3r***_4w:0000***97`
             */
            Name: string;
            /**
             * Store 组件所在的 IP 地址。
             * @example `xxx.xxx.xxx.1`
             */
            Ip: string;
            /**
             * Store 组件所在的地域。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * Topic。
             * @example `OB_ORACLE_np_4w3r29c_4w3****`
             */
            Topic: string;
            /**
             * SubTopic。
             * @example `OB_ORACLE_np_4w3***c_4w3**-0`
             */
            Subtopic: string;
            /**
             * 每秒处理的事务数（Transactions Per Second，TPS）。
             * @example `0`
             */
            Tps: number;
            /**
             * 延迟时间，单位为秒。
             * @example `24`
             */
            Delay: number;
            /**
             * 位点采集时间。
             * @example `1689250049`
             */
            Gmt: number;
            /**
             * 连接数。
             * @example `1`
             */
            Conn: number;
            /**
             * 状态，包括 EXCEPTION（Store 运行异常）、ACTIVE（Store 正常运行中）、STOP（Store 人为操作停止）、UNEXPECTED_EXIT（Store reader 非预期退出）和 CHANGE_SOURCE。
             * @example `EXCEPTION`
             */
            Status: string;
            /**
             * 错误详情。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111`
                 */
                Code: string;
                /**
                 * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                 * @example `ERROR`
                 */
                Level: string;
                /**
                 * 错误描述（新）。
                 * @example `A system error occurred.`
                 */
                Message: string;
                /**
                 * 用于填充 Message 中的占位符。
                 */
                ExtraContext: any;
                /**
                 * 错误信息的 Key。
                 * @example `null`
                 */
                MessageMcmsKey: string;
                /**
                 * 用于填充 MessageMcmsKey 中的占位符。
                 */
                MessageMcmsContext: any;
                /**
                 * 错误原因。
                 * @example `null`
                 */
                Reason: string;
                /**
                 * 错误原因的 Key。
                 * @example `null`
                 */
                ReasonMcmsKey: string;
                /**
                 * 错误原因的上下文。
                 */
                ReasonMcmsContext: any;
                /**
                 * 建议（新）。
                 * @example `null`
                 */
                Proposal: string;
                /**
                 * 建议内容的 Key。
                 * @example `null`
                 */
                ProposalMcmsKey: string;
                /**
                 * 建议内容的上下文。
                 */
                ProposalMcmsContext: any;
                /**
                 * 上游错误详情，用于处理 HTTP 请求。
                 * @example `null`
                 */
                UpstreamErrorDetail: any;
            }[];
            /**
             * 是否需要主备切换，供 HA 判断。
             * @example `false`
             */
            ToSwitch: boolean;
            /**
             * 对外服务端口。
             * @example `2883`
             */
            Port: number;
            /**
             * Store 组件的端口。
             * @example `2882`
             */
            StorePort: number;
            /**
             * 开始安全位点。
             * @example `2023-07-13T09:19:53`
             */
            BeginCheckpoint: string;
            /**
             * 结束安全位点。
             * @example `2023-07-13T09:19:53`
             */
            EndCheckpoint: string;
            /**
             * 当前错误信息。
             * @example `null`
             */
            ErrMsg: string;
            /**
             * 创建时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T17:29:54`
             */
            GmtCreate: string;
            /**
             * 更新时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T17:29:54`
             */
            GmtModified: string;
            /**
             * 最近一次心跳时间戳。
             * @example `1689250071`
             */
            LatelyHeartbeatTimeSec: number;
        }[];
        /**
         * 反向增量拉取组件列表。
         */
        ReverseStoreList: {
            /**
             * 反向增量拉取组件的名称。
             * @example `xxx.xxx.xxx.1-9000:connector_v2:np_4w****9jxc-incr_trans-1-0:0000000277`
             */
            Name: string;
            /**
             * 反向增量组件所在的 IP 地址。
             * @example `xxx.xxx.xxx.1`
             */
            Ip: string;
            /**
             * 反向增量组件所在的地域。
             * @example `cn-shenzhen`
             */
            Region: string;
            /**
             * Topic。
             * @example `null`
             */
            Topic: string;
            /**
             * SubTopic。
             * @example `null`
             */
            Subtopic: string;
            /**
             * 每秒处理的事务数（Transactions Per Second，TPS）。
             * @example `1`
             */
            Tps: number;
            /**
             * 延迟时间，单位为秒。
             * @example `1`
             */
            Delay: number;
            /**
             * 位点采集时间。
             * @example `1689250071`
             */
            Gmt: number;
            /**
             * 连接数。
             * @example `1`
             */
            Conn: number;
            /**
             * 状态，包括 EXCEPTION（Store 运行异常）、ACTIVE（Store 正常运行中）、STOP（Store 人为操作停止）、UNEXPECTED_EXIT（Store reader 非预期退出）和 CHANGE_SOURCE。
             * @example `EXCEPTION`
             */
            Status: string;
            /**
             * 错误详情。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111`
                 */
                Code: string;
                /**
                 * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                 * @example `ERROR`
                 */
                Level: string;
                /**
                 * 错误描述（新）。
                 * @example `A system error occurred.`
                 */
                Message: string;
                /**
                 * 用于填充 Message 中的占位符。
                 */
                ExtraContext: any;
                /**
                 * 错误信息的 Key。
                 * @example `null`
                 */
                MessageMcmsKey: string;
                /**
                 * 用于填充 MessageMcmsKey 中的占位符。
                 */
                MessageMcmsContext: any;
                /**
                 * 错误原因。
                 * @example `null`
                 */
                Reason: string;
                /**
                 * 错误原因的 Key。
                 * @example `null`
                 */
                ReasonMcmsKey: string;
                /**
                 * 错误原因的上下文。
                 */
                ReasonMcmsContext: any;
                /**
                 * 建议（新）。
                 * @example `null`
                 */
                Proposal: string;
                /**
                 * 建议内容的 Key。
                 * @example `null`
                 */
                ProposalMcmsKey: string;
                /**
                 * 建议内容的上下文。
                 */
                ProposalMcmsContext: any;
                /**
                 * 上游错误详情，用于处理 HTTP 请求。
                 * @example `null`
                 */
                UpstreamErrorDetail: any;
            }[];
            /**
             * 是否需要主备切换，供 HA 判断。
             * @example `false`
             */
            ToSwitch: boolean;
            /**
             * 对外服务端口。
             * @example `2883`
             */
            Port: number;
            /**
             * Store 组件的端口。
             * @example `2882`
             */
            StorePort: number;
            /**
             * 开始安全位点。
             * @example `2023-07-13T09:19:53`
             */
            BeginCheckpoint: string;
            /**
             * 结束安全位点。
             * @example `2023-07-13T09:19:53`
             */
            EndCheckpoint: string;
            /**
             * 当前错误信息。
             * @example `null`
             */
            ErrMsg: string;
            /**
             * 创建时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtCreate: string;
            /**
             * 更新时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtModified: string;
            /**
             * 最近一次心跳时间戳。
             * @example `1689250071`
             */
            LatelyHeartbeatTimeSec: number;
        }[];
        /**
         * 全量校验组件列表。
         */
        FullVerifyComponents: {
            /**
             * 全量校验组件所在的地域。
             * @example `cn-beijing`
             */
            Region: string;
            /**
             * 全量校验组件的名称。
             * @example `xxx.xxx.xxx.1-9000:90247:0000000033`
             */
            Name: string;
            /**
             * 校验不一致的数量。
             * @example `0`
             */
            InconsistentQuantity: number;
            /**
             * 校验一致的数量。
             * @example `100`
             */
            ConsistentQuantity: number;
            /**
             * 表级别的进度。
             * @example `100`
             */
            Progress: string;
            /**
             * 记录级别的进度。
             * @example `100`
             */
            RecordProgress: number;
            /**
             * 全量校验组件的状态，包括 INIT、RUNNING、DONE、FAILED、SHUTDOWNED 和 DELETED。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 错误信息。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111`
                 */
                Code: string;
                /**
                 * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                 * @example `ERROR`
                 */
                Level: string;
                /**
                 * 错误描述（新）。
                 * @example `A system error occurred.`
                 */
                Message: string;
                /**
                 * 用于填充 Message 中的占位符。
                 */
                ExtraContext: any;
                /**
                 * 错误信息的 Key。
                 * @example `null`
                 */
                MessageMcmsKey: string;
                /**
                 * 用于填充 MessageMcmsKey 中的占位符。
                 */
                MessageMcmsContext: any;
                /**
                 * 错误原因。
                 * @example `null`
                 */
                Reason: string;
                /**
                 * 错误原因的 Key。
                 * @example `null`
                 */
                ReasonMcmsKey: string;
                /**
                 * 错误原因的上下文。
                 */
                ReasonMcmsContext: any;
                /**
                 * 建议（新）。
                 * @example `null`
                 */
                Proposal: string;
                /**
                 * 建议内容的 Key。
                 * @example `null`
                 */
                ProposalMcmsKey: string;
                /**
                 * 建议内容的上下文。
                 */
                ProposalMcmsContext: any;
                /**
                 * 上游错误详情，用于处理 HTTP 请求。
                 * @example `null`
                 */
                UpstreamErrorDetail: any;
            }[];
            /**
             * 全量校验组件所在的 IP 地址。
             * @example `xxx.xxx.xxx.1`
             */
            Ip: string;
            /**
             * 全量校验组件的 ID。
             * @example `1345***`
             */
            TaskId: number;
        }[];
        /**
         * 全量导入组件列表。
         */
        FullImportComponents: {
            /**
             * 全量导入组件所在的地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 全量导入组件的名称。
             * @example `xxx.xxx.xxx.1-9000:connector_v2:np_4w8v****c-full_trans-1-0:0000000276`
             */
            Name: string;
            /**
             * 全量导入组件所在的 IP 地址。
             * @example `xxx.xxx.xxx.1`
             */
            Ip: string;
            /**
             * 项目 ID。
             * @example `p_4w8v****`
             */
            Identity: string;
            /**
             * 全量导入组件的进度。
             * @example `90`
             */
            Progress: number;
            /**
             * 全量导入组件的状态，包括 RUNNING、STOPPED、EXCEPTION 和 FINISHED。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 创建时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtCreate: string;
            /**
             * 更新时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtModify: string;
            /**
             * 错误信息。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111`
                 */
                Code: string;
                /**
                 * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                 * @example `ERROR`
                 */
                Level: string;
                /**
                 * 错误描述（新）。
                 * @example `A system error occurred.`
                 */
                Message: string;
                /**
                 * 用于填充 Message 中的占位符。
                 */
                ExtraContext: any;
                /**
                 * 错误信息的 Key。
                 * @example `null`
                 */
                MessageMcmsKey: string;
                /**
                 * 用于填充 MessageMcmsKey 中的占位符。
                 */
                MessageMcmsContext: any;
                /**
                 * 错误原因。
                 * @example `null`
                 */
                Reason: string;
                /**
                 * 错误原因的 Key。
                 * @example `null`
                 */
                ReasonMcmsKey: string;
                /**
                 * 错误原因的上下文。
                 */
                ReasonMcmsContext: any;
                /**
                 * 建议（新）。
                 * @example `null`
                 */
                Proposal: string;
                /**
                 * 建议内容的 Key。
                 * @example `null`
                 */
                ProposalMcmsKey: string;
                /**
                 * 建议内容的上下文。
                 */
                ProposalMcmsContext: any;
                /**
                 * 上游错误详情，用于处理 HTTP 请求。
                 * @example `null`
                 */
                UpstreamErrorDetail: any;
            }[];
        }[];
        /**
         * 增量同步组件列表。
         */
        IncrSyncComponents: {
            /**
             * 增量同步组件所在的地域。
             * @example `cn-zhangjiakou`
             */
            Region: string;
            /**
             * 增量同步组件的名称。
             * @example `xxx.xxx.xxx.1-9000:connector_v2:np_4w****jxc-incr_trans-1-0:0000000277`
             */
            Name: string;
            /**
             * 增量同步组件所在的 IP 地址。
             * @example `xxx.xxx.xxx.1`
             */
            Ip: string;
            /**
             * 项目 ID。
             * @example `np_4w***`
             */
            Identity: string;
            /**
             * SubTpoics 集合。
             */
            Subtopics: string[];
            /**
             * 状态，包括 RUNNING、STOPPED、EXCEPTION 和 FINISHED。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 当前位点，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T09:19:53`
             */
            Checkpoint: string;
            /**
             * 每秒处理的事务数（Transactions Per Second，TPS）。
             * @example `1`
             */
            Tps: number;
            /**
             * 延迟时间，单位为秒。
             * @example `1`
             */
            Delay: number;
            /**
             * 位点采集时间，单位为秒。
             * @example `1689250071`
             */
            CheckpointSampleTimestamp: number;
            /**
             * 创建时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtCreate: string;
            /**
             * 修改时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtModify: string;
            /**
             * 错误信息。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111`
                 */
                Code: string;
                /**
                 * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                 * @example `ERROR`
                 */
                Level: string;
                /**
                 * 错误描述（新）。
                 * @example `A system error occurred.`
                 */
                Message: string;
                /**
                 * 用于填充 Message 中的占位符。
                 */
                ExtraContext: any;
                /**
                 * 错误信息的 Key。
                 * @example `null`
                 */
                MessageMcmsKey: string;
                /**
                 * 用于填充 MessageMcmsKey 中的占位符。
                 */
                MessageMcmsContext: any;
                /**
                 * 错误原因。
                 * @example `null`
                 */
                Reason: string;
                /**
                 * 错误原因的 Key。
                 * @example `null`
                 */
                ReasonMcmsKey: string;
                /**
                 * 错误原因的上下文。
                 */
                ReasonMcmsContext: any;
                /**
                 * 建议（新）。
                 * @example `null`
                 */
                Proposal: string;
                /**
                 * 建议内容的 Key。
                 * @example `null`
                 */
                ProposalMcmsKey: string;
                /**
                 * 建议内容的上下文。
                 */
                ProposalMcmsContext: any;
                /**
                 * 上游错误详情，用于处理 HTTP 请求。
                 * @example `null`
                 */
                UpstreamErrorDetail: any;
            }[];
        }[];
        /**
         * 反向增量同步组件。
         */
        ReverseIncrSyncComponents: {
            /**
             * 反向增量同步组件所在的地域。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 反向增量同步组件的名称。
             * @example `xxx.xxx.xxx.1-9000:connector_v2:np_4w8****9jxc-incr_trans-1-0:0000000277`
             */
            Name: string;
            /**
             * 反向增量同步组件所在的 IP 地址。
             * @example `xxx.xxx.xxx.1`
             */
            Ip: string;
            /**
             * 项目 ID。
             * @example `np_4w8****`
             */
            Identity: string;
            /**
             * Subtopics 集合。
             */
            Subtopics: string[];
            /**
             * 状态，包括 RUNNING、STOPPED、EXCEPTION 和 FINISHED。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 当前位点，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T09:19:53`
             */
            Checkpoint: string;
            /**
             * 每秒处理的事务数（Transactions Per Second，TPS）。
             * @example `1`
             */
            Tps: number;
            /**
             * 延迟时间，单位为秒。
             * @example `1`
             */
            Delay: number;
            /**
             * 位点采集时间，单位为秒。
             * @example `1689250049`
             */
            CheckpointSampleTimestamp: number;
            /**
             * 创建时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtCreate: string;
            /**
             * 修改时间，以 UTC + 0 时区的时间格式展示。
             * @example `2023-07-13T18:04:36`
             */
            GmtModify: string;
            /**
             * 错误信息。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111`
                 */
                Code: string;
                /**
                 * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                 * @example `ERROR`
                 */
                Level: string;
                /**
                 * 错误描述（新）。
                 * @example `A system error occurred.`
                 */
                Message: string;
                /**
                 * 用于填充 Message 中的占位符。
                 */
                ExtraContext: any;
                /**
                 * 错误信息的 Key。
                 * @example `null`
                 */
                MessageMcmsKey: string;
                /**
                 * 用于填充 MessageMcmsKey 中的占位符。
                 */
                MessageMcmsContext: any;
                /**
                 * 错误原因。
                 * @example `null`
                 */
                Reason: string;
                /**
                 * 错误原因的 Key。
                 * @example `null`
                 */
                ReasonMcmsKey: string;
                /**
                 * 错误原因的上下文。
                 */
                ReasonMcmsContext: any;
                /**
                 * 建议（新）。
                 * @example `null`
                 */
                Proposal: string;
                /**
                 * 建议内容的 Key。
                 * @example `null`
                 */
                ProposalMcmsKey: string;
                /**
                 * 建议内容的上下文。
                 */
                ProposalMcmsContext: any;
                /**
                 * 上游错误详情，用于处理 HTTP 请求。
                 * @example `null`
                 */
                UpstreamErrorDetail: any;
            }[];
        }[];
    };
}
