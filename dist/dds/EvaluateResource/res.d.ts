export interface EvaluateResourceResponse {
    /**
     * 展示当前区域是否有可用的资源。返回值：
     * - **1**：资源足够。
     * - **0**：资源不足。
     * @example `1`
     */
    DBInstanceAvailable: string;
    /**
     * 数据库版本号。
     * @example `4.0`
     */
    EngineVersion: string;
    /**
     * 请求ID。
     * @example `AE2DE465-E45F-481F-ABD8-37D64173****`
     */
    RequestId: string;
    /**
     * 数据库引擎，固定为MongoDB。
     * @example `MongoDB`
     */
    Engine: string;
}
