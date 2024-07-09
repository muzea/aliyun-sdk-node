export interface UpdateRemindRequest {
    /**
     * 自定义规则的ID。
     * @example `1234`
     */
    "RemindId": number;
    /**
     * 自定义规则的名称，不能超过128个字符。
     * @example `update_remindname`
     */
    "RemindName"?: string;
    /**
     * 免打扰的截止时间，即在设置的时间之前不会发送报警。格式为hh:mm。hh的取值范围为\[0,23\] ，mm的取值范围为\[0,59\]。
     * @example `08:00`
     */
    "DndEnd"?: string;
    /**
     * 监控对象的类型。取值如下：
     * - NODE（节点）
     * - BASELINE（基线）
     * - PROJECT（工作空间）
     * - BIZPROCESS（业务流程）
     * @example `NODE`
     */
    "RemindUnit"?: string;
    /**
     * 监控对象为节点时的节点ID。一个规则最多监控50个节点，多个节点ID之间使用英文逗号（,）分隔。
     * 当RemindUnit参数取值为NODE（节点）时，当前参数生效。
     * @example `1,2,3`
     */
    "NodeIds"?: string;
    /**
     * 监控对象为基线时的基线ID。一个规则最多监控5条基线，多个基线ID之间使用英文逗号（,）分隔。
     * 当RemindUnit参数取值为BASELINE（基线）时，当前参数生效。
     * @example `1,2,3`
     */
    "BaselineIds"?: string;
    /**
     * 监控对象为工作空间时的工作空间ID。一个规则只能监控一个工作空间。
     * 当RemindUnit参数取值为PROJECT（工作空间）时，当前参数生效。
     * @example `1234`
     */
    "ProjectId"?: number;
    /**
     * 监控对象为业务流程时的业务流程ID。一个规则最多监控5个业务流程，多个业务流程ID之间使用英文逗号（,）分隔。
     * 当RemindUnit参数取值为BIZPROCESS（业务流程）时，当前参数生效。
     * @example `1,2,3`
     */
    "BizProcessIds"?: string;
    /**
     * 触发报警规则的条件。取值如下：
     * - FINISHED（完成）：表示从实例运行的起始时间点开始监控，在任务运行成功时系统发送报警。
     * - UNFINISHED（未完成）：表示从实例运行的起始时间点开始监控，到指定的目标时间点任务仍未结束运行，则系统发送报警。
     * - ERROR（出错）：表示从实例运行的起始时间点开始监控，当任务运行出错时，系统发送报警。
     * -  CYCLE_UNFINISHED（周期未完成）：表示在指定的周期内，实例仍未结束运行，则系统发送报警。通常用于监控以小时为周期单位的实例任务。
     * - TIMEOUT（运行超时）：表示从实例运行的起始时间点开始监控，到指定的运行时长后，该任务仍未结束运行，则系统发送报警。通常用于监控实例任务的运行时间。
     * 更多触发报警规则的内容，详情请参见[自定义规则](~~138172~~)。
     * @example `FINISHED`
     */
    "RemindType"?: string;
    /**
     * 最大报警次数。取值范围为\[1,10\]，默认值为3。
     * @example `3`
     */
    "MaxAlertTimes"?: number;
    /**
     * 报警间隔，单位为秒。最小值为1200，默认值为1800。
     * @example `1800`
     */
    "AlertInterval"?: number;
    /**
     * 不同触发条件的参数配置详情，具体如下：
     * - 当RemindType（触发条件）取值为FINISHED（完成）时，当前参数配置为空。
     * - 当RemindType（触发条件）取值为UNFINISHED（未完成）时，当前参数的配置格式示例为{"hour":23,"minu":59}。hour的取值范围为\[0,47\]，minu的取值范围为\[0,59\]。
     * - 当RemindType（触发条件）取值为ERROR（出错）时，当前参数配置为空。
     * - 当RemindType（触发条件）取值为CYCLE_UNFINISHED（周期未完成）时，当前参数的配置格式示例为{"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}。
     * JSON字符串的key为周期号，取值范围为\[1,288\]；value为该周期对应的未完成时间，格式为hh:mm。hh的取值范围为\[0,47\]，mm的取值范围为\[0,59\]。
     * - 当RemindType（触发条件）取值为TIMEOUT（运行超时）时，当前参数的配置格式示例为1800，单位为秒。即从实例开始运行起，运行超过30分钟触发报警。
     * @example `{"hour":23,"minu":59}`
     */
    "Detail"?: string;
    /**
     * 报警的接收对象，包括OWNER（任务责任人）和OTHER（指定的用户）。
     * @example `OWNER`
     */
    "AlertUnit"?: string;
    /**
     * 报警的方式，取值如下：
     * - MAIL（邮件）
     * - SMS（短信）
     * - PHONE（电话），仅DataWorks专业版及以上版本支持使用电话方式接收报警。
     * - DINGROBOTS（钉钉机器人），仅当配置RobotUrls参数后，该报警方式才会生效。
     * - Webhooks（企业微信或飞书机器人），仅当配置 Webhooks 参数后，该报警方式才会生效。
     * 多个报警方式之间使用英文逗号（,）分隔。
     * @example `SMS,MAIL`
     */
    "AlertMethods"?: string;
    /**
     * 不同报警接收人的配置详情：
     * - 当AlertUnit（报警接收人）取值为OWNER（节点任务责任人）时，当前参数配置为空。
     * - 当AlertUnit（报警接收人）取值为OTHER（指定的用户）时，当前参数配置为指定用户的阿里云UID。多个阿里云UID之间使用英文逗号（,）分隔，最多支持指定10个用户接收报警。
     * @example `9527952795279527`
     */
    "AlertTargets"?: string;
    /**
     * 是否启用报警规则，取值如下：
     * - true（开启）
     * - false（关闭）
     * @example `true`
     */
    "UseFlag"?: boolean;
    /**
     * 钉钉群机器人的WebHook地址，多个WebHook地址之间使用英文逗号（,）分隔。
     * 当该参数配置为undefined时，系统会清空钉钉机器人的WebHook地址。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=******************************`
     */
    "RobotUrls"?: string;
    /**
     * 企业微信或飞书机器人的webhook地址，多个webhook地址之间使用英文逗号（,）分隔。alertMethods 中需要包含 WEBHOOKS 告警方式。当该参数配置为undefined时，系统会清空WebHook地址。
     * 仅DataWorks企业版支持。
     * 可用地域：华东2（上海）、西南1（成都）、华北3（张家口）、华北2（北京）、华东1（杭州）、华南1（深圳）、中国（香港）、欧洲中部 1（法兰克福）、亚太东南1（新加坡）。
     * @example `https://open.feishu.cn/open-apis/bot/v2/hook/*******
    `
     */
    "Webhooks"?: string;
}
