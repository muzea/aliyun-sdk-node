export interface DeleteApplicationRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "Name": string;
    /**
     * 是否强制删除应用。取值范围：
     * - true
     * - false
     * @example `false`
     */
    "Force"?: boolean;
    /**
     * 是否保留应用管理创建的资源
     * - true
     * - false
     * @example `false`
     */
    "RetainResource"?: boolean;
}
