export interface ModifyWebPathRequest {
    /**
     * 配置类型。固定取值：**web_path**。
     * @example `web_path`
     */
    "Type"?: string;
    /**
     * web路径配置信息。JSON格式，包含以下字段：
     * - **webPathType**：web路径类型
     * - **webPath**：web路径
     * @example `{
          "webPathType": "customize",
          "webPath": "/root/www****"
    }`
     */
    "Config"?: string;
    /**
     * web目录防护的资产。JSON格式，包含以下字段：
     * - **target**：防护资产
     * - **targetType**：资产类型，固定取值为uuid
     * - **flag**：操作类型
     * @example `[{"target":"0186127a-d33e-4d0c-94fb-8f25f87bc69f","targetType":"uuid","flag":"add"}]`
     */
    "Target"?: string;
}
