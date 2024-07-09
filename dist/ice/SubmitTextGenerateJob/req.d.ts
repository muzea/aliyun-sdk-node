export interface SubmitTextGenerateJobRequest {
    /**
     * 任务标题
     * \- 长度不超过128字节。
     * \- UTF8编码。
     * @example `测试标题`
     */
    "Title"?: string;
    /**
     * 任务描述 长度不超过1024字节 UTF8编码
     * @example `测试描述`
     */
    "Description"?: string;
    /**
     * 任务类型
     * @example `MarketingCopy`
     */
    "Type"?: string;
    /**
     * 生成配置，包括关键词、字数、输出文案数
     * @example `{"keywords":"新开店蛋糕，动物奶油","textLength":100,"targetCount":3}`
     */
    "GenerateConfig"?: string;
    /**
     * 自定义设置，Json 格式，长度限制为 512 字节。支持[自定义回调地址配置](https://help.aliyun.com/document_detail/451631.html)。
     * @example `{"NotifyAddress":"http://xx.xx.xxx"}或{"NotifyAddress":"https://xx.xx.xxx"}或{"NotifyAddress":"ice-callback-demo"}`
     */
    "UserData"?: string;
}
