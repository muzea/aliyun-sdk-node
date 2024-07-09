export interface CreateStudioAppDomainOpenRequest {
    /**
     * 应用ID。可调用[QueryStudioAppList](~~216816~~)查询。
     * @example `a12*******`
     */
    "AppId": string;
    /**
     * 域名。
     * @example `www.aliyun.test.com`
     */
    "Host": string;
    /**
     * 请求协议。
     * - **https**
     * - **http**
     * @example `https`
     */
    "Protocol": string;
    /**
     * 项目ID。
     * 1. 您可登录[物联网应用开发控制台](https://account.aliyun.com/login/login.htm?qrCodeFirst=false&oauth_callback=https%3A%2F%2Fstudio.iot.aliyun.com%2F%3Fspm%3Da2c4g.11186623.2.8.1e7830fagdybMb)，在页面左上角选择对应实例后，在左侧导航栏单击项目管理。
     * 2. 在普通项目列表中，找到目标项目，单击项目卡片，在地址栏中查看。
     * @example `a123******`
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
