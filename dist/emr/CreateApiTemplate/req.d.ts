export interface CreateApiTemplateRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群模板名字。
     * @example `DATALAKE模板`
     */
    "TemplateName": string;
    /**
     * 接口名。
     * @example `CreateCluster`
     */
    "ApiName": string;
    /**
     * 接口参数Request内容。
     * @example `content`
     */
    "Content": string;
    /**
     * 资源组ID。
     * @example `rg-acfmzabjyop****`
     */
    "ResourceGroupId"?: string;
}
