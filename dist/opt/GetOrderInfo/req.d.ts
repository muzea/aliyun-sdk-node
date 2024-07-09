export interface GetOrderInfoRequest {
    /**
     * 指定购买的优化求解器License类别信息，包含一种类别：
     * - `MP`：数学规划
     * @example `MP`
     */
    "RelService": string;
    /**
     * 指定购买的求解器版本信息，目前仅支持一种：
     * - `1`：本地运行版
     * @example `1`
     */
    "ResourceType": number;
    /**
     * 是否包含已释放的实例
     * @example `true`
     */
    "ListReleased"?: boolean;
}
