export interface QueryStudioProjectListRequest {
    /**
     * 项目名称。
     * - 支持中文、英文字母、数字、下划线（_）、短划线（-）、英文圆括号（()）。
     * - 必须以中文、英文字母或数字开头。
     * - 长度不超过30个字符（一个中文算一个字符）。
     * @example `test1`
     */
    "Name"?: string;
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
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
