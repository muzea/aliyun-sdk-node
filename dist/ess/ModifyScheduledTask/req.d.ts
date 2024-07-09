export interface ModifyScheduledTaskRequest {
    /**
     * 定时任务的ID。
     * @example `edRtShc57WGXdt8TlPbr****`
     */
    "ScheduledTaskId": string;
    /**
     * 定时任务的名称。2-64个字符，以大小写字母、数字或中文开头，可包含（.）、下划线（_）或中划线（-）。同一账号同一地域内唯一。
     * @example `scheduled****`
     */
    "ScheduledTaskName"?: string;
    /**
     * 定时任务的描述信息。2-200个字符。
     * @example `Test scheduled task.`
     */
    "Description"?: string;
    /**
     * 如果伸缩方式为选择已有伸缩规则时，才会出现该配置项，请您选择已创建的伸缩规则，填写伸缩规则的唯一标识符，可在伸缩规则详情页查看。
     * > 不支持同时设置`ScheduledAction`和`ScalingGroupId`。
     * @example `ari:acs:ess:cn-hangzhou:14069264****:scalingrule/asr-bp12tcnol686y1ik****`
     */
    "ScheduledAction"?: string;
    /**
     * 重复执行定时任务的结束时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。不能填写自修改当天起365日后的时间。
     * @example `2014-08-20T16:55Z`
     */
    "RecurrenceEndTime"?: string;
    /**
     * 定时任务执行的时间点。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。不能填写自修改当天起90日后的时间。
     * - 如果指定了`RecurrenceType`，则此属性指定的时间点，默认为循环执行的时间点。
     * - 如果未指定`RecurrenceType`，则按指定的日期和时间执行一次。
     * @example `2014-08-18T10:52Z`
     */
    "LaunchTime"?: string;
    /**
     * 设置定时任务重复的周期类型，支持按日、周、月等周期性执行。取值范围：
     *
     * - Daily：每多少天重复执行一次定时任务。
     * - Weekly：每周指定几天重复执行一次定时任务。
     * - Monthly：每月内指定几天重复执行一次定时任务。
     * - Cron：按照指定的Cron表达式执行定时任务。
     * 修改后，`RecurrenceType`和`RecurrenceValue`需要同时有效。
     * @example `Daily`
     */
    "RecurrenceType"?: string;
    /**
     * 定时任务重复执行的周期类型对应数值。
     * - `RecurrenceType`取值为`Daily`时，只能填一个值，取值范围：1~31。
     * - `RecurrenceType`取值为`Weekly`时，可以填入多个值，填多个值时使用半角逗号（,）分隔。例如，周日、周一、周二、周三、周四、周五、周六的值依次为：`0,1,2,3,4,5,6`。
     * - `RecurrenceType`取值为`Monthly`时，格式为`A-B`。A、B的取值范围为1~31，并且B必须大于等于A。
     * - `RecurrenceType`取值为`Cron`时，表示UTC时间，支持分、时、日、月、星期的五个域表达式，支持通配符半角逗号（,）、半角问号（?）、短划线（-）、星号（*）、井号（#）、正斜线（/）、L和W。
     * 修改后，`RecurrenceType`和`RecurrenceValue`需要同时有效。
     * @example `2`
     */
    "RecurrenceValue"?: string;
    /**
     * 是否启动定时任务。取值范围：
     * - true：启动定时任务。
     * - false：停止定时任务。
     * 默认值：true。
     * @example `true`
     */
    "TaskEnabled"?: boolean;
    /**
     * 定时任务触发操作失败后，弹性伸缩将在重试过期时间内继续尝试执行定时任务。单位为秒，取值范围：0~1800。
     * 默认值：600。
     * @example `600`
     */
    "LaunchExpirationTime"?: number;
    /**
     * 定时任务的伸缩方式为设置伸缩组内实例数量时，指定伸缩组内实例的最小数量。
     * @example `0`
     */
    "MinValue"?: number;
    /**
     * 定时任务的伸缩方式为设置伸缩组内实例数量时，指定伸缩组内实例的最大数量。
     * @example `10`
     */
    "MaxValue"?: number;
    /**
     * 定时任务的伸缩方式为设置伸缩组内实例数量时，指定伸缩组内实例的期望实例数。
     * > 伸缩组必须支持设置期望实例数，即在创建该伸缩组时指定了`DesiredCapacity`。
     * @example `10`
     */
    "DesiredCapacity"?: number;
    /**
     * 如果伸缩方式为设置伸缩组内实例数量，才会出现该配置项，请您填写定时任务触发时需要修改实例数量的伸缩组ID。指定`ScalingGroupId`后，您需要为`MinValue`、`MaxValue`和`DesiredCapacity`中至少一个参数指定数量。
     * > 不支持同时设置`ScheduledAction`和`ScalingGroupId`。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId"?: string;
}
