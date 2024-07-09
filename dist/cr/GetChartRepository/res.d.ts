export interface GetChartRepositoryResponse {
    /**
     * Chart仓库概述
     * @example `test`
     */
    Summary: string;
    /**
     * Chart仓库创建时间
     * @example `1563767620000`
     */
    CreateTime: number;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    InstanceId: string;
    /**
     * Chart仓库状态，取值：
     * - `NORMAL`：正常
     *
     * - `DELETING`：删除中
     * @example `NORMAL`
     */
    RepoStatus: string;
    /**
     * Chart仓库类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PUBLIC`
     */
    RepoType: string;
    /**
     * 请求ID
     * @example `A3F6AB56-DEF4-4FF5-8DE4-680362C0E21F`
     */
    RequestId: string;
    /**
     * Chart仓库ID
     * @example `crcr-c7letfwev5oq****`
     */
    RepoId: string;
    /**
     * Chart仓库修改时间
     * @example `1563767700000`
     */
    ModifiedTime: number;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * Chart仓库所处于的命名空间
     * @example `test`
     */
    RepoNamespaceName: string;
    /**
     * Chart仓库名称
     * @example `test`
     */
    RepoName: string;
    /**
     * 资源组ID
     * @example `rg-acfmv36i4is****`
     */
    ResourceGroupId: string;
}
