export interface UpdateDomainRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 待修改的加速域名。
     * @example `example.com`
     */
    "TargetDomain": string;
    /**
     * 新的加速域名。
     * 仅支持添加主域名，例如`example.net`。
     * @example `example.net`
     */
    "Domain": string;
}
