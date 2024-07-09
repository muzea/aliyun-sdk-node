export interface CreateSmartAccessGatewayClientUserRequest {
    /**
     * 智能接入网关App实例所在地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID。
     * @example `sag-gnhe6sywtare5****`
     */
    "SmartAGId": string;
    /**
     * 用户名，同一个智能接入网关App实例下的用户名不可以重复。
     * 名称长度为7~33个字符，必须以大小写字母或数字开头，可以包含下划线（_） 、at（@）、半角句号（.）和短划线（-）。
     * > 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
     * @example `doctest`
     */
    "UserName"?: string;
    /**
     * - 如果开启客户端App服务，需要设置App的IP地址。当前账号始终保持以选择的IP地址接入。
     * > 设置App的IP地址必须在私网网段内。
     * - 如果关闭客户端App服务，系统自动从私网网段内分配可用IP地址，每次重连IP地址都会重新分配。
     * @example `10.0.XX.XX`
     */
    "ClientIp"?: string;
    /**
     * 普通用户的邮箱地址，用于管理员向普通用户发送登录App的账号信息。
     * @example `username@example.com`
     */
    "UserMail": string;
    /**
     * 带宽峰值。单位：Kbps。取值范围：**1 Kbps~20000 Kbps**。默认值：**2000 Kbps**。
     * @example `20`
     */
    "Bandwidth": number;
    /**
     * 登录智能接入网关App的密码。
     * 密码命名规则： 8~32位字符，以（A-Za-z0-9）开头，可包含数字、英文大小写、下划线（_）、at（@）、短划线（-）。
     * @example `duuf****`
     */
    "Password"?: string;
}
