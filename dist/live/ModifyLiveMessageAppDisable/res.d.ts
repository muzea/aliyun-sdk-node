export interface ModifyLiveMessageAppDisableResponse {
    /**
     * 请求ID。
     * @example `6AA1AE11-EA78-1FD4-A966-6BA843073F6D`
     */
    RequestId: string;
    /**
     * 需要修改信息的直播互动应用ID。
     * @example `ab6b5740****`
     */
    AppId: string;
    /**
     * 直播互动应用签名，互动消息服务SDK需要该信息。
     * @example `H4sIAAAAAAAE/wBwAI//zguHB+lYCilkv7diSkk4GhHQAvMXs5tWyI+I09+uEBiB5sqa28ycJSJFmsd50Mhz8nDrvvqmti+fVaNLC5CMgLvNIy48v1aV9x74LRNFN0+Dxd2Al51xuDNkEIDaEwjqfyxscTXjSr0iQjHu2WgkpQAAAP//AQAA//+yR5XCc****`
     */
    AppSign: string;
    /**
     * 该直播互动应用是否禁用。
     * @example `true`
     */
    Disable: boolean;
}
