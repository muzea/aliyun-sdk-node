interface CreateRobotTaskRequest {
    "RegionId"?: string;
    /**
    * 主账号的ID，即UID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 任务名称。支持中文和英文，0~30个字符。
    * @example `批量任务测试`
    */ "TaskName"?: string;
    /**
    * 指定机器人ID，即话术ID。表示选择哪个机器人/话术发起呼叫。
    * 请在[话术管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list)中查看**话术ID**。
    * @example `1234567`
    */ "DialogId"?: number;
    /**
    * 公司名称，和[资质管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/corp/normal)中的**公司名称**完全一致，该参数为可选。
    * @example `阿里巴巴通信技术(北京)有限公司	`
    */ "CorpName"?: string;
    /**
    * 被叫号码。仅支持中国大陆号码。
    * 支持设置1~1000个被叫号码，号码之间使用英文逗号（,）分隔。
    * @example `13700000000`
    */ "Caller"?: string;
    /**
    * 号码状态(早媒体)识别标识。默认为fasle，如果需要启用早媒体语音识别标识，请设置为true。
    * @example `true`
    */ "NumberStatusIdent"?: boolean;
    /**
    * 是否自动重拨，1位重拨，0为不重拨。
    * @example `1`
    */ "RetryType"?: number;
    /**
    * 需要重拨的通话状态，200010为关机，200011为停机， 200002为占线， 200012为呼损，200005为无法接通。
    * @example `200010,200011`
    */ "RecallStateCodes"?: string;
    /**
    * 重拨次数。
    * @example `1`
    */ "RecallTimes"?: number;
    /**
    * 重拨间隔，单位为分钟，必须大于1。
    * @example `5`
    */ "RecallInterval"?: number;
    /**
    * 是否调用自有线路，默认为false。
    * @example `false`
    */ "IsSelfLine"?: boolean;
}
export { CreateRobotTaskRequest };