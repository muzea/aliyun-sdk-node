interface CreateCcCustomedRuleRequest {
    "RegionId"?: string;
    /**
    * 选择匹配规则，取值：
    * - **prefix**：前缀模式
    * - **match**：完全匹配
    * @example `prefix`
    */ "MatchingRule": string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 允许单一IP的访问次数，取值范围：2~2,000。
    * @example `2`
    */ "VisitCount": number;
    /**
    * 设置规则名称。
    * @example `customeCcRule1`
    */ "Name": string;
    /**
    * 选择阻断类型，取值：
    * - **captcha**：人机识别
    * -  **close**：封禁
    * @example `captcha`
    */ "BlockingType": string;
    /**
    * 设置检测时长，单位为秒，取值范围：5~10,800。
    * @example `5`
    */ "Interval": number;
    /**
    * 设置阻断时间，单位为秒，取值范围：60~86,400。
    * @example `60`
    */ "BlockingTime": number;
    /**
    * 设置防护路径。
    * @example `/a/b/c`
    */ "Uri": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { CreateCcCustomedRuleRequest };