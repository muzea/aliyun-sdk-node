export interface ListJobsResponse {
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息，仅出错时返回错误信息。
     * @example `namespace can not find namespace: 1a72ecb1-b4cc-400a-a71b-20cdec9b****, namespaceSource:null`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `71BCC0E3-64B2-4B63-A870-AFB64EBCB58B`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务列表信息。
     */
    Data: {
        /**
         * 任务列表及任务详情。
         */
        Jobs: {
            /**
             * 任务状态。取值如下：
             * - **1**：启用，可以被正常触发。
             * - **0**：禁用，不会被触发。
             * @example `1`
             */
            Status: number;
            /**
             * JAR包的OSS完整路径。
             * @example `https:doc***.oss-cn-hangzhou.aliyuncs.com/sc-****-D-0.0.2-SNAPSHOT.jar`
             */
            JarUrl: string;
            /**
             * 错误最大重试次数，根据业务需求填写，默认值为0。
             * @example `0`
             */
            MaxAttempt: number;
            /**
             * 用户自定义参数，运行时可以获取。
             * @example `test`
             */
            Parameters: string;
            /**
             * 任务描述。
             * @example `Test`
             */
            Description: string;
            /**
             * 任务ID。
             * @example `99341`
             */
            JobId: number;
            /**
             * 任务执行模式，可能出现的结果如下：
             * - **standalone**：单机运行
             * - **broadcast**：广播运行
             * - **parallel**：并行计算
             * - **grid**：内存网格
             * - **batch**：网格计算
             * - **shard**：分片运行
             * @example `standalone`
             */
            ExecuteMode: string;
            /**
             * 最大同时运行实例数量，默认值为1， 即上次触发没有运行结束，即使到了运行时刻也不会进行下次触发。
             * @example `1`
             */
            MaxConcurrency: string;
            /**
             * 任务名。
             * @example `helloworld`
             */
            Name: string;
            /**
             * 任务接口类完整路径。
             * 当您的任务是Java任务类型时，才有该字段信息。
             * @example `com.alibaba.schedulerx.test.helloworld`
             */
            ClassName: string;
            /**
             * python、shell、go任务类型的脚本代码内容。
             * @example `echo 'hello'`
             */
            Content: string;
            /**
             * 任务类型
             * @example `java`
             */
            JobType: string;
            /**
             * 错误重试间隔，单位s，默认值为30。
             * @example `30`
             */
            AttemptInterval: number;
            /**
             * 高级配置，仅限于并行计算、内存网格和网格计算使用。
             */
            MapTaskXAttrs: {
                /**
                 * 子任务失败重试次数。
                 * @example `0`
                 */
                TaskMaxAttempt: number;
                /**
                 * 子任务失败重试间隔。
                 * @example `0`
                 */
                TaskAttemptInterval: number;
                /**
                 * 单机单次触发执行线程数，默认值为5。
                 * @example `5`
                 */
                ConsumerSize: number;
                /**
                 * 子任务队列缓存上限，默认值为10000。
                 * @example `10000`
                 */
                QueueSize: number;
                /**
                 * 子任务分发线程数，默认值为5。
                 * @example `5`
                 */
                DispatcherSize: number;
                /**
                 * 并行任务单次拉取子任务数，默认值为100。
                 * @example `100`
                 */
                PageSize: number;
            };
            /**
             * 时间配置信息
             */
            TimeConfig: {
                /**
                 * cron类型可以选择填写自定义日历。
                 * @example `工作日`
                 */
                Calendar: string;
                /**
                 * 时间配置类型，目前支持以下几种时间类型：
                 * - **1**：cron
                 * - **3**：fix_rate
                 * - **4**：second_delay
                 * - **100**：api
                 * @example `1`
                 */
                TimeType: number;
                /**
                 * cron类型可以选择时间偏移，单位s。
                 * @example `0`
                 */
                DataOffset: number;
                /**
                 * 时间表达式，目前支持以下几种时间表达类型：
                 * - **api**：无时间表达式。
                 * - **fix_rate**：具体固定频率值，如30表示每隔30s触发一次。
                 * - **cron**：标准的cron表达式。
                 * - **second_delay**：固定延迟多少秒执行一次（1s~60s可选）。
                 * @example `0 0/10 * * * ?`
                 */
                TimeExpression: string;
            };
            /**
             * 任务监控信息。
             */
            JobMonitorInfo: {
                /**
                 * 联系人信息。
                 */
                ContactInfo: {
                    /**
                     * 用户手机号。
                     * @example `1381111****`
                     */
                    UserPhone: string;
                    /**
                     * 用户名称。
                     * @example `userA`
                     */
                    UserName: string;
                    /**
                     * 钉钉群机器人webhook地址
                     * @example `https://oapi.dingtalk.com/robot/send?access_token=**********`
                     */
                    Ding: string;
                    /**
                     * 用户邮件地址
                     * @example `user@mail.com`
                     */
                    UserMail: string;
                }[];
                /**
                 * 报警开关以及阈值配置。
                 */
                MonitorConfig: {
                    /**
                     * 超时阈值，单位s，默认7200。
                     * @example `12300`
                     */
                    Timeout: number;
                    /**
                     * 报警发送形式，目前只支持sms。
                     * @example `sms`
                     */
                    SendChannel: string;
                    /**
                     * 超时终止本次触发开关，默认关闭。
                     * - **true**：开启
                     * - **false**：关闭
                     * @example `false`
                     */
                    TimeoutKillEnable: boolean;
                    /**
                     * 超时报警开关。取值如下：
                     * - **true**：开启
                     * - **false**：关闭
                     * @example `true`
                     */
                    TimeoutEnable: boolean;
                    /**
                     * 失败报警开关。取值如下：
                     * - **true**：开启
                     * - **false**：关闭
                     * @example `true`
                     */
                    FailEnable: boolean;
                    /**
                     * 是否开启无可用机器报警
                     * @example `true`
                     */
                    MissWorkerEnable: boolean;
                };
            };
            /**
             * 任务扩展字段
             * @example `{"pageSize":5,"queueSize":10,"consumerSize":5,"dispatcherSize":5,"taskMaxAttempt":0,"taskAttemptInterval":0,"globalConsumerSize":1000,"taskDispatchMode":"push"}`
             */
            XAttrs: string;
        }[];
    };
}
