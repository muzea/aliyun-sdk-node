export interface CreateFunctionRequest {
    /**
     * 函数名称。
     * 函数名称长度在1-30个字符间，只能包含字母、数字、下划线和中划线，不能以数字、中划线开头。
     * > 云函数的名称必须和要上传的Node.js代码包名称一致。
     * @example `demoFunction`
     */
    "Name": string;
    /**
     * 云函数的描述信息。
     * @example `测试函数`
     */
    "Desc"?: string;
    /**
     * 云函数所属的服务空间ID。
     * @example `226e5213-697c-4a52-b4ff-xxxxx`
     */
    "SpaceId": string;
    /**
     * 云函数执行环境，默认值为nodejs14，可选值为nodejs12,nodejs14等，详情参见文档[《运行时支持列表》](https://help.aliyun.com/document_detail/2717618.html)。
     * @example `nodejs12`
     */
    "Runtime"?: string;
    /**
     * 函数内存规格，取值为64的倍数，至少128MB，至多2048MB。
     * @example `512`
     */
    "Memory"?: number;
    /**
     * 函数超时时间，单位为秒，默认值为5，取值范围1-7200。
     * @example `5`
     */
    "Timeout"?: number;
}
