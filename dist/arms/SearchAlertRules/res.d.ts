export interface SearchAlertRulesResponse {
    /**
     * 请求ID。
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PageBean: {
        /**
         * 查询结果分页页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 查询结果分页的每页项目数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果总数。
         * @example `23`
         */
        TotalCount: number;
        /**
         * 报警规则列表。
         */
        AlertRules: {
            /**
             * 报警规则状态。`RUNNING`表示运行中，`STOPPED`表示已停止。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 报警规则更新时间的时间戳。
             * @example `1480521600000`
             */
            UpdateTime: number;
            /**
             * 报警规则中联系人分组ID，多个ID以半角逗号（,）分隔。
             * @example `381*,572*`
             */
            ContactGroupIdList: string;
            /**
             * 报警规则创建时间的时间戳。
             * @example `1579508519683`
             */
            CreateTime: number;
            /**
             * 报警规则名称。
             * @example `TestAlertRule`
             */
            AlertTitle: string;
            /**
             * 报警规则所属用户的ID。
             * @example `113197164949****`
             */
            UserId: string;
            /**
             * 报警规则版本，默认为`1`。
             * @example `1`
             */
            AlertVersion: number;
            /**
             * 是否标识告警是通过告警中心发送的通知。
             * - `true`
             * - `false`
             * @example `true`
             */
            HostByAlertManager: boolean;
            /**
             * 报警规则类型：
             * - `1`：基于下钻数据集的自定义监控报警规则。
             * - `3`：基于平铺数据集的自定义监控报警规则。
             * - `4`：前端监控报警规则，包含默认前端监控报警规则（AlertType=6）。
             * - `5`：应用监控报警规则，包含默认应用监控报警规则（AlertType=7）。
             * - `6`：默认前端监控报警规则。
             * - `7`：默认应用监控报警规则。
             * - `8`：链路追踪Tracing Analysis报警规则。
             * - `101`：Prometheus监控报警规则。
             * @example `4`
             */
            AlertType: number;
            /**
             * 报警联系人分组ID，格式为JSONArray。
             * @example `[123, 234]`
             */
            ContactGroupIds: string;
            /**
             * 报警规则的配置项，格式为JSON字符串。
             * **continuous**的值包括：
             * - `true`：每分钟均发送报警
             * - `false`：打开报警静默期开关
             * **dataRevision**表示未取得数据或者或数据为null值时的数据修订策略，包括：
             *
             * - `0`：补零策略。
             * - `1`：补一策略。
             * - `2`：补null （默认补null），将不对数据做处理，无数据时将不会生成报警事件。
             * @example `{\"continuous\":true,\"dataRevision\":2}`
             */
            Config: string;
            /**
             * 报警规则所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 报警通知级别，目前只支持`WARN`。
             * @example `WARN`
             */
            AlertLevel: string;
            /**
             * 内部字段。
             * @example `""`
             */
            TaskStatus: string;
            /**
             * 报警名称。
             * @example `AlertTest`
             */
            Title: string;
            /**
             * 基于任务的自定义监控报警规则所关联的ARMS任务ID。
             * @example `123`
             */
            TaskId: number;
            /**
             * 报警规则ID。
             * @example `123`
             */
            Id: number;
            /**
             * 报警通知发送方式。
             */
            AlertWays: string[];
            /**
             * 报警发送消息格式。
             */
            AlarmContext: {
                /**
                 * 报警通知内容模板。
                 * @example `报警名称：$报警名称\n筛选条件：$筛选\n报警时间：$报警时间\n报警内容：$报警内容\n注意：该报警未收到恢复邮件之前，正在持续报警中，24小时后会再次提醒您！`
                 */
                AlarmContentTemplate: string;
                /**
                 * 报警通知子标题。
                 * @example `test`
                 */
                SubTitle: string;
                /**
                 * 报警内容子标题。
                 * @example `TestSubTitle`
                 */
                AlarmContentSubTitle: string;
                /**
                 * 报警通知内容。
                 * @example `报警名称：$报警名称\n筛选条件：$筛选\n报警时间：$报警时间\n报警内容：$报警内容\n注意：该报警未收到恢复邮件之前，正在持续报警中，24小时后会再次提醒您！`
                 */
                Content: string;
            };
            /**
             * 报警规则判断条件列表。支持多个条件，条件间用“与逻辑”或“或逻辑”连接。
             */
            AlertRule: {
                /**
                 * 报警规则判断逻辑。`&`表示“与”逻辑，`|`表示“或”逻辑。
                 * @example `|`
                 */
                Operator: string;
                /**
                 * 报警规则判断条件。
                 */
                Rules: {
                    /**
                     * <props="china">报警规则数据指标，根据这些指标判断是否符合报警规则条件。更多信息，请参见[报警指标取值枚举](https://help.aliyun.com/document_detail/175825.html#h2-url-4)。</props>
                     * <props="intl">报警规则数据指标，根据这些指标判断是否符合报警规则条件。更多信息，请参见[报警指标取值枚举](https://www.alibabacloud.com/help/zh/doc-detail/175825.htm?spm=a2c63.p38356.b99.373.61d25830rs3HHm#h2-url-4)。</props>
                     * @example `appstat.jvm.SystemDiskFree`
                     */
                    Measure: string;
                    /**
                     * 报警规则判断条件的判断阈值。
                     * @example `30`
                     */
                    Value: number;
                    /**
                     * 报警判断规则的聚合逻辑：
                     * - `AVG`：每分钟求平均
                     * - `SUM`：每分钟值求和
                     * - `MAX`：每分钟最大值
                     * - `MIN`：每分钟最小值
                     * @example `AVG`
                     */
                    Aggregates: string;
                    /**
                     * 报警规则判断条件的数据请求范围，单位为分钟。例如，NValue=5表示每分钟报警将请求最近5分钟的数据。
                     * @example `5`
                     */
                    NValue: number;
                    /**
                     * 报警规则判断条件的判断符号：
                     * - CURRENT_GTE：大于或等于
                     * - CURRENT_LTE：小于或等于
                     * - PREVIOUS_UP：环比上升百分比
                     * - PREVIOUS_DOWN：环比下降百分比
                     * - HOH_UP：与上小时同比上升百分比
                     * - HOH_DOWN：与上小时同比下降百分比
                     * - DOD_UP：与昨日同比上升百分比
                     * - DOD_DOWN：与昨日同比下降百分比
                     * @example `CURRENT_GTE`
                     */
                    Operator: string;
                    /**
                     * 报警指标的展示文本。
                     * @example `调用响应时间_ms`
                     */
                    Alias: string;
                }[];
            };
            /**
             * 报警规则关联应用信息配置。
             */
            MetricParam: {
                /**
                 * 报警规则指标的类型。
                 * - `txn`：应用监控入口调用量
                 * - `txn_type`：应用监控调用类型统计
                 * - `db`：数据库指标
                 * - `jvm`：JVM监控
                 * - `host`：主机监控
                 * - `exception`：异常接口调用
                 * @example `DB`
                 */
                Type: string;
                /**
                 * 报警关联应用的应用子分组ID，适用于EDAS应用分组场景。
                 * @example `DEFAULT`
                 */
                AppGroupId: string;
                /**
                 * ARMS应用的自增ID，可忽略。
                 * @example `123`
                 */
                AppId: string;
                /**
                 * 报警规则关联的应用的ID。
                 * @example `9870ca99-8105-4da7-a3a4-d72dd1b1****`
                 */
                Pid: string;
                /**
                 * 报警规则判断条件中的维度条件。
                 */
                Dimensions: {
                    /**
                     * 维度名称，包括以下值：
                     * - `rpc`：接口名称
                     * - `rpcType`：接口调用类型（如HTTP、DUBBO）
                     * - `endpoint`：数据库名称
                     * - `rootIp`：机器IP地址
                     * @example `rootIp`
                     */
                    Key: string;
                    /**
                     * 维度条件的类型，包含以下可选值：
                     * - `STATIC`： 固定匹配此维度值需要填**dimensions.value**。
                     * - `ALL`：遍历所有维度值，按此接口所有接口名的指标依次判断，哪个接口触发阈值引起报警，就会在报警内容中体现该接口名，此时不需要填**dimensions.value**。
                     * - `DISABLE`：聚合所有维度值为一个值（求和），此时不需要填**dimensions.value**。
                     * @example `DISABLE`
                     */
                    Type: string;
                    /**
                     * 维度选项的值。
                     * @example `"127.0.0.1"`
                     */
                    Value: string;
                }[];
            };
            /**
             * 报警规则的生效时间范围和通知时间范围。
             */
            Notice: {
                /**
                 * 报警规则生效时间范围的结束时间的时间戳，控制报警规则在每天24小时中的生效时间范围。格式为UNIX时间戳，其中年月日不生效，只有时分秒生效。
                 * @example `1480607940000`
                 */
                EndTime: number;
                /**
                 * 报警规则通知时间范围的结束时间的时间戳，控制报警规则在每天24小时中的通知时间范围。格式为UNIX时间戳，其中年月日不生效，只有时分秒生效。
                 * @example `1480607940000`
                 */
                NoticeEndTime: number;
                /**
                 * 报警规则生效时间范围的开始时间的时间戳，控制报警规则在每天24小时中的生效时间范围。格式为UNIX时间戳，其中年月日不生效，只有时分秒生效。
                 * @example `1480521600000`
                 */
                StartTime: number;
                /**
                 * 报警规则通知时间范围的开始时间的时间戳，控制报警规则在每天24小时中的通知时间范围。格式为UNIX时间戳，其中年月日不生效，只有时分秒生效。
                 * @example `1480521600000`
                 */
                NoticeStartTime: number;
            };
            /**
             * 资源组ID。
             * @example `rg-acfmxyexli2****`
             */
            ResourceGroupId: string;
        }[];
    };
}
