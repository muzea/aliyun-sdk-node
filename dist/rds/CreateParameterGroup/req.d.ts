export interface CreateParameterGroupRequest {
    /**
     * 创建参数模板的地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 模板的名称。
     * * 以英文字母开头，由英文字母、数字、小数点（.）或下划线（_）组成。
     * * 长度为8~64个字符。
     * @example `test1234`
     */
    "ParameterGroupName": string;
    /**
     * 数据库引擎，取值：
     * - **mysql**
     * - **PostgreSQL**
     * @example `mysql`
     */
    "Engine": string;
    /**
     * 数据库版本，取值：
     * * MySQL：
     *     * **5.6**
     *     * **5.7**
     *     * **8.0**
     * * PostgreSQL：
     *     * **10.0**
     *     * **11.0**
     *     * **12.0**
     *     * **13.0**
     *     * **14.0**
     *     * **15.0**
     * @example `5.7`
     */
    "EngineVersion": string;
    /**
     * 参数和值的JSON串，格式：{"参数1":"参数1值","参数2":"参数2值"......}。可修改的参数请参见[设置MySQL实例参数](~~96063~~)或[设置PostgreSQL实例参数](~~96751~~)。
     * @example `{"back_log":"3000","wait_timeout":"86400"}`
     */
    "Parameters": string;
    /**
     * 参数模板的描述。长度为0~200个字符。
     * @example `test`
     */
    "ParameterGroupDesc"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
