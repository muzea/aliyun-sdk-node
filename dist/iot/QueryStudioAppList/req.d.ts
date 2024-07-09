export interface QueryStudioAppListRequest {
    /**
     * 项目ID。
     * 1. 您可登录[物联网应用开发控制台](https://studio.iot.aliyun.com/?spm=a2c4g.11186623.2.8.15b03118ooIo9y)，在页面左上角选择对应实例后，在左侧导航栏单击项目管理。
     * 2. 在普通项目列表中，找到目标项目，单击项目卡片，在地址栏中查看。
     * @example `a123********`
     */
    "ProjectId": string;
    /**
     * 指定从返回结果中的第几页开始显示。默认为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 指定返回结果中每页显示的产品数量，最大值是200。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 应用名称。
     * - 支持中文、英文字母、数字、下划线（_）、短划线（-）和英文圆括号（()）。
     * - 必须以中文、英文字母或数字开头。
     * - 长度不超过30个字符（一个中文算一个字符）。
     * @example `test1`
     */
    "FuzzyName"?: string;
    /**
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 应用类型列表。
     * @example `["webApp", "mobileApp"]`
     */
    "Types": string[];
}
