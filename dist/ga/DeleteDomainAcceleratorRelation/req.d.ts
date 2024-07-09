export interface DeleteDomainAcceleratorRelationRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 待解除关联的全球加速实例ID。最多支持输入50个全球加速ID。
     * 为空时默认删除指定加速域名下所有关联关系。
     */
    "AcceleratorIds"?: string[];
    /**
     * 指定待解除关联的加速域名。
     * @example `www.example.com`
     */
    "Domain": string;
}
