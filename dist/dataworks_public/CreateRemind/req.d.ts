export interface CreateRemindRequest {
    /**
     * 自定义规则的名称，不能超过128个字符。
     * @example `test_error_remind`
     */
    "RemindName": string;
    /**
     * 免打扰截止时间，格式为hh:mm。hh的取值范围为\[0,23\]，mm的取值范围为\[0,59\]。
     * @example `08:00`
     */
    "DndEnd"?: string;
    /**
     * 对象的类型，包括NODE（任务节点）、BASELINE（基线） 、PROJECT（工作空间）和BIZPROCESS（业务流程）。
     * @example `NODE`
     */
    "RemindUnit": string;
    /**
     * RemindUnit（对象类型）为NODE（任务节点）时，监控的任务节点ID。多个ID之间使用英文逗号（,）分隔，一个规则最多监控50个节点。
     * @example `1,2,3`
     */
    "NodeIds"?: string;
    /**
     * 当RemindUnit（对象类型）为BASELINE（基线）时，监控的基线ID。多个ID之间使用英文逗号（,）分隔，一个规则最多监控5条基线。
     * @example `1,2,3`
     */
    "BaselineIds"?: string;
    /**
     * 当RemindUnit（对象类型）为PROJECT（工作空间）时，监控的工作空间ID。一个规则只能监控一个工作空间。
     * @example `9527`
     */
    "ProjectId"?: number;
    /**
     * 当RemindUnit（对象类型）为BIZPROCESS（业务流程）时，监控的业务流程ID。多个业务流程ID之间使用英文逗号（,）分隔，一个规则最多监控5个业务流程。
     * @example `1,2,3`
     */
    "BizProcessIds"?: string;
    /**
     * 触发条件，包括FINISHED（完成）、UNFINISHED（未完成）、ERROR（出错）、 CYCLE_UNFINISHED（周期未完成）和TIMEOUT（运行超时）。
     * @example `FINISHED`
     */
    "RemindType": string;
    /**
     * 最大报警次数。最小值为1，最大值为10，默认值为3。
     * @example `2`
     */
    "MaxAlertTimes"?: number;
    /**
     * 最小报警间隔，单位为秒。最小值为1200，默认值为1800。
     * @example `1800`
     */
    "AlertInterval"?: number;
    /**
     * 不同触发条件的说明如下：
     * - 当RemindType（触发条件）为FINISHED（完成）时，传空。
     * - 当RemindType（触发条件）为UNFINISHED（未完成）时，传参格式为{"hour":23,"minu":59}。hour的取值范围为\[0,47\]，minu的取值范围为\[0,59\]。
     * - 当RemindType（触发条件）为ERROR（出错）时，传空。
     * - 当RemindType（触发条件）为CYCLE_UNFINISHED（周期未完成）时，传参格式为{"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}。JSON字符串key为周期号，取值范围为\[1,288\]。value为该周期对应的未完成时间，格式为hh:mm。hh的取值范围为\[0,47\]，mm的取值范围为\[0,59\]。
     * - 当RemindType（触发条件）为TIMEOUT（运行超时）时，传参格式为1800，单位为秒。即从开始运行起，运行超过30分钟触发报警。
     * @example `{"hour":23,"minu":59}`
     */
    "Detail"?: string;
    /**
     * 报警接收对象的粒度，包括OWNER（任务责任人）和OTHER（指定的人）。
     * @example `OWNER`
     */
    "AlertUnit": string;
    /**
     * 报警方式，取值如下：
     * - MAIL：邮件。
     * - SMS：短信。
     * <props="intl">可使用短信告警的地域为：新加坡、马来西亚（吉隆坡）、德国（法兰克福）。</props>
     * <props="china">- PHONE：电话。仅DataWorks专业版及以上版本支持。</props>
     * - Webhooks（企业微信或飞书机器人），仅当配置 Webhooks 参数后，该报警方式才会生效。
     * 多个报警方式之间使用英文逗号（,）分隔。
     * @example `SMS,MAIL`
     */
    "AlertMethods": string;
    /**
     * - 当AlertUnit（报警接收人）为OWNER（节点任务责任人）时，传空。
     * - 当AlertUnit（报警接收人）为OTHER（指定的人）时，传入指定用户的阿里云UID。多个阿里云UID之间使用英文逗号（,）分隔，最多支持10个。
     * @example `9527952795279527`
     */
    "AlertTargets"?: string;
    /**
     * 钉钉群机器人的webhook地址，多个webhook地址之间使用英文逗号（,）分隔。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=******************************`
     */
    "RobotUrls"?: string;
    /**
     * 企业微信或飞书机器人的webhook地址，多个webhook地址之间使用英文逗号（,）分隔。alertMethods 中需要包含 WEBHOOKS 告警方式。
     * 仅DataWorks企业版支持。
     * 可用地域：华东2（上海）、西南1（成都）、华北3（张家口）、华北2（北京）、华东1（杭州）、华南1（深圳）、中国（香港）、欧洲中部 1（法兰克福）、亚太东南1（新加坡）。
     * @example `https://open.feishu.cn/open-apis/bot/v2/hook/*******`
     */
    "Webhooks"?: string;
}
