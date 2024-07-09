export interface DescribeHybridMonitorTaskListResponse {
    /**
     * 请求ID。
     * @example `11145B76-566A-5D80-A8A3-FAD98D310079`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * - 当操作成功时，返回`success`。
     * - 当操作失败时，返回错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录条数。
     * @example `1`
     */
    Total: number;
    /**
     * 监控任务列表。
     */
    TaskList: {
        /**
         * 接入企业云监控的阿里云产品的配置文件。
         * - namespace：阿里云产品的命名空间。
         * - metric_list：阿里云服务的监控项。
         * @example `products:- namespace: acs_ecs_dashboard metric_info: - metric_list: - cpu_total`
         */
        YARMConfig: string;
        /**
         * 创建监控任务的时间戳。
         * 单位：毫秒。
         * @example `1639382496000`
         */
        CreateTime: string;
        /**
         * 监控任务名称。
         * @example `aliyun_task`
         */
        TaskName: string;
        /**
         * 主机归属的指标仓库。
         * @example `aliyun`
         */
        Namespace: string;
        /**
         * 主机归属的地域。
         * @example `cn-hangzhou`
         */
        UploadRegion: string;
        /**
         * 主机的网络类型。取值：
         * - `vpc`：专有网络。
         * - `Internet`：公网。
         * @example `vpc`
         */
        NetworkType: string;
        /**
         * 云监控插件采集主机监控数据的超时时间。取值：
         * - 0
         * - 15
         * - 30
         * - 60
         * 单位：秒。
         * @example `15`
         */
        CollectTimout: number;
        /**
         * 云监控插件采集主机监控数据的地址。
         * @example `http://localhost`
         */
        CollectTargetEndpoint: string;
        /**
         * 监控任务类型。取值：
         * - aliyun_fc：阿里云产品的数据接入任务。
         * - aliyun_sls：SLS日志的监控项。
         * @example `aliyun_sls`
         */
        TaskType: string;
        /**
         * 监控任务的实例过滤条件。取值：
         * - or：或。
         * - and：和。
         * @example `or`
         */
        MatchExpressRelation: string;
        /**
         * 监控任务描述。
         * @example `aliyun`
         */
        Description: string;
        /**
         * 应用分组ID。
         * @example `3607****`
         */
        GroupId: string;
        /**
         * 云监控插件采集主机监控数据的间隔时间。取值：
         * - 15
         * - 30
         * - 60
         * 单位：秒。
         * @example `60`
         */
        CollectInterval: number;
        /**
         * 成员ID。
         * > 仅当您通过管理账号调用本接口时，显示该参数。
         * @example `120886317861****`
         */
        TargetUserId: string;
        /**
         * 云监控Agent采集的时候，采集的相对路径。
         * @example `/metrics`
         */
        CollectTargetPath: string;
        /**
         * 采集目标类型。包括：Spring、Tomcat、Nginx、Tengine、JVM、Redis和MySQL等。
         * @example `nginx`
         */
        CollectTargetType: string;
        /**
         * 监控任务ID。
         * @example `36****`
         */
        TaskId: string;
        /**
         * 监控任务的标签。
         */
        AttachLabels: {
            /**
             * 标签键。
             * @example `key1`
             */
            Name: string;
            /**
             * 标签值。
             * @example `value1`
             */
            Value: string;
        }[];
        /**
         * 应用分组中实例的匹配条件。
         */
        MatchExpress: {
            /**
             * 实例名称的值。
             * @example `ECS_instance1`
             */
            Value: string;
            /**
             * 实例名称。
             * @example `name`
             */
            Name: string;
            /**
             * 实例名称的匹配方法。取值：
             * - startWith：前缀。
             * - endWith：后缀。
             * - all：全部。
             * - equals：等于。
             * - contains：包含。
             * - notContains：不包含。
             * @example `all`
             */
            Function: string;
        }[];
        /**
         * 分批采集监控数据的实例列表。
         */
        Instances: string[];
        /**
         * 实例的附加信息。
         * @example `test`
         */
        ExtraInfo: string;
        /**
         * 本地日志数据保存在云监控所在主机的指定路径。
         * - Windows：仅支持盘符开头，例如：`C:\UserData\log\\*.Log`（不支持通配路径）。
         * - Linux：仅支持以“/”开头，例如：`/home/appdata/log/**​/*.log`（`/**​/`用于匹配appdata下的所有文件）。
         * @example `C:\UserData\log\*.Log`
         */
        LogFilePath: string;
        /**
         * 本地日志数据根据不同匹配模式的切分结果。
         * > 本地日志数据的匹配模式包括：完整正则模式、分隔符模式和JSON模式。
         * @example `{"type": "regex","regex": "\\d+\\.\\d+\\.\\d+\\.\\d+\\s+(\\d+)\\s+\\S+\\s+\\[\\d+/\\S+/\\d+:\\d+:\\d+:\\d+\\s+\\+\\d+\\]\\s+(\\S+)\\s+\\S+\\s+/\\S+/\\S+/\\S+\\s+(\\d+)","columns": [{"name": "field1"},{"name": "filed2","translate": {"default": "-","mappings": [{"from": "(\\w+)","to": "$1x","type": "regex"}]}},{"name": "filed3","translate": {"default": "-","mappings": [{"from": "NumberRange(100,300)","to": "true","type": "function"}]}}]}`
         */
        LogSplit: string;
        /**
         * 本地日志监控计算方式。
         * @example `[{"metric": "metric1","filters": [{"column": "filed2","type": "include","values": ["222222"]}],"groupBys": [{"column": "filed3","name": "filed3"}],"calculates": [{"column": "field1","name": "avg","type": "avg"}]},{"metric": "metric2","filters": [{"column": "field1","type": "include","values": ["11111"]}],"groupBys": [{"column": "filed2","name": "filed2"}],"calculates": [{"column": "field1","name": "avg","type": "avg"}]}]`
         */
        LogProcess: string;
        /**
         * 本地日志数据的示例。
         * @example `{"logContent":"100.116.134.26 1119 - [13/Aug/2019:16:55:46 +0800] POST metrichub-cn-hongkong.aliyun.com /agent/metrics/putLines 200 0 \"-\" \"127.0.0.1:7001\" \"Go-http-client/1.1\" \"-\" \"-\" \"0a98a21a15656865460656276e\"","addData":{"field1":["1119","1119"],"filed2":["POSTx","POST"],"filed3":["true","200"]}}`
         */
        LogSample: string;
        /**
         * SLS日志数据的配置信息。
         * @example `{"express": [],"filter": {"filters": [{"key": "task_type","operator": "=","value": "1"}]},"groupby": [{"alias": "isp","key": "isp","sqlKey": "t.`isp`","valueKey": "isp"}],"interval": 60,"labels": [{"name": "__cms_app__","type": 0,"value": "sitemonitor"}],"statistics": [{"alias": "http_dns_time_avg","function": "avg","key": "http_dns_time"}]}`
         */
        SLSProcess: string;
        /**
         * SLS日志配置。
         * > 仅当`TaskType`为`aliyun_sls`时，显示该参数。
         */
        SLSProcessConfig: {
            /**
             * SLS日志中参数的过滤条件。
             */
            Filter: {
                /**
                 * 多个参数过滤条件之间的关系。取值：
                 * - and（默认值）：满足所有过滤条件，才处理日志。
                 * - or：满足任意过滤条件，即可处理日志。
                 * @example `and`
                 */
                Relation: string;
                /**
                 * SLS日志中参数的过滤条件。
                 */
                Filters: {
                    /**
                     * SLS日志中过滤的参数名称。
                     * @example `host`
                     */
                    SLSKeyName: string;
                    /**
                     * SLS日志中参数值的过滤方式。取值：
                     * - `contain`：包含。
                     * - `notContain`：不包含。
                     * - `>`：大于。
                     * - `<`：小于。
                     * - `=`：等于。
                     * - `!=`：不等于。
                     * - `>=`：大于等于。
                     * - `<=`：小于等于。
                     * @example `=`
                     */
                    Operator: string;
                    /**
                     * SLS日志中参数的过滤值。
                     * @example `200`
                     */
                    Value: string;
                }[];
            };
            /**
             * SLS日志的统计方式。
             */
            Statistics: {
                /**
                 * SLS日志统计的参数名称。
                 * @example `name`
                 */
                SLSKeyName: string;
                /**
                 * 在计算周期内根据选定的统计方法对日志数据进行聚合处理。取值：
                 * - count：计数。
                 * - sum：求和。
                 * - avg：平均值。
                 * - max：最大值。
                 * - min：最小值。
                 * - value：周期内采样。
                 * - countps：计算统计周期内指定字段求count后的每秒平均值。
                 * - sumps：计算统计周期内指定字段求sum后的每秒平均值。
                 * - distinct：去重后计算统计周期内指定字段出现的次数。
                 * - distribution：计算字段值在一个区间内的出现次数。
                 * - percentile：计算字段值的分布值，例如：P50。
                 * @example `count`
                 */
                Function: string;
                /**
                 * SLS日志统计结果的别名。
                 * @example `level_count`
                 */
                Alias: string;
                /**
                 * SLS日志的统计值。
                 * - 当`Function`为`distribution`时，表示统计区间的下限，例如：统计HttpCode的2XX数量，填写200。
                 * - 当`Function`为`percentile`时，表示统计分布的百分位，例如：0.5表示P50。
                 * @example `200`
                 */
                Parameter1: string;
                /**
                 * SLS日志的统计值。
                 * > 仅当`Function`为`distribution`时，需要设置该参数。表示统计区间的上限，例如：统计HttpCode的2XX数量，填写299。
                 * @example `299`
                 */
                Parameter2: string;
            }[];
            /**
             * 对数据进行空间维度聚合，相当于SQL中的Group By。
             */
            GroupBy: {
                /**
                 * SLS日志统计的参数名称。
                 * @example `code`
                 */
                SLSKeyName: string;
                /**
                 * SLS日志统计结果的别名。
                 * @example `ApiResult`
                 */
                Alias: string;
            }[];
            /**
             * SLS日志统计结果的扩展字段的四则运算结果。
             */
            Express: {
                /**
                 * SLS日志统计结果的扩展字段的四则运算结果。
                 * @example `success_count`
                 */
                Express: string;
                /**
                 * SLS日志统计结果的扩展字段的四则运算结果的别名。
                 * @example `SuccRate`
                 */
                Alias: string;
            }[];
        };
    }[];
}
