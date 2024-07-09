export interface ModifyParameterGroupRequest {
    "RegionId"?: string;
    /**
     * 产品类别，取值：
     * - **standard**：社区版
     * - **enterprise**：Tair（Redis企业版）
     * @example `enterprise`
     */
    "Category": string;
    /**
     * 参数模版ID。
     * @example `sys-001****`
     */
    "ParameterGroupId": string;
    /**
     * 参数模板的描述。长度为0~200个字符。
     * @example `test`
     */
    "ParameterGroupDesc"?: string;
    /**
     * 修改参数模板的名称，需满足如下要求：
     * * 由英文、数字、和下划线（_）组成，以字母开头，不能包含中文。
     * * 长度为8~64个字符。
     * @example `testGroupName`
     */
    "ParameterGroupName"?: string;
    /**
     * 参数和对应值的JSON格式文本，格式：{"参数1":"参数1值","参数2":"参数2值",...}，传入的值将覆盖原内容。
     * > 不同版本可添加的参数以控制台为准。
     * @example `{"hz":"12"}`
     */
    "Parameters": string;
}
