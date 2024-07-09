export interface AddDirectionalAddressRequest {
    /**
     * 分组ID。
     * @example `10000002595`
     */
    "GroupId": string;
    /**
     * 地址类型：
     * 客户配置： user_defined
     * 阿里云预配：aliyun_defined
     * @example `user_defined`
     */
    "Source": string;
    /**
     * 目标地址类型：
     * Ip：Ip
     * 域名：Domain
     * @example `Domain`
     */
    "AddressType": string;
    /**
     * 目标地址
     * @example `*.aliyun.com`
     */
    "Address": string;
    /**
     * 请求编号，支持幂等。
     * @example `123123`
     */
    "SerialNo"?: string;
    /**
     * 执行成功后是否通过MQ推送，默认false：
     * false：不推送
     * true： 推送（目前不支持）
     * @example `false`
     */
    "MsgNotify"?: boolean;
    /**
     * 检测到的高危风险域名是否强制添加，默认被拦截，不添加
     * @example `false`
     */
    "UrlInsecurityForce"?: boolean;
}
