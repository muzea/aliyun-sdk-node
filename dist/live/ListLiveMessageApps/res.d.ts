export interface ListLiveMessageAppsResponse {
    /**
     * 直播互动应用列表。
     */
    AppList: {
        /**
         * 所查询的直播互动应用ID。
         * @example `coims-****`
         */
        AppId: string;
        /**
         * 直播互动应用的AppKey，在该直播互动应用ID的相关操作鉴权时需要该信息。
         * @example `1234567890****`
         */
        AppKey: string;
        AppName: string;
        /**
         * 直播互动应用签名，互动消息服务SDK需要该信息。
         * @example `H4sIAAAAAAAE/wBwAI//zguHB+lYCilkv7diSkk4GhHQAvMXs5tWyI+I09+uEBiB5sqa28ycJSJFmsd50Mhz8nDrvvqmti+fVaNLC5CMgLvNIy48v1aV9x74LRNFN0+Dxd2Al51xuDNkEIDaEwjqfyxscTXjSr0iQjHu2WgkpQAAAP//AQAA//+yR5XCc*****`
         */
        AppSign: string;
        CreateTime: number;
        DataCenter: string;
        /**
         * 该直播互动应用是否被禁用。
         * @example `false`
         */
        Disable: string;
        ModifyTime: number;
    }[];
    /**
     * 是否有下一页。
     * @example `true`
     */
    HasMore: boolean;
    /**
     * 下一页的起始位置，Hasmore为true时返回。
     * @example `1`
     */
    NextPageToken: number;
    /**
     * 请求ID。
     * @example `B8EB4994-1368-1458-B9F3-5B88D76D734C`
     */
    RequestId: string;
}
