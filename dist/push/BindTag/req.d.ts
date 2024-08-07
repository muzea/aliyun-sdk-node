export interface BindTagRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 设备或account或alias，多个key用逗号分隔，最多支持1000个。
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
     * 绑定的Tag，多个Tag用逗号分隔，一次最多能绑定10个Tag。标签名称设置要小于等于128个字符（中文算1个），每个App最多可创建10000个标签，单设备可以绑定多个标签。
     * >不建议在单个标签上绑定超过十万级设备，否则，发起对该标签的推送可能需要较长的处理时间，无法保障响应速度。此种情况下，建议您采用全推方式，或将设备集合拆分到更细粒度的标签，多次调用推送接口分别推送给这些标签来避免此问题。
     * @example `test_tag,test_tag2`
     */
    "TagName": string;
}
