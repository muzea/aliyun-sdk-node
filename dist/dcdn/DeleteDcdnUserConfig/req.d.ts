export interface DeleteDcdnUserConfigRequest {
    /**
     * 要删除的用户功能名称，当前仅支持删除DCDN WAF功能。取值默认为waf。
     * @example `waf`
     */
    "FunctionName"?: string;
}
