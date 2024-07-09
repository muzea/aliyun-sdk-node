export interface CreateParameterGroupRequest {
    /**
     * 参数模板所在地域的地域ID。
     * > 您可以通过接口[DescribeRegions](~~98041~~)查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库引擎类型，当前仅支持**MySQL**。
     * @example `MySQL`
     */
    "DBType": string;
    /**
     * 数据库引擎版本号，取值范围如下：
     * - **5.6**
     * - **5.7**
     * - **8.0**
     * @example `8.0`
     */
    "DBVersion": string;
    /**
     * 参数模板的名称，需满足如下要求：
     * - 由英文、数字、和下划线（_）组成，以字母开头，不能包含中文，不能以下划线（_）结尾。
     * - 长度为8~64个字符。
     * @example `test_group`
     */
    "ParameterGroupName": string;
    /**
     * 参数模板的描述，长度为0~199个字符。
     * @example `test_group`
     */
    "ParameterGroupDesc"?: string;
    /**
     * 参数及其值的JSON串，参数的值都是字符串类型，例如`{"wait_timeout":"86400","innodb_old_blocks_time":"1000"}`。
     * > 您可以通过接口[DescribeParameterTemplates](~~207428~~)查看目标数据库引擎版本数据库集群的所有参数详情，包括参数名称、取值范围等。
     * @example `{"wait_timeout":"86400","innodb_old_blocks_time":"1000"}`
     */
    "Parameters": string;
    /**
     * 资源组ID。
     * @example `rg-**********`
     */
    "ResourceGroupId"?: string;
}
