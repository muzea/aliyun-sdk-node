export interface DescribeVsDomainDetailResponse {
    /**
     * 请求ID。
     * @example `9BEC5E85-C76B-56EF-A922-860EFDB8B64B`
     */
    RequestId: string;
    /**
     * 域名配置列表信息。
     */
    DomainConfig: {
        /**
         * 创建时间。
         * @example `2021-07-19T10:27:23Z`
         */
        GmtCreated: string;
        /**
         * 域名描述信息。
         * @example `测试使用`
         */
        Description: string;
        /**
         * HTTPS证书是否启用。取值：
         * - **on**：启用。
         * - **off**（默认值）：不启用。
         * @example `off`
         */
        SSLProtocol: string;
        /**
         * 域名所在区域。
         * @example `cn-qingdao`
         */
        Region: string;
        /**
         * 加速区域。取值范围：
         * - **domestic**
         * - **overseas**
         * - **global**
         * @example `domestic`
         */
        Scope: string;
        /**
         * 为视图计算域名生成的一个CNAME域名，需要在域名解析服务商处将域名CNAME解析到该域名。
         * @example `example.aliyundoc.com.*****.com`
         */
        Cname: string;
        /**
         * 视图计算加速域名运行状态。取值：
         * - **online**：启用。
         * - **offline**：停用。
         * - **configuring**：配置中。
         * @example `online`
         */
        DomainStatus: string;
        /**
         * 最近修改时间。
         * @example `2021-07-19T10:27:23Z`
         */
        GmtModified: string;
        /**
         * 视图计算域名名称。
         * @example `example.aliyundoc.com`
         */
        DomainName: string;
        /**
         * 域名类型。
         * > 固定值：vs
         * @example `vs`
         */
        DomainType: string;
    };
}
