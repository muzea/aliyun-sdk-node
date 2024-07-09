export interface DeleteStudioAppDomainOpenRequest {
    /**
     * 应用ID。可调用[QueryStudioAppList](~~216816~~)查询。
     * @example `a12******`
     */
    "AppId": string;
    /**
     * 域名ID。可调用[QueryStudioAppDomainListOpen](~~216814~~)查看。
     * @example `1`
     */
    "DomainId": number;
    /**
     * 项目ID。
     * 1. 您可登录[物联网应用开发控制台](https://studio.iot.aliyun.com/?spm=a2c4g.11186623.2.8.15b03118ooIo9y)，在页面左上角选择对应实例后，在左侧导航栏单击项目管理。
     * 2. 在普通项目列表中，找到目标项目，单击项目卡片，在地址栏中查看。
     * @example `a123*******`
     */
    "ProjectId": string;
    /**
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
