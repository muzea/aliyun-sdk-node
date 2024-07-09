export interface UnbindTagRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 设备、账号或别名，多个key用逗号分隔，最多支持1000个。
     * @example `e2ba19de97604f55b16557673****`
     */
    "ClientKey": string;
    /**
     * ClientKey的类型。可取值：
     * - **DEVICE**：设备
     * - **ACCOUNT**：账号
     * - **ALIAS**：别名
     * @example `DEVICE`
     */
    "KeyType": string;
    /**
     * 绑定的Tag，多个Tag用逗号分隔，系统总共支持1万个Tag，此接口一次最多能解绑10个Tag。长度限制：不大于128字符。
     * @example `test_tag1,test_tag2`
     */
    "TagName": string;
}
