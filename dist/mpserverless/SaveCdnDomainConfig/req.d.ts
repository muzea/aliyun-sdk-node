export interface SaveCdnDomainConfigRequest {
    /**
     * 租户 ID。
     * @example `UNIULEH***`
     */
    "TenantId"?: string;
    /**
     * 服务空间ID。
     * @example `mp-03c11beb-****-4d02-bb40-65a7ad224f4d`
     */
    "SpaceId": string;
    /**
     * - FILE 配置云存储CDN。
     * - WEB 配置静态网站托管CDN。
     * @example `FILE`
     */
    "Type": string;
    /**
     * - 设置跨域：  {"allowOrigin":"https://*.example.com", "accessOriginControl": true} 。
     * - 删除跨域
     *   - 方式1：{"type":"remove", "configId": "268021436***"}。
     *   - 方式2：{"allowOrigin":"", "configId": "268021436***"}。
     * @example ` {"allowOrigin":"https://*.example.com", "accessOriginControl": true} `
     */
    "CorsConfig"?: string;
    /**
     * - 设置白名单
     *   {"type":"white", "referList":"example.com", "allowEmpty":"off", "disableAst":"off"}
     * - 设置黑名单
     *   {"type":"black", "referList":"example.com", "allowEmpty":"off", "disableAst":"off"}
     * - 删除配置
     *   {"type":"remove", "configId": "268021436***"}
     * @example ` {"type":"white", "referList":"example.com", "allowEmpty":"off", "disableAst":"off"}`
     */
    "RefererConfig"?: string;
    /**
     * - 设置白名单
     *   {"type":"white", "ipList":"192.168.2.0/24"}
     * - 设置黑名单
     *   {"type":"black", "ipList":"192.168.2.0/24"}
     * - 删除配置
     *   {"type":"remove", "configId": "268021436***"}
     * @example ` {"type":"white", "ipList":"192.168.2.0/24"}`
     */
    "IpConfig"?: string;
    /**
     * - 设置白名单
     *   {"type":"white", "uaList":"\*IE\*|\*firefox\*"}
     * - 设置黑名单
     *   {"type":"black", "uaList":"\*IE\*|\*firefox\*"}
     * - 删除配置
     *   {"type":"remove", "configId": "268021436***"}
     * @example ` {"type":"white", "uaList":"*IE*|*firefox*"}`
     */
    "UaConfig"?: string;
    /**
     * 配置鉴权模式，仅“FILE”模式下有效。当开启鉴权模式后，您必须按照鉴权加签算法完成URL签名计算后才能访问文件。您可以通过服务面接口 file.info 或者管控面接口 ListFile 接口快捷获取加签后的URL。
     * - 开启鉴权模式，设置URL默认有效时长1800秒，方式A鉴权
     *   {"authType":"type_a", "authKey":"hkpyytgrnf", "authDelta":1800}
     * - 关闭鉴权模式
     *   {"authType":"no_auth"}
     * @example `{"authType":"type_a", "authKey":"hkpyytgrnf", "authDelta":1800}`
     */
    "AuthConfig"?: string;
}
