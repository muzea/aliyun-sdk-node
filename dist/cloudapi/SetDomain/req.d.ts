export interface SetDomainRequest {
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    "GroupId": string;
    /**
     * 自定义域名
     * @example `api.demo.com`
     */
    "DomainName": string;
    /**
     * 域名要指定环境访问。不设置该值，则表示该域名能访问所有环境。
     * 如果指定了某个具体的环境，则该域名只能访问这个环境。
     * 可选值：
     * - TEST
     * - PRE
     * - RELEASE
     * 当要修改为全部环境都可访问时，则将该值设置为空串（“”）即可。
     * @example `RELEASE`
     */
    "BindStageName"?: string;
    /**
     * 指定域名要绑定的类型：公网或者内网。默认为INTERNET。可选值：
     * - INTERNET：公网类型
     * - INTRANET：内网类型, 当指定了内网类型后，就不允许该域名从公网请求过来。
     * @example `INTERNET`
     */
    "CustomDomainType"?: string;
    /**
     * 该字段用于当域名冲突时，是否强制绑定该域名。如果选择true，则会强制在该分组绑定此域名，另外冲突的分组上的域名会自动解绑。该操作有一定风险，请谨慎操作。
     * @example `false`
     */
    "IsForce"?: boolean;
    /**
     * 是否将http重定向到https
     * @example `false`
     */
    "IsHttpRedirectToHttps"?: boolean;
}
