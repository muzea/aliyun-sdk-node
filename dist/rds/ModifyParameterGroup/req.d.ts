export interface ModifyParameterGroupRequest {
    /**
     * 参数模板ID。可以通过接口DescribeParameterGroups查看参数模板ID。
     * @example `rpg-13ppdh****`
     */
    "ParameterGroupId": string;
    /**
     * 参数模板名称。
     * * 以英文字母开头，由英文字母、数字、小数点（.）或下划线（_）组成。
     * * 长度为8~64个字符。
     * >不传入该参数，则保持原参数模板名称。
     * @example `testgroup1`
     */
    "ParameterGroupName"?: string;
    /**
     * 修改参数模板的描述。长度为0~200个字符。
     * >不传入该参数，则保持原参数模板描述。
     * @example `test`
     */
    "ParameterGroupDesc"?: string;
    /**
     * 参数和值的JSON串，格式：{"参数1":"参数1值","参数2":"参数2值"......}。可修改的参数请参见[设置MySQL实例参数](~~96063~~)或[设置PostgreSQL实例参数](~~96751~~)。
     * > * 如果**ModifyMode**参数为**Individual**，则传入该参数会覆盖原来的参数模板。
     * > * 如果**ModifyMode**参数为**Collectivity**，则传入该参数会在原有参数模板的基础上进行新增或更改。
     * > * 不传入该参数，则保持原参数信息。
     * @example `{"back_log":"3000"}`
     */
    "Parameters"?: string;
    /**
     * 地域ID。可以通过接口DescribeRegions查看地域ID。
     * >参数模板的地域不支持修改，您可以使用接口CloneParameterGroup复制参数模板到其他地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 参数模板的修改模式。取值：
     * * **Collectivity**（默认值）：新增或变更。
     * >将**Parameters**参数中传入的内容新增到当前参数模板，或变更当前参数模板中已有参数，当前参数模板中的其他参数不受影响。
     * * **Individual**：覆盖。
     * >将当前参数模板中的内容替换成**Parameters**参数中传入的内容。
     * @example `Collectivity`
     */
    "ModifyMode"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
