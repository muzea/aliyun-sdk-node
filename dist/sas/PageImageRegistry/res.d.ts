export interface PageImageRegistryResponse {
    /**
     * 镜像仓列表数据。
     */
    List: {
        /**
         * 镜像仓唯一ID。
         * @example `1078312`
         */
        Id: number;
        /**
         * 创建时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2022-08-30 10:23:30`
         */
        GmtCreate: string;
        /**
         * 更新时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2022-09-30 10:23:30`
         */
        GmtModified: string;
        /**
         * 镜像仓库别名。
         * @example `test1`
         */
        RegistryName: string;
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
         * 协议类型。取值：
         * - **1**：http
         * - **2**：https
         * @example `1`
         */
        ProtocolType: number;
        /**
         * 网络类型。取值：
         * - **1**：公网
         * - **2**：vpc
         * @example `1`
         */
        NetType: number;
        /**
         * VPC的实例ID。
         * @example `vpc-5gu8iu68w9b472jbb****`
         */
        VpcId: string;
        /**
         * 仓库IP地址。
         * @example `39.104.XXX.XXX`
         */
        RegistryHostIp: string;
        /**
         * 仓库域名。
         * @example `sinochem.com`
         */
        DomainName: string;
        /**
         * 用户名。
         * @example `RegistryUser`
         */
        UserName: string;
        /**
         * 密码。
         * @example `Harbor******`
         */
        Password: string;
        /**
         * 仓库地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 用户鉴权令牌。
         * @example `c7b90d29-632f-4e58-88b8-00ad77f6****`
         */
        Token: string;
        /**
         * 白名单。
         * @example `192.168.XXX.XXX`
         */
        WhiteList: string;
        /**
         * 黑名单。
         * @example `129.211.XXX.XXX`
         */
        BlackList: string;
        /**
         * 每小时扫描任务数。
         * @example `30`
         */
        TransPerHour: number;
        /**
         * 资产保存天数。
         * @example `30`
         */
        PersistenceDay: number;
        /**
         * 包含的镜像数量。
         * @example `1`
         */
        ImageCount: number;
        /**
         * Jenkins环境信息。
         * @example `projectInfo`
         */
        JenkinsEnv: string;
    }[];
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 返回数据的总条数。
         * @example `69`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FDA9E37C-6114-5945-8FF1-E3D4D397****`
     */
    RequestId: string;
}
