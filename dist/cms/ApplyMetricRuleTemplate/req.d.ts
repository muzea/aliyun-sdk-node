interface ApplyMetricRuleTemplateRequest {
    "RegionId"?: string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": number;
    /**
    * 报警模板ID。
    * @example `123`
    */ "TemplateIds": string;
    /**
    * 通道沉默周期，单位为秒。默认86400秒（即1天）。监控数据持续超过报警规则阈值时，每个沉默周期内只发送1次报警通知。
    * @example `86400`
    */ "SilenceTime"?: number;
    /**
    * 报警生效的起始时间周期， 选值为00-23，表示00：00 到23：00。
    * @example `00`
    */ "EnableStartTime"?: number;
    /**
    * 报警生效的结束时间周期， 选值为00-23，表示00：59 到23：59。
    * @example `23`
    */ "EnableEndTime"?: number;
    "NotifyLevel"?: number;
    /**
    * - GROUP_INSTANCE_FIRST：实例分组优先， 即应用报警模板的时候，以分组实例优先，如果分组中不存在这种实例则忽略模板中的规则。
    * - ALARM_TEMPLATE_FIRST：模板实例优先，即应用报警模板的时候，不管分组中是否存在这种实例，都创建出这种规则。
    * @example `GROUP_INSTANCE_FIRST`
    */ "ApplyMode"?: string;
    /**
    * 报警发生时会回调指定的URL地址。向URL发送POST请求。
    * @example `http://www.aliyun.com`
    */ "Webhook"?: string;
}
export { ApplyMetricRuleTemplateRequest };