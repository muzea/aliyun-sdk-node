export interface ModifyLosslessRuleRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 应用名。
     * @example `wx-work-api`
     */
    "AppName"?: string;
    /**
     * 规则所属的微服务命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用ID。
     * @example `c644n5frmc@3e75f25fd4*****`
     */
    "AppId": string;
    /**
     * 无损上线启用状态。取值：
     * - true：启用。
     * - false：禁用。
     * @example `false`
     */
    "Enable": boolean;
    /**
     * 预热时长。
     * @example `60`
     */
    "WarmupTime": number;
    /**
     * 延迟注册时间。
     * @example `1`
     */
    "DelayTime": number;
    /**
     * 预热曲线斜率。
     * @example `1`
     */
    "FuncType": number;
    /**
     * 是否开启“通过就绪检查前完成服务注册”。
     * @example `true`
     */
    "Aligned": boolean;
    /**
     * 是否开启“通过就绪检查前完成服务预热”。
     * @example `true`
     */
    "Related": boolean;
    /**
     * 是否开启上下线处理明细。
     * @example `false`
     */
    "LossLessDetail"?: boolean;
    /**
     * 是否开启主动通知。
     * @example `false`
     */
    "Notice"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
