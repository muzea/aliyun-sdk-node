export interface DescribeSuspEventUserSettingRequest {
    /**
     * 访问源的ip地址，用户发起请求时无须主动填写。
     * @example `127.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * Id，用户发起请求时无须主动填写。
     * @example `123`
     */
    "Id"?: number;
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From"?: string;
}
