export interface DescribeApplicationImageResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 应用镜像信息。
     */
    Data: {
        /**
         * 保留字段，暂无特殊含义。
         * @example `保留字段`
         */
        Logo: string;
        /**
         * 镜像仓库类型。当前仅支持容器镜像服务。
         * @example `ALI_HUB`
         */
        RepoOriginType: string;
        /**
         * 保留字段，暂无特殊含义。
         * @example `保留字段`
         */
        CrUrl: string;
        /**
         * 镜像标签。
         * @example `latest`
         */
        RepoTag: string;
        /**
         * 保留字段。
         * @example `保留字段`
         */
        RepoType: string;
        /**
         * 镜像仓库名称。
         * @example `demo`
         */
        RepoName: string;
        /**
         * 镜像命名空间。
         * @example `demo`
         */
        RepoNamespace: string;
        /**
         * 地域。
         * @example `cn-beijing`
         */
        RegionId: string;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取应用镜像信息是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
