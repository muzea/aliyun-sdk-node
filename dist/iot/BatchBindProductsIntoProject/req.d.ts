export interface BatchBindProductsIntoProjectRequest {
    /**
     * 实例ID。
     * - 企业版实例：必须传入此参数。您可在物联网平台控制台的**实例概览**页面，查看您的企业版实例ID。
     * - 公共实例：无需传入此参数。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 项目ID。
     * 1. 您可登录[物联网应用开发控制台](https://studio.iot.aliyun.com/?spm=a2c4g.11186623.2.8.1e7830fagdybMb)，在页面左上角选择对应实例后，在左侧导航栏单击项目管理。
     * 2. 在普通项目列表中，找到目标项目，单击项目卡片，在地址栏中查看。
     * @example `a123********`
     */
    "ProjectId": string;
    /**
     * 需要关联到项目的产品ProductKey列表。
     * @example `a1BwAGV****`
     */
    "ProductKeys": string[];
}
