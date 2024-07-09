export interface QueryStudioAppPageListOpenRequest {
    /**
     * 应用ID。可调用[QueryStudioAppList](~~216816~~)查询。
     * @example `a12*******`
     */
    "AppId": string;
    /**
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 获取应用页面。
     * - **true**：获取已发布的应用页面。
     * - **false（默认）**：获取未发布的应用页面。
     * @example `false`
     */
    "IsRelease"?: boolean;
    /**
     * 指定从返回结果中的第几页开始显示。默认为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 返回结果中每页显示的条数。最小值1，最大值50，默认值20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 项目ID。
     * 1.您可登录[物联网应用开发控制台](https://account.aliyun.com/login/login.htm?qrCodeFirst=false&oauth_callback=https%3A%2F%2Fstudio.iot.aliyun.com%2F%3Fspm%3Da2c4g.11186623.2.8.1e7830fagdybMb)，在页面左上角选择对应实例后，在左侧导航栏单击项目管理。
     * 2. 在普通项目列表中，找到目标项目，单击项目卡片，在地址栏中查看。
     * @example `a12******`
     */
    "ProjectId": string;
}
