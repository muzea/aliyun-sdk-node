export interface CreateDomainRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 全球加速实例ID。
     * 最多支持输入50个全球加速ID。
     */
    "AcceleratorIds": string[];
    /**
     * 待添加的加速域名。
     * 仅支持添加主域名，例如`example.com`。
     * @example `example.com`
     */
    "Domain": string;
}
