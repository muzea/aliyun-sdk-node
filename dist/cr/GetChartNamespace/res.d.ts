export interface GetChartNamespaceResponse {
    /**
     * 仓库默认类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PRIVATE`
     */
    DefaultRepoType: string;
    /**
     * 命名空间ID
     * @example `crcn-43dhbjbyt2xl****`
     */
    NamespaceId: string;
    /**
     * 命名空间状态，取值
     * - `NORMAL`：正常
     * - `DELETING`：删除中
     * @example `NORMAL`
     */
    NamespaceStatus: string;
    /**
     * 请求ID
     * @example `CD71CF13-93AA-4805-848B-69B2DD543A9A`
     */
    RequestId: string;
    /**
     * 请求返回状态
     * @example `success`
     */
    Code: string;
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    InstanceId: string;
    /**
     * 是否自动创建镜像仓库，取值：
     * - `true`：自动创建镜像仓库
     * - `false`：不自动创建镜像仓库
     * @example `true`
     */
    AutoCreateRepo: boolean;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 命名空间名称
     * @example `ns1`
     */
    NamespaceName: string;
    /**
     * 资源组ID
     * @example `rg-acfmv36i4is****`
     */
    ResourceGroupId: string;
}
