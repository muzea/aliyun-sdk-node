interface CreatePortRuleRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 设置转发端口。
    * @example `255`
    */ "FrontPort"?: number;
    /**
    * 设置源站端口。
    * @example `255`
    */ "BackPort"?: number;
    /**
    * 设置转发协议，取值：
    * - **tcp**
    * - **udp**
    * @example `tcp`
    */ "ProxyType"?: string;
    /**
    * 添加源站列表，以逗号分隔。
    * @example `2.2.2.2,3.3.3.3`
    */ "RealServerList"?: string;
    /**
    * 要操作的高防实例IP。
    * @example `1.1.1.1`
    */ "Ip"?: string;
}
export { CreatePortRuleRequest };