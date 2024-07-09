export interface ModifyFullLogTtlRequest {
    /**
     * DDoS高防网站业务日志的存储时长。取值范围：**30**~**180**，单位：天。
     * @example `30`
     */
    "Ttl": number;
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
}
