export interface GetInstanceUsageResponse {
    /**
     * 镜像命名空间使用量
     * @example `4`
     */
    NamespaceUsage: string;
    /**
     * 镜像仓库配额数
     * @example `1000`
     */
    RepoQuota: string;
    /**
     * 请求ID
     * @example `A726E801-7FCF-43F9-AF1C-51B3E65D3E7A`
     */
    RequestId: string;
    /**
     * Chart命名空间的配额数
     * @example `50`
     */
    ChartNamespaceQuota: string;
    /**
     * 镜像仓库使用量
     * @example `2`
     */
    RepoUsage: string;
    /**
     * 镜像命名空间配额
     * @example `100`
     */
    NamespaceQuota: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 创建的Chart仓库的数量
     * @example `5`
     */
    ChartRepoUsage: string;
    /**
     * 创建的Chart命名空间数量
     * @example `2`
     */
    ChartNamespaceUsage: string;
    /**
     * Chart仓库的配额数
     * @example `5000`
     */
    ChartRepoQuota: string;
    /**
     * vpc配额
     * @example `5`
     */
    VpcQuota: string;
    /**
     * 已绑定vpc数量
     * @example `2`
     */
    VpcUsage: string;
}
