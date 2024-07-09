export interface EvaluateLocalExtendDiskRequest {
    /**
     * 地域ID。可调用[describeregions](~~26243~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `rm-wz9s06u4drm******
    `
     */
    "DBInstanceName": string;
    /**
     * 扩容后的存储容量（单位：GB）。
     * @example `1000`
     */
    "Storage"?: number;
    /**
     * 资源组ID。
     * @example `rg-ac****`
     */
    "ResourceGroupId"?: string;
}
