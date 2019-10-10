interface CreateScheduledTaskRequest {
    /**
    * 定时任务所属地域的ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * 定时任务触发时需要执行的操作，填写伸缩规则的唯一标识符。
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/cCBpdYdQuBe2cUxOdu6****`
    */ "ScheduledAction": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 定时任务的显示名称。2~64个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。同一账号同一地域内唯一。
    * 默认值：ScheduledScalingTaskId。
    * @example `scheduled****`
    */ "ScheduledTaskName"?: string;
    /**
    * 定时任务的描述信息。2~200个英文或中文字符。
    * @example `fortest`
    */ "Description"?: string;
    /**
    * 重复执行定时任务的结束时间。 按照ISO8601标准表示，并需要使用UTC时间。
    * 格式为：YYYY-MM-DDThh:mmZ。不能填写自创建当天起365日后的时间。
    * 您需要同时指定RecurrenceType、RecurrenceValue和RecurrenceEndTime。
    * @example `2014-08-17T16:55Z`
    */ "RecurrenceEndTime"?: string;
    /**
    * 定时任务触发的时间点。 按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。不能填写自创建当天起90日后的时间。
    * 如果指定了RecurrenceType，则此属性指定的时间点，默认为循环执行的时间点。
    * 如果未指定RecurrenceType，则按指定的日期和时间执行一次。
    * @example `2014-08-17T16:52Z`
    */ "LaunchTime"?: string;
    /**
    * 重复执行定时任务的类型，取值范围：
    * - Daily：每多少天重复执行一次定时任务。
    * - Weekly：每周指定几天重复执行一次定时任务。
    * - Monthly：每月内指定几天重复执行一次定时任务。
    * - Cron：按照指定的Cron表达式执行定时任务。
    * 您需要同时指定RecurrenceType、RecurrenceValue和RecurrenceEndTime。
    * @example `Daily`
    */ "RecurrenceType"?: string;
    /**
    * 重复执行定时任务的数值。
    * - RecurrenceType取Daily时，只能填一个值，取值范围：1~31。
    * - RecurrenceType取Weekly时，可以填入多个值，填多个值时使用英文逗号（,）分隔。比如，周日、周一、周二、周三、周四、周五、周六的值依次为：0,1,2,3,4,5,6。
    * - RecurrenceType取Monthly时，格式为A-B。A、B的取值范围为1~31，并且B必须大于等于A。
    * - RecurrenceType取Cron时，表示UTC时间，支持分、时、日、月、星期的5域表达式，支持通配符英文逗号（,）、英文问号（?）、连词符（-）、星号（*）、井号（#）、斜线（/）、L和W。
    * 您需要同时指定RecurrenceType、RecurrenceValue和RecurrenceEndTime。
    * @example `1`
    */ "RecurrenceValue"?: string;
    /**
    * 是否启动定时任务。
    * - true：启动任务。
    * - false：停止任务 。
    * 默认值：true。
    * @example `true`
    */ "TaskEnabled"?: boolean;
    /**
    * 定时任务触发操作失败后，在此时间内重试。单位为秒，取值范围：0~21600。
    * 默认值：600。
    * @example `600`
    */ "LaunchExpirationTime"?: number;
}
export { CreateScheduledTaskRequest };