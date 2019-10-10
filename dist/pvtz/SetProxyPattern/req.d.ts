interface SetProxyPatternRequest {
    "RegionId"?: string;
    /**
    * Zone的全局ID。
    * @example `AgIDE0OQ_149`
    */ "ZoneId": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 取值：
    * - **ZONE**: 全部劫持解析
    * - **RECORD**: 开启递归解析代理
    * @example `ZONE`
    */ "ProxyPattern"?: string;
    /**
    * 用户IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { SetProxyPatternRequest };