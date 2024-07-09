export interface AuthorizeRequest {
    "domain_id": string;
    /**
     * 创建App时返回的AppID
     * @example `47eUHhrzgWBvlLWj`
     */
    "client_id": string;
    /**
     * 回调地址（创建App时填写的回调地址）
     * @example `https://www.aliyunpds.com/sign/callback`
     */
    "redirect_uri": string;
    /**
     * 申请的权限列表, 默认为所有权限
     */
    "scope"?: string[];
    /**
     * 返回类型, 只能填写code
     * @example `code`
     */
    "response_type": string;
    /**
     * 用户自定义字段，会在请求授权成功后的callback带回
     * @example `customdata`
     */
    "state"?: string;
    /**
     * 认证方式，目前支持以下取值：
     * - default （PDS提供的默认登录页面，集成了所有登录方式）
     * - ding （PC钉钉扫码登录）
     * - ding\_sns （手机钉钉账号密码登录）
     * - ram （阿里云子账号登录）
     * - wechat（企业微信扫码登录）
     * - wechat\_app（企业微信内免登）
     * @example `default`
     */
    "login_type": string;
    /**
     * 是否隐藏同意页面
     * @example `true`
     */
    "hide_consent"?: boolean;
}
