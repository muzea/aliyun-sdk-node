interface ModifyHostAvailabilityRequest {
    "RegionId"?: string;
    /**
    * 任务ID。
    * @example `12345`
    */ "Id": number;
    /**
    * 任务名称。
    * @example `我的探测任务`
    */ "TaskName": string;
    /**
    * 报警通知类型：
    * + 2：电话+短信+邮件+钉钉机器人,
    * + 1：短信+邮件+钉钉机器人
    * + 0：邮件+钉钉机器人
    * @example `2`
    */ "AlertConfig.NotifyType": number;
    "AlertConfigEscalationList": string[];
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": number;
    /**
    * 任务范围：
    * - GROUP：表示做里的所有ECS作为探测任务的探针
    * - INSTANCE：如果选择了INSTANCE 则需要设置InstanceList参数。
    * @example `GROUP`
    */ "TaskScope"?: string;
    /**
    * HTTP探测类型的探测URI地址。
    * @example `http://www.aliyun.com`
    */ "TaskOption.HttpURI"?: string;
    /**
    * 如果探测任务是PING或者TELNET，此处写入要探测的域名或者地址。
    * @example `www.aliyun.com`
    */ "TaskOption.TelnetOrPingHost"?: string;
    /**
    * HTTP探测类型响应字符集。
    * @example `UTF-8`
    */ "TaskOption.HttpResponseCharset"?: string;
    /**
    * 匹配响应的内容。
    * @example `ok`
    */ "TaskOption.HttpResponseMatchContent"?: string;
    /**
    * HTTP探测类型的方法，目前支持GET、POST、HEAD 三种种方法。
    * @example `GET`
    */ "TaskOption.HttpMethod"?: string;
    /**
    * - true：包含内容则报警。
    * - false：不包含内容则报警。
    * @example `true`
    */ "TaskOption.HttpNegative"?: boolean;
    /**
    * 报警开始时间，单位是小时，0表示00:00。
    * @example `0`
    */ "AlertConfig.StartTime"?: number;
    /**
    * 报警结束时间，单位是小时，0表示00:59。
    * @example `23`
    */ "AlertConfig.EndTime"?: number;
    /**
    * 通道沉默时间，单位是秒，默认86400（1天）。
    * @example `86400`
    */ "AlertConfig.SilenceTime"?: number;
    /**
    * URL回调地址。
    * @example `http://www.aliyun.com/webhook.json`
    */ "AlertConfig.WebHook"?: string;
    "InstanceList"?: string[];
}
export { ModifyHostAvailabilityRequest };