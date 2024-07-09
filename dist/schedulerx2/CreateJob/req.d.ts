export interface CreateJobRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间ID，在控制台的命名空间页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用ID，在控制台的应用管理页面中获取。
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 任务类型，目前支持以下几种任务类型：
     * - java
     * - python
     * - shell
     * - go
     * - http
     * - xxljob
     * - dataworks
     * - k8s
     * - springschedule
     * @example `java`
     */
    "JobType": string;
    /**
     * 任务名。
     * @example `helloworld`
     */
    "Name": string;
    /**
     * 任务描述。
     * @example `Test`
     */
    "Description"?: string;
    /**
     * 任务执行模式，目前支持以下几种任务执行模式：
     * - **单机运行**：standalone
     * - **广播运行**：broadcast
     * - **可视化MapReduce**：parallel
     * - **MapReduce**：batch
     * - **分片运行**：sharding
     * @example `standalone`
     */
    "ExecuteMode": string;
    /**
     * 任务接口类完整路径。
     * 当您选择Java任务类型时，才有该字段且必须填写完整路径。
     * @example `com.alibaba.schedulerx.test.helloworld`
     */
    "ClassName"?: string;
    /**
     * 任务类型选择为Python/Shell/Go/K8s时，必填的脚本代码内容。
     * @example `echo 'hello'`
     */
    "Content"?: string;
    /**
     * 用户自定义参数，运行时可以获取。
     * @example `test`
     */
    "Parameters"?: string;
    /**
     * 最大同时运行实例数量，默认值为1，即上次触发没有运行结束，即使到了运行时刻也不会进行下次触发。
     * @example `1`
     */
    "MaxConcurrency"?: number;
    /**
     * 错误最大重试次数，根据业务需求填写，默认值为0。
     * @example `0`
     */
    "MaxAttempt"?: number;
    /**
     * 错误重试间隔，单位s，默认值为30。
     * @example `30`
     */
    "AttemptInterval"?: number;
    /**
     * 并行网格任务高级配置，单次拉取子任务数，默认值为100。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 并行网格任务高级配置，单机单次触发执行线程数，默认值为5。
     * @example `5`
     */
    "ConsumerSize"?: number;
    /**
     * 并行网格任务高级配置，子任务队列缓存上限，默认值为10000。
     * @example `10000`
     */
    "QueueSize"?: number;
    /**
     * 并行网格任务高级配置，子任务分发线程数，默认值为5。
     * @example `5`
     */
    "DispatcherSize"?: number;
    /**
     * 时间类型，目前支持以下几种时间类型：
     * - **cron**：1
     * - **fixed_rate**：3
     * - **second_delay**：4
     * - **one_time** ：5
     * - **api**：100
     * @example `1`
     */
    "TimeType": number;
    /**
     * 时间表达式，根据选择的时间类型设置时间表达式。
     * - **cron**：填写标准的cron表达式，支持在线验证。
     * - **api**：无时间表达式。
     * - **fixed_rate**：填写具体固定频率值，单位s。如30表示每隔30s触发一次。
     * - **second_delay**：填写固定延迟多少秒执行一次（1s~60s可选）。
     * - **one_time**: 填写指定时间（yyyy-MM-dd HH:mm:ss）或者时间戳（毫秒），比如"2022-10-10 10:10:00"
     * @example `0 0/10 * * * ?`
     */
    "TimeExpression"?: string;
    /**
     * cron类型可以选择填写自定义日历。
     * @example `暂不支持，不用填写`
     */
    "Calendar"?: string;
    /**
     * cron类型可以选择时间偏移，单位s。
     * @example `2400`
     */
    "DataOffset"?: number;
    /**
     * 时区
     * @example `GMT+8`
     */
    "Timezone"?: string;
    /**
     * 超时报警开关。取值如下：
     * - **true**：开启超时报警开关。
     * - **false**：关闭超时报警开关。
     * @example `false`
     */
    "TimeoutEnable"?: boolean;
    /**
     * 超时阈值，单位s，默认值7200。
     * @example `7200`
     */
    "Timeout"?: number;
    /**
     * 超时终止开关。取值如下：
     * - **true**：开启超时终止开关。
     * - **false**：关闭超时终止开关。
     * @example `false`
     */
    "TimeoutKillEnable"?: boolean;
    /**
     * 失败报警开关。取值如下：
     * - **true**：开启失败报警开关。
     * - **false**：关闭失败报警开关。
     * @example `false`
     */
    "FailEnable"?: boolean;
    /**
     * 连续失败报警次数
     * @example `2`
     */
    "FailTimes"?: number;
    /**
     * 是否开启无可用机器报警。
     * - **true**：开启无可用机器报警开关。
     * - **false**：关闭无可用机器报警开关。
     * @example `false`
     */
    "MissWorkerEnable"?: boolean;
    /**
     * 成功通知开关
     * @example `false`
     */
    "SuccessNoticeEnable"?: boolean;
    /**
     * 报警发送形式，目前只支持短信发送报警，默认值sms。
     * @example `sms`
     */
    "SendChannel"?: string;
    /**
     * 并行网格任务高级配置，子任务失败重试次数 ，默认值为0。
     * @example `0`
     */
    "TaskMaxAttempt"?: number;
    /**
     * 并行网格任务高级配置，子任务失败重试间隔，默认值为0。
     * @example `0`
     */
    "TaskAttemptInterval"?: number;
    /**
     * 任务联系人信息。
     */
    "ContactInfo"?: {
        /**
         * 报警接收手机号。
         * @example `1381111****`
         */
        UserPhone: string;
        /**
         * 报警联系人姓名。
         * @example `张三`
         */
        UserName: string;
        /**
         * 报警联系人邮箱。
         * @example `test***@***.com`
         */
        UserMail: string;
        /**
         * 报警联系人钉钉群机器人webhook地址，参考文档：[钉钉开发文档](https://open.dingtalk.com/document/org/application-types)。
         * @example `https://oapi.dingtalk.com/robot/send?access_token=**********`
         */
        Ding: string;
    }[];
    /**
     * 0：禁用，1：启用，默认启用。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 如果是k8s任务类型，需要配置该参数
     * Job任务：{"resource":"job"}
     * Shell任务：{"image":"busybox","resource":"shell"}
     * @example `{"resource":"job"}`
     */
    "XAttrs"?: string;
}
