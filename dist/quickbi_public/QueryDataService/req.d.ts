export interface QueryDataServiceRequest {
    /**
     * 数据服务中的API ID，请参见：[数据服务](~~144980~~)。
     * @example `f4cc43bc3***`
     */
    "ApiId": string;
    /**
     * 数据服务的查询条件，以Key和Value的形式传入。map类型的字符串。其中，Key为请求参数的参数名，Value为请求参数的参数值。Key和Value必须成对出现。
     * **说明：**
     * -  请求参数的操作符设置为**枚举筛选**时支持value包含多个值，此时value值的格式是JSON形式的List。例如： `area=["华东","华北","华南"] `
     * - 对于日期，根据类型不同，提供不同的入参格式：
     *     - 年：2019
     *     - 季：2019Q1
     *     - 月：201901  （携带0）
     *
     *     - 周：2019-52
     *     - 日：20190101
     *     - 时：14:00:00 （分、秒为00）
     *
     *     - 分：14:12:00 （秒为00）
     *     - 秒：14:34:34
     * @example `{ "area": ["华东", "华北"],  "shopping_date": "2019Q1",  }`
     */
    "Conditions"?: string;
    /**
     * 返回参数的参数名列表，List 类型字符串。
     * @example `["area", "city", "price", "date"]`
     */
    "ReturnFields"?: string;
}
