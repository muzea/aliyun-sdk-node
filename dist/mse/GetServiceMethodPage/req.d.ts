export interface GetServiceMethodPageRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 服务类型。
     * @example `springCloud`
     */
    "ServiceType"?: string;
    /**
     * 应用所属的MSE命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用名称
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * 应用id。
     * @example `hkhonxxxxx@f3f75ed8ffxxxxx`
     */
    "AppId"?: string;
    /**
     * 服务名。
     * @example `sc-A`
     */
    "ServiceName"?: string;
    /**
     * 服务版本。
     * @example `1.0.0`
     */
    "ServiceVersion"?: string;
    /**
     * 服务分组。
     * @example `ALIYUN`
     */
    "ServiceGroup"?: string;
    /**
     * 服务提供者ip。
     * @example `223.5.5.5`
     */
    "Ip"?: string;
    /**
     * 获取第几页的数据。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每一页多少条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 接口所在的Controller类全称。
     * @example `com.alibabacloud.mse.demo.a.AController`
     */
    "MethodController"?: string;
    /**
     * 接口对应的请求路径。
     * @example `/a`
     */
    "Path"?: string;
    /**
     * 方法名。
     * @example `aMethod`
     */
    "Name"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
