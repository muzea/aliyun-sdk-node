export interface DevelopServiceRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `echo`
     */
    "ServiceName": string;
    /**
     * 是否退出开发模式，取值如下：
     * - true：表示退出开发模式。
     * - false（默认值）：表示进入开发模式。
     * @example `true`
     */
    "Exit"?: string;
}
