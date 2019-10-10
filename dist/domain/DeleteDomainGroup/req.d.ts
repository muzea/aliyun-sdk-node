interface DeleteDomainGroupRequest {
    "RegionId"?: string;
    /**
    * 用户IP
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 域名分组编号
    * @example `123456`
    */ "DomainGroupId"?: number;
}
export { DeleteDomainGroupRequest };