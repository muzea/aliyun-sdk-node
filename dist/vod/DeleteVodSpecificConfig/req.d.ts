export interface DeleteVodSpecificConfigRequest {
    /**
     * 点播加速域名。
     * @example `www.example.com`
     */
    "DomainName": string;
    /**
     * 配置ID。
     * @example `2317****`
     */
    "ConfigId": string;
    /**
     * 删除配置的环境。取值：
     * - online：生产环境
     * - gray：模拟环境
     * @example `online`
     */
    "Env"?: string;
}
