export interface GetResourceTypeTemplateResponse {
    /**
     * 请求ID。
     * @example `87F54B2B-AEF0-4C33-A72A-3F8856A575E9`
     */
    RequestId: string;
    /**
     * 模板主体的结构。
     * 长度为1~51,200个字节。
     * 更多信息，请参见[模板语法](~~28857~~)。
     * > 不建议使用该返回参数，建议使用TemplateContent代替。
     * @example `{"ROSTemplateFormatVersion": "2015-09-01"}`
     */
    TemplateBody: any;
    /**
     * 模板主体的结构，JSON格式。
     * 更多信息，请参见[模板语法](~~28857~~)。
     * @example `{
          "ROSTemplateFormatVersion": "2015-09-01"
    }`
     */
    TemplateContent: string;
}
