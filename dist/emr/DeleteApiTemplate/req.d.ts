export interface DeleteApiTemplateRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群模板ID。
     * @example `at-****`
     */
    "TemplateId": string;
    /**
     * 接口名。
     * @example `CreateCluster`
     */
    "ApiName": string;
    /**
     * 资源组ID。
     * @example `rg-acfmzabjyop****`
     */
    "ResourceGroupId"?: string;
}
