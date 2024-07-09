export interface DescribeDomainsResponse {
    Domains: {
        /**
         * 本次获取的域名列表。
         */
        Domain: {
            /**
             * 备注。
             * @example `remark`
             */
            Remark: string;
            /**
             * 域名添加时间。
             * @example `2019-01-30T05:25Z`
             */
            CreateTime: string;
            /**
             * 域名含有的解析记录条数。
             * @example `100`
             */
            RecordCount: number;
            Tags: {
                /**
                 * 标签键值对数组。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `测试标签`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `测试标签值`
                     */
                    Value: string;
                }[];
            };
            /**
             * 云解析产品ID。
             * @example `i-7bg`
             */
            InstanceId: string;
            /**
             * 域名名称。
             * @example `abc.com`
             */
            DomainName: string;
            /**
             * 域名ID。
             * @example `00efd71a-770e-4255-b54e-6fe5659baffe`
             */
            DomainId: string;
            /**
             * 是否为阿里云万网域名。
             * @example `true`
             */
            AliDomain: boolean;
            /**
             * 域名分组ID。
             * @example `2223`
             */
            GroupId: string;
            /**
             * 域名分组名称。
             * @example `mygroup`
             */
            GroupName: string;
            /**
             * 所属资源组ID。
             * @example `rg-acf`
             */
            ResourceGroupId: string;
            /**
             * 实例的到期时间。
             * @example `2020-03-14T16:00Z`
             */
            InstanceEndTime: string;
            /**
             * 实例是否过期。
             * @example `false`
             */
            InstanceExpired: boolean;
            /**
             * 云解析产品名称。
             * @example `企业标准版`
             */
            VersionName: string;
            DnsServers: {
                /**
                 * 云解析系统分配的DNS服务器名称列表。
                 */
                DnsServer: string[];
            };
            /**
             * 云解析版本Code。
             * @example `version_enterprise_basic`
             */
            VersionCode: string;
            /**
             * 中文域名的punycode码，英文域名返回为空。
             * @example `abc.com`
             */
            PunyCode: string;
            /**
             * 注册人邮箱。
             * @example `test@example.com`
             */
            RegistrantEmail: string;
            /**
             * 添加时间（时间戳）。
             * @example `1660546144000`
             */
            CreateTimestamp: number;
            /**
             * 是否收藏至常用域名列表。
             * @example `true`
             */
            Starmark: boolean;
            /**
             * 域名DNS流量分析开启状态：
             * - OPEN：开启
             * - CLOSE：关闭
             * @example `OPEN`
             */
            DomainLoggingSwitchStatus: string;
        }[];
    };
    /**
     * 域名列表总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `2`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `68386699-8B9E-4D5B-BC4C-75A28F6C2A00`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    PageNumber: number;
}
