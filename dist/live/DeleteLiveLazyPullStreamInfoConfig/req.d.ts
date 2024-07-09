export interface DeleteLiveLazyPullStreamInfoConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * > 如果需要删除全部App对应配置，则取值**ali_all_app**。
     * @example `ali_all_app`
     */
    "AppName": string;
}
