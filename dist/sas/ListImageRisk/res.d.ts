export interface ListImageRiskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `050ACC7A-D4FD-55C6-B861-BA9569C1****`
     */
    RequestId: string;
    /**
     * 镜像风险信息列表。
     */
    ImageRiskList: {
        /**
         * 镜像命名空间。
         * @example `vultar***`
         */
        RepoNamespace: string;
        /**
         * 镜像仓库名称。
         * @example `scan_test`
         */
        RepoName: string;
        /**
         * 镜像标签。
         * @example `0.1.0`
         */
        Tag: string;
        /**
         * 镜像仓库所在的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 镜像digest值。
         * @example `3f8efc2184cf1d24936b49c27286a284714b77be34c80c9ee38ca6bf322445****`
         */
        Digest: string;
        /**
         * 镜像仓库ID。
         * @example `crr-bk2l746eyxca1****`
         */
        RepoId: string;
        /**
         * 仓库类型，取值：
         * - `PUBLIC`：公开
         * - `PRIVATE`：私有
         * @example `PRIVATE`
         */
        RepoType: string;
        /**
         * 镜像仓类型。取值：
         * - **acr**：ACR
         * - **harbor**：Harbor
         * - **quay**：Quay
         * - **CI/CD**：Jenkins
         * @example `harbor`
         */
        RegistryType: string;
        /**
         * 镜像服务的Endpoint列表。
         * @example `https://172.20.XXX.XXX/test`
         */
        Endpoints: string;
        /**
         * 镜像ID。
         * @example `f922bfeb6960436fe3f0e7b62fc6b9a0b47980986669c367c22433269404****`
         */
        ImageId: string;
        /**
         * 镜像版本不可变性，如果不可变该仓库下除 latest 之外的镜像版本均不可以覆盖。取值：
         * - **0**：可变
         * - **1**：不可变
         * @example `0`
         */
        TagImmutable: number;
        /**
         * 安全事件统计结果。
         * @example `{
            "baselineNum": 0,
            "newSuspicious": 0,
            "vul": 0
        }`
         */
        Statistics: string;
        /**
         * 镜像仓库注册状态。取值：
         * - **IN_SAS**：仓库已经在云安全中心注册
         * - **NOT\_IN\_SAS**：仓库没有在云安全中心注册
         * @example `IN_SAS`
         */
        ImageAccessType: string;
        /**
         * 镜像。
         * @example `.aliyuncs.com/sas_test/baseline:exploit`
         */
        Image: string;
        /**
         * 镜像的唯一标识。
         * @example `624778f3-5bf2-423c-ac0c-47a62c05****`
         */
        Uuid: string;
        /**
         * Endpoint信息列表。
         */
        EndPointList: {
            /**
             * Endpoint域名名称列表。
             */
            Domains: string[];
            /**
             * Endpoint域名类型。取值：
             * - **internet**：公网
             * - **intranet**：私网
             * @example `internet`
             */
            Type: string;
        }[];
        /**
         * 镜像仓库公网访问地址。
         * @example `****registry-registry.cn-shenzhen-finance-1.cr.aliyuncs.com/xxxx/docker-****`
         */
        InternetURLs: string;
        /**
         * 镜像仓库VPC内访问地址。
         * @example `****-registry-registry-vpc.cn-shenzhen-finance-1.cr.aliyuncs.com/xxxx/docker-****`
         */
        VpcURLs: string;
    }[];
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 查询到的数据总条数。
         * @example `23`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `3`
         */
        Count: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
    };
}
