export interface UpdateDomainStateRequest {
    /**
     * 待更新ICP备案状态的加速域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
