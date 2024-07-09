export interface ModifyComponentAssetRequest {
    /**
     * 组件资产的配置，为JSONObject格式。
     * @example `{
        "name": "test asset",
        "componentName": "SLS",
        "params": [
            {
                "name": "end_point",
                "value": "xxx"
            },
            {
                "name": "sub_id",
                "value": "xxxx"
            },
            {
                "name": "access_key",
                "value": "xxxx"
            }
        ]
    }`
     */
    "AssetConfig": string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
