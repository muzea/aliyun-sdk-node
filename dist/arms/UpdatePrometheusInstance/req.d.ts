export interface UpdatePrometheusInstanceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * prometheus实例的资源组id
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * prometheus实例ID
     * @example `vpc-xxx`
     */
    "ClusterId": string;
    /**
     * 数据保存时长（天）。
     * @example `90`
     */
    "StorageDuration"?: number;
    /**
     * 存储到期后，自动归档保存的天数（可选值：60、90、180、365）。0表示不归档保存。
     * @example `90`
     */
    "ArchiveDuration"?: number;
}
