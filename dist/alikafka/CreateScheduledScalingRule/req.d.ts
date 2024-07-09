export interface CreateScheduledScalingRuleRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `alikafka_serverless-cn-vxxxxxxxx
    `
     */
    "InstanceId": string;
    /**
     * 定时策略规则名称。
     * > 不可以与同实例其他规则名称重复。
     * @example `test`
     */
    "RuleName": string;
    /**
     * 定时弹性预留生产规格（单位：MB/s）。
     * > ReservedPubFlow 和 ReservedSubFlow 入参必须至少有一个高于当前规格。
     * @example `120`
     */
    "ReservedPubFlow": number;
    /**
     * 定时弹性预留消费规格（单位：MB/s）。
     * > ReservedSubFlow 和 ReservedPubFlow 入参必须至少有一个高于当前规格。
     * @example `120`
     */
    "ReservedSubFlow": number;
    /**
     * 定时类型。取值如下：
     * - at ：只调度一次。
     * -  repeat：重复调度。
     * @example `at`
     */
    "ScheduleType": string;
    /**
     * 持续时间（单位：分钟），一次定时弹性任务持续的时间。
     * > 入参不少于15分钟。
     * @example `60`
     */
    "DurationMinutes": number;
    /**
     * 时区（协调世界时）。
     * @example `GMT+8
    `
     */
    "TimeZone": string;
    /**
     * 开始执行定时策略时间。
     * 如果是单次调度的策略类型，需要保证开始执行时间晚于当前时间30分钟以上。
     * ><notice>为避免服务端不停地执行升配、降配任务，不同定时任务之间的时间间隔要至少大于 60 分钟。></notice>
     * @example `1714467540000`
     */
    "FirstScheduledTime": number;
    /**
     * 启用或禁用定时任务策略。取值范围如下：
     * - **true**：启用。
     * - **false**：禁用。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 当 ScheduleType 为 repeat 时则需要填写参数，枚举值为
     *       <li> Daily：每天定时调度。
     *       <li> Weekly：每周定时调度。
     * @example `Weekly`
     */
    "RepeatType"?: string;
    /**
     * 每周的类型。支持多日重复执行。
     */
    "WeeklyTypes"?: string[];
}
