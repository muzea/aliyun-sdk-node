export interface CreateParameterGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 产品类别，取值：
     * * **standard**：社区版。
     * * **enterprise**：Tair（Redis企业版）。
     * @example `enterprise`
     */
    "Category": string;
    /**
     * 引擎类型，取值：
     * * **redis**：Redis或Tair内存型。
     * * **tair_pena**：Tair持久内存型。
     * * **tair_pdb**：Tair云盘（ESSD）型。
     * @example `redis`
     */
    "EngineType": string;
    /**
     * 兼容版本，取值：
     * * Redis社区版支持**5.0**、**6.0**和**7.0**。
     * * Tair内存型支持**5.0**、**6.0**。
     * * Tair持久内存型支持**6.0**。
     * * Tair云盘（ESSD）型支持**4.0**。
     * @example `6.0`
     */
    "EngineVersion": string;
    /**
     * 参数模板的名称，需满足如下要求：
     * - 由英文、数字、和下划线（_）组成，以字母开头，不能包含中文。
     * - 长度为8~64个字符。
     * @example `tw_test1`
     */
    "ParameterGroupName": string;
    /**
     * 参数和对应值的JSON格式文本，格式：{"参数1":"参数1值","参数2":"参数2值"......}。
     * > 不同版本可添加的参数以控制台为准。
     * @example `{"hz":"15","#no_loose_disabled-commands":"flushall"}`
     */
    "Parameters": string;
    /**
     * 参数模板的描述。长度为0~200个字符。
     * @example `test`
     */
    "ParameterGroupDesc"?: string;
}
