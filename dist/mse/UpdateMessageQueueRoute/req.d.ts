export interface UpdateMessageQueueRouteRequest {
    /**
     * 此应用的未打标环境，忽略的标签。
     */
    "Tags"?: string[];
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 消息灰度的启用状态。取值：
     * - `true`：启用。
     * - `false`：禁用。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522baa898`
     */
    "AppId": string;
    /**
     * 消息灰度过滤侧。
     * @example `Server`
     */
    "FilterSide"?: string;
    /**
     * MSE命名空间名字
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用名称
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
