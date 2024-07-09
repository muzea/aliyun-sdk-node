export interface SaveDataServiceApiTestResultRequest {
    /**
     * API的ID。您可以通过调用[ListDataServiceApis](~~174012~~)接口获取。
     * @example `417381955954827`
     */
    "ApiId": number;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10001`
     */
    "ProjectId": number;
    /**
     * 非必填参数，API测试成功的结果示例。
     * @example `{  "data": {    "totalNum": 0,    "pageSize": 10,    "rows": [],    "pageNum": 1  },  "errCode": 0,  "requestId": "0bc14a561678159140664515*****",  "errMsg": "success",  "apiLog": null}`
     */
    "ResultSample"?: string;
    /**
     * 非必填参数，API测试失败的结果示例。
     * @example `{  "apiLog": null,  "data": null,  "errCode": 1108110622,  "errMsg": "数据源查询失败",  "requestId": "0bc14a*****5902762031***"}`
     */
    "FailResultSample"?: string;
    /**
     * 是否使用系统自动生成结果，如果不传resultSample/failResultSample参数，则使用系统默认生成的。
     * @example `false`
     */
    "AutoGenerate"?: boolean;
}
