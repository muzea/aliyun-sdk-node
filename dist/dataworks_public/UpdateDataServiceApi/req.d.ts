export interface UpdateDataServiceApiRequest {
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10001`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10001`
     */
    "ProjectId": number;
    /**
     * API的ID。
     * @example `10000`
     */
    "ApiId": number;
    /**
     * API的请求方式，可选枚举值包括0（GET）、1（POST）、2（PUT）和3（DELTE）。向导和脚本API支持GET和POST。注册API支持GET、POST、PUT和DELETE。
     * @example `0`
     */
    "RequestMethod": number;
    /**
     * API的返回数据类型，可选枚举值包括0（JSON）和1（XML）。向导和脚本API支持JSON，注册API支持JSON和XML。
     * @example `0`
     */
    "ResponseContentType": number;
    /**
     * 超时时间，单位为毫秒（ms），取值范围为(0, 30000]。
     * @example `10000`
     */
    "Timeout": number;
    /**
     * 可见范围，可选枚举值包括0（工作空间）和1（私有）。
     * @example `0`
     */
    "VisibleRange": number;
    /**
     * API协议，可选枚举值包括0（HTTP）和1（HTTPS）。支持多值，多个值之间使用英文逗号（,）分隔。
     * @example `0,1`
     */
    "Protocols": string;
    /**
     * 向导API的详情，请参见[GetDataServiceApi](~~174013~~)接口wizardDetails字段的JSON String。
     * @example `{"isPagedResponse":true,"wizardConnection":{"connectionId":122786,"tableName":"person"},"wizardRequestParameters":[{"columnName":"id","defaultValue":"","exampleValue":"1","isRequiredParameter":true,"parameterDataType":2,"parameterDescription":"","parameterName":"id","parameterOperator":0,"parameterPosition":0}],"wizardResponseParameters":[{"columnName":"id","exampleValue":"11","parameterDataType":2,"parameterDescription":"","parameterName":"id"}]}`
     */
    "WizardDetails"?: string;
    /**
     * 脚本API的详情，请参见[GetDataServiceApi](~~174013~~)接口scriptDetails字段的JSON String。
     * @example `{"isPagedResponse":false,"script":"select id as id1, name as name1 from person where id=${inputid}","scriptConnection":{"connectionId":122786,"tableName":"person"},"scriptRequestParameters":[{"defaultValue":"","exampleValue":"","isRequiredParameter":true,"parameterDataType":0,"parameterDescription":"","parameterName":"inputid","parameterOperator":0,"parameterPosition":1}],"scriptResponseParameters":[{"exampleValue":"","parameterDataType":0,"parameterDescription":"","parameterName":"id1"},{"exampleValue":"","parameterDataType":0,"parameterDescription":"","parameterName":"name1"}]}`
     */
    "ScriptDetails"?: string;
    /**
     * 注册API的详情，请参见[GetDataServiceApi](~~174013~~)接口registrationDetails字段的JSON String。
     * @example `{"failedResultSample":"fail","registrationErrorCodes":[{"errorCode":"e1","errorMessage":"msg1","errorSolution":"sol1"},{"errorCode":"e2","errorMessage":"msg2","errorSolution":"sol2"}],"registrationRequestParameters":[{"columnName":"","defaultValue":"","exampleValue":"","isRequiredParameter":true,"parameterDataType":0,"parameterDescription":"","parameterName":"id","parameterOperator":0,"parameterPosition":1},{"columnName":"","defaultValue":"xx","exampleValue":"","isRequiredParameter":true,"parameterDataType":0,"parameterDescription":"","parameterName":"cc","parameterOperator":2,"parameterPosition":2}],"serviceContentType":1,"serviceHost":"http://www.baidu.com","servicePath":"/[uid]","serviceRequestBodyDescription":"body","successfulResultSample":"success"}`
     */
    "RegistrationDetails"?: string;
    /**
     * API的路径。
     * @example `/test/2`
     */
    "ApiPath": string;
    /**
     * API的描述信息。
     * @example `测试API描述`
     */
    "ApiDescription": string;
    /**
     * 独享资源组ID。
     * @example `3242432423`
     */
    "ResourceGroupId"?: number;
}
