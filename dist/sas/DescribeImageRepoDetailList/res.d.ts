export interface DescribeImageRepoDetailListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 镜像仓的总数量。
         * @example `19`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 镜像仓信息列表。
     */
    ImageRepoResponses: {
        /**
         * 镜像仓地址。
         * @example `[
              {
                    "domains": [
                          "****.cn-shenzhen.cr.aliyuncs.com"
                    ],
                    "type": "internet"
              },
              {
                    "domains": [
                          "****.cn-shenzhen.cr.aliyuncs.com"
                    ],
                    "type": "intranet"
              },
              {
                    "domains": [
                          "****.cn-shenzhen.cr.aliyuncs.com"
                    ],
                    "type": "vpc"
              }
        ]`
         */
        Endpoints: string;
        /**
         * 镜像仓是否存在安全风险。取值：
         * - **YES**：存在风险。
         * - **NO**：不存在风险。
         * @example `NO`
         */
        RiskStatus: string;
        /**
         * 镜像仓是否存在漏洞。取值：
         * - **YES**：存在漏洞。
         * - **NO**：不存在漏洞。
         * @example `NO`
         */
        VulStatus: string;
        /**
         * 镜像仓是否存在安全告警。取值：
         * - **YES**：存在安全告警。
         * - **NO**：不存在安全告警。
         * @example `NO`
         */
        AlarmStatus: string;
        /**
         * 镜像仓库的类型。取值：
         * - **acr**：acr。
         * - **harbor**：harbor。
         * - **quay**：quay。
         * - **CI/CD**：CICD仓类型。
         * @example `acr`
         */
        RegistryType: string;
        /**
         * 镜像资产实例ID。
         * @example `i-uf6fsg6xlmorug5****`
         */
        InstanceId: string;
        /**
         * 镜像实例所在的地域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 镜像仓库的ID。
         * @example `crr-2chlzf47w2rk****`
         */
        RepoId: string;
        /**
         * 镜像仓基线风险数量。
         * @example `0`
         */
        HcCount: number;
        /**
         * 镜像仓中存在漏洞数量。
         * @example `0`
         */
        VulCount: number;
        /**
         * 镜像仓是否存在基线风险。取值：
         * - **NO**：不存在。
         * - **YES**：存在。
         * @example `NO`
         */
        HcStatus: string;
        /**
         * 镜像仓安全告警数量。
         * @example `0`
         */
        AlarmCount: number;
        /**
         * 镜像仓库的名称。
         * @example `zeus`
         */
        RepoName: string;
        /**
         * 镜像仓库的命名空间。
         * @example `test-dev`
         */
        RepoNamespace: string;
        /**
         * 镜像数量。
         * @example `3`
         */
        ImageCount: number;
    }[];
}
