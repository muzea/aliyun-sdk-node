interface UpdatePortRuleRequest {
    "RegionId"?: string;
    /**
    * 设置转发端口。
    * @example `255`
    */ "FrontPort": number;
    /**
    * 添加源站列表，以逗号分隔。
    * @example `2.2.2.2,3.3.3.3`
    */ "RealServerList": string;
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
export { UpdatePortRuleRequest };