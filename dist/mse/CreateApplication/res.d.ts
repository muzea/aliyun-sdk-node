export interface CreateApplicationResponse {
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `68D91223-CCE9-5F9C-B538-20F617DA48B1`
     */
    RequestId: string;
    /**
     * 节点数据。
     * @example `data`
     */
    Data: {
        /**
         * 应用状态，1表示正常。
         * @example `1`
         */
        Status: number;
        /**
         * 额外信息。
         * @example `{\"rpcTypes\":[\"dubbo\",\"springCloud\"]}`
         */
        ExtraInfo: string;
        /**
         * 应用名称。
         * @example `spring-cloud-a`
         */
        AppName: string;
        /**
         * 更新时间。
         * @example `1632979237663`
         */
        UpdateTime: number;
        /**
         * 用户的对应的LicenseKey。
         * @example `xxxxxxxx@xxxxxxxxxx`
         */
        LicenseKey: string;
        /**
         * 创建时间。
         * @example `1631001140913`
         */
        CreateTime: number;
        /**
         * 应用ID。
         * @example `xxxxxxxx@xxxxxxxxxx`
         */
        AppId: string;
        /**
         * 阿里云用户ID。
         * @example `1888888888`
         */
        UserId: string;
        /**
         * 应用的部署方式。
         * - ACK：表示阿里云容器服务K8s。
         * - Normal：表示其他接入方式。
         * @example `ACK`
         */
        Source: string;
        /**
         * 应用的编程语言。
         * @example `JAVA`
         */
        Language: string;
        /**
         * 地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * MSE命名空间名字。
         * @example `prod`
         */
        Namespace: string;
        /**
         * 版本号。
         * @example `1.0.0`
         */
        Version: string;
    };
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
