export interface UpdateApiTemplateRequest {
    /**
     * 区域ID。
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
     * @example `CreateCluster`
     */
    "Content": string;
    /**
     * 资源组ID。
     * @example `rg-acfmzabjyop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群模板ID。
     * @example `AT-****`
     */
    "TemplateId": string;
}
