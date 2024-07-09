export interface SetReqHeaderConfigRequest {
    /**
     * 加速域名，多个用逗号（,）隔开。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回源自定义头参数。
     * @example `testkey`
     */
    "Key": string;
    /**
     * 回源自定义头取值。
     * @example `testvalue`
     */
    "Value": string;
    /**
     * 配置ID。
     * @example `123`
     */
    "ConfigId"?: number;
}
