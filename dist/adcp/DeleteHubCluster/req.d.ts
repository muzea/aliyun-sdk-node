export interface DeleteHubClusterRequest {
    /**
     * 主控实例ID。
     * @example `cd90dd24a86fd42f895a1b77df620****`
     */
    "ClusterId": string;
    /**
     * 是否强制删除ACK One主控实例，取值：
     * - true：强制删除ACK One主控实例
     * - false：不强制删除ACK One主控实例
     * 默认值： false
     * @example `false`
     */
    "Force"?: boolean;
    /**
     * 需要保留资源的列表。
     */
    "RetainResources"?: string[];
}
