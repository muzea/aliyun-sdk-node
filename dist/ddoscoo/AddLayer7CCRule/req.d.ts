interface AddLayer7CCRuleRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * CC自定义规则名。
    * @example `testCcRule1`
    */ "Name": string;
    /**
    * 规则触发后的操作，取值：
    * - **close**：封禁
    * - **captcha**：人机识别
    * @example `close`
    */ "Act": string;
    /**
    * 访问次数，与**Interval**结和使用。当同一个IP在Interval指定的间隔时间内连续访问Count中指定的访问次数，则触发规则。取值范围为2~2,000。
    * @example `2`
    */ "Count": number;
    /**
    * 间隔时间，与**Count**结和使用。当同一个IP在Interval指定的间隔时间内连续访问Count中指定的访问次数，则触发规则。取值范围为5~10,800。
    * @example `5`
    */ "Interval": number;
    /**
    * URI匹配模式，取值：
    * - **match**：完全匹配。访问请求的URI与指定的Uri完全相同，才计入访问次数。
    * - **prefix**：前缀匹配。访问请求的URI包含指定的Uri，则计入访问次数。
    * @example `match`
    */ "Mode": string;
    /**
    * 若规则触发后动作指定为封禁，设置封禁时间，单位为秒，取值范围为60~86,400。
    * @example `60`
    */ "Ttl": number;
    /**
    * 被防护的URI。
    * @example `/a/b/c`
    */ "Uri": string;
    "SourceIp"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
}
export { AddLayer7CCRuleRequest };