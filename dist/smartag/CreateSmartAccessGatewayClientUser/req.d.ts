interface CreateSmartAccessGatewayClientUserRequest {
    /**
    * 智能接入网关APP实例所在地域。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 智能接入网关APP实例ID。
    * @example `sag-gnhe6sywtare5******`
    */ "SmartAGId": string;
    /**
    * 普通用户的邮箱地址，用于管理员向普通用户发送登录APP的账号信息。
    * @example `test@example.com`
    */ "UserMail": string;
    /**
    * 带宽，单位Kbps，最大2000Kbps。
    * @example `20`
    */ "Bandwidth": number;
    "OwnerId"?: number;
    /**
    * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
    * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
    * @example `doctest`
    */ "UserName"?: string;
    /**
    * * 如果开启，需要设置APP的IP地址。当前账号始终保持以选择的IP地址接入。
    *   >设置APP的IP地址必须在私网网段内。
    * * 如果关闭，系统自动从私网网段内分配可用IP地址，每次重连IP地址都会重新分配。
    * @example `10.**.**.**`
    */ "ClientIp"?: string;
    /**
    * 登录智能接入网关APP的密码。
    * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
    * @example `duuf**`
    */ "Password"?: string;
}
export { CreateSmartAccessGatewayClientUserRequest };