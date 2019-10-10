interface SaveDomainGroupRequest {
    "RegionId"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户IP
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 域名分组名称
    * @example `测试分组`
    */ "DomainGroupName"?: string;
    /**
    * 域名分组编号，当不传该参数时为创建分组，传该参数时更新域名分组名称。
    * @example `123456`
    */ "DomainGroupId"?: number;
}
export { SaveDomainGroupRequest };