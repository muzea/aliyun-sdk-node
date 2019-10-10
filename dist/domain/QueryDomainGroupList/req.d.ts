interface QueryDomainGroupListRequest {
    "RegionId"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 域名分组名称
    * @example `默认分组`
    */ "DomainGroupName"?: string;
    /**
    * 是否展示正在删除中的域名分组，默认为false
    * @example `false`
    */ "ShowDeletingGroup"?: boolean;
}
export { QueryDomainGroupListRequest };