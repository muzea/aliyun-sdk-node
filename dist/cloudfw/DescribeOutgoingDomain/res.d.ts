export interface DescribeOutgoingDomainResponse {
    /**
     * 外联域名的总数量。
     * @example `132`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID。
     * @example `F0F82705-CFC7-5F83-86C8-A063892F****`
     */
    RequestId: string;
    /**
     * 外联域名列表。
     */
    DomainList: {
        /**
         * 访问控制策略是否覆盖。取值：
         * - **Uncovered**：未覆盖
         * - **FullCoverage**：已覆盖
         * @example `Uncovered`
         */
        AclCoverage: string;
        /**
         * 主动外联的域名。
         * @example `www.aliyundoc.com`
         */
        Domain: string;
        /**
         * ACL推荐内容。
         * @example `建议放行`
         */
        AclRecommendDetail: string;
        /**
         * 是否有推荐ACL。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        HasAclRecommend: boolean;
        /**
         * 入方向的流量。
         * @example `3214`
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
         * ACL规则ID。
         * @example `add-dfadf-f****`
         */
        RuleId: string;
        /**
         * 请求次数。
         * @example `12`
         */
        SessionCount: number;
        /**
         * 规则的组名称。
         * @example `外量地址组`
         */
        GroupName: string;
        /**
         * 主动外联域名的安全策略。取值：
         * - **pass**：放行
         * - **alert**：观察
         * - **drop**：拒绝
         * @example `pass`
         */
        SecuritySuggest: string;
        /**
         * 出方向的流量。
         * @example `4582`
         */
        OutBytes: number;
        /**
         * 访问控制策略的健康状态。取值：
         * - **Normal**：健康
         * - **Abnormal**：不健康
         * @example `Normal`
         */
        AclStatus: string;
        /**
         * 外联域名是否标记为正常。取值：
         * - **true**：正常
         * - **false**：不正常
         * @example `true`
         */
        IsMarkNormal: boolean;
        /**
         * 产品分类ID。取值：
         * - **Aliyun**：阿里云产品
         * - **NotAliyun**：非阿里云产品
         * @example `Aliyun`
         */
        CategoryId: string;
        /**
         * 地址簿UUID。
         * @example `fdad-fdafa-dafa-dfa****`
         */
        AddressGroupUUID: string;
        /**
         * 地址簿的名称。
         * @example `外联地址簿`
         */
        AddressGroupName: string;
        /**
         * 情报标签的分类。取值：
         * - **Suspicious**：可疑
         * - **Malicious**：恶意
         * - **Trusted**：信任
         * @example `Trusted`
         */
        CategoryClassId: string;
        /**
         * 网站业务。
         * @example `阿里云`
         */
        Business: string;
        /**
         * 是否已有`ACL`覆盖此域名管控。取值：
         * - **true**：有
         * - **false** ：没有
         * @example `true`
         */
        HasAcl: string;
        /**
         * 组织名称。
         * @example `阿里云计算有限公司`
         */
        Organization: string;
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
         * 标签列表。
         */
        TagList: {
            /**
             * 风险评估等级，取值：
             * - **1**：低危
             * - **2**：中危
             * - **3**：高危
             * @example `3`
             */
            RiskLevel: number;
            /**
             * 标签名称。
             * @example `加白标签`
             */
            TagName: string;
            /**
             * 情报标签ID。
             * @example `AliYun`
             */
            TagId: string;
            /**
             * 标签描述。
             * @example `加白标签`
             */
            TagDescribe: string;
            /**
             * 情报标签的分类。取值：
             * - **Suspicious**：可疑
             * - **Malicious**：恶意
             * - **Trusted**：信任
             * @example `Trusted`
             */
            ClassId: string;
        }[];
    }[];
}
