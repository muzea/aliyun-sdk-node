interface DeletePortRuleRequest {
    "RegionId"?: string;
    /**
    * 要操作的转发端口。
    * @example `255`
    */ "FrontPort": number;
    /**
    * 要操作的高防实例IP。
    * @example `1.1.1.1`
    */ "Ip": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { DeletePortRuleRequest };