export interface DescribeOutgoingDestinationIPResponse {
    /**
     * 外联IP的总数量。
     * @example `50`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID。
     * @example `F0F82705-CFC7-5F83-86C8-A063892F****`
     */
    RequestId: string;
    /**
     * 主动外联的IP列表。
     */
    DstIPList: {
        /**
         * 是否覆盖访问控制策略。取值：
         * - **Uncovered**：未覆盖。
         * - **FullCoverage**：已覆盖。
         * @example `Uncovered`
         */
        AclCoverage: string;
        /**
         * 主动外联域名的目的IP。
         * @example `10.0.XX.XX`
         */
        DstIP: string;
        /**
         * ACL的建议信息。
         * @example `建议放行`
         */
        AclRecommendDetail: string;
        /**
         * 是否有推荐ACL。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        HasAclRecommend: boolean;
        /**
         * 入方向的流量。单位：Byte。
         * @example `472`
         */
        InBytes: number;
        /**
         * 产品的分类名称。取值：
         * - **阿里云产品**
         * - **非阿里云产品**
         * @example `阿里云产品`
         */
        CategoryName: string;
        /**
         * ACL规则名称。
         * @example `默认规则`
         */
        RuleName: string;
        /**
         * ACL规则UUID。
         * @example `fadsfd-dfadf-df****`
         */
        RuleId: string;
        /**
         * 请求次数。
         * @example `4`
         */
        SessionCount: number;
        /**
         * 规则的组名称。
         * @example `规则_test`
         */
        GroupName: string;
        /**
         * 主动外联域名的安全策略。取值：
         * - **pass**：放行。
         * - **alert**：拒绝。
         * - **drop**：观察。
         * @example `pass`
         */
        SecuritySuggest: string;
        /**
         * 出方向的流量。单位：Byte。
         * @example `965`
         */
        OutBytes: number;
        /**
         * 访问控制策略的健康状态。取值：
         * - **Normal**：健康。
         * - **Abnormal**：不健康。
         * @example `Normal`
         */
        AclStatus: string;
        /**
         * 是否加入白名单。取值：
         * - **true**：已加入。
         * - **false**：未加入。
         * @example `true`
         */
        IsMarkNormal: boolean;
        /**
         * 产品分类ID。取值：
         * - **Aliyun**：阿里云产品。
         * - **NotAliyun**：非阿里云产品。
         * @example `Aliyun`
         */
        CategoryId: string;
        /**
         * 标签列表。
         */
        TagList: {
            /**
             * 风险评估等级。取值：
             * - **1**：低危。
             * - **2**：中危。
             * - **3**：高危。
             * @example `1`
             */
            RiskLevel: number;
            /**
             * 情报标签名称。
             * @example `放行标签`
             */
            TagName: string;
            /**
             * 情报标签ID。
             * @example `AliYun`
             */
            TagId: string;
            /**
             * 情报标签的描述。
             * @example `放行标签`
             */
            TagDescribe: string;
            /**
             * 情报标签的分类。取值：
             * - **Suspicious**：可疑。
             * - **Malicious**：恶意。
             * - **Trusted**：信任。
             * @example `Trusted`
             */
            ClassId: string;
        }[];
        /**
         * 应用端口列表。
         */
        ApplicationPortList: {
            /**
             * 应用的端口。
             * @example `80`
             */
            Port: number;
            /**
             * 访问控制策略支持的应用类型。取值：
             * - **FTP**
             * - **HTTP**
             * - **HTTPS**
             * - **Memcache**
             * - **MongoDB**
             * - **MQTT**
             * - **MySQL**
             * - **RDP**
             * - **Redis**
             * - **SMTP**
             * - **SMTPS**
             * - **SSH**
             * - **SSL_No_Cert**
             * - **SSL**
             * - **VNC**
             * > 支持的应用类型取值与协议类型（Proto）取值存在依赖关系。Proto为TCP协议时，ApplicationNameList支持选择以上所有应用类型。当ApplicationNameList和ApplicationName同时传值时，以ApplicationNameList为准。
             * @example `HTTP`
             */
            ApplicationName: string;
        }[];
        /**
         * 情报标签的分类。取值：
         * - **Suspicious**：可疑。
         * - **Malicious**：恶意。
         * - **Trusted**：信任。
         * @example `Trusted`
         */
        CategoryClassId: string;
        /**
         * 安全原因。
         * @example `智能策略：该目的域名所属组织为阿里云计算有限公司，主要业务为阿里云，未发现安全风险，可用于配置外联白名单。`
         */
        SecurityReason: string;
        /**
         * 总流量。单位：byte。
         * @example `800`
         */
        TotalBytes: string;
        /**
         * 是否有访问控制规则。取值：
         * - **true**：有。
         * - **false** ：没有。
         * @example `true`
         */
        HasAcl: string;
        /**
         * 地址簿信息。
         */
        AddressGroupList: {
            /**
             * 地址簿唯一标识。
             * @example `f04ac7ce-628b-4cb7-be61-310222b7****`
             */
            AddressGroupUUID: string;
            /**
             * 地址簿名称。
             * @example `IP地址簿`
             */
            AddressGroupName: string;
        }[];
    }[];
}
