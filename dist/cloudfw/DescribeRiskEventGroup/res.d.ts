export interface DescribeRiskEventGroupResponse {
    /**
     * 风险事件的总数量。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `B14757D0-4640-4B44-AC67-7F558FE7E6EF`
     */
    RequestId: string;
    /**
     * 返回数据列表。
     */
    DataList: {
        /**
         * 该入侵防御事件的流量方向。取值：
         * - **in**：表示进方向。
         * - **out**：表示出方向。
         * @example `in`
         */
        Direction: string;
        /**
         * 入侵防御事件名称。
         * @example `Web目录穿越攻击`
         */
        EventName: string;
        /**
         * 查询到的目的IP。表示入侵防御事件中包含了这条目的IP。
         * @example `192.0.XX.XX`
         */
        DstIP: string;
        /**
         * 该入侵防御事件的攻击类型。取值：
         * - **1**：表示异常连接。
         * - **2**：表示命令执行。
         * - **3**：表示暴力破解。
         * - **4**：表示扫描。
         * - **5**：表示其它。
         * - **6**：表示信息泄露。
         * - **7**：表示Dos攻击。
         * - **8**：表示溢出攻击。
         * - **9**：表示Web攻击。
         * - **10**：表示木马后门。
         * - **11**：表示病毒蠕虫。
         * - **12**：表示挖矿行为。
         * - **13**：表示反弹Shell。
         * @example `1`
         */
        AttackType: number;
        /**
         * 重保情报标签。
         * @example `重保情报`
         */
        Tag: string;
        /**
         * 本次入侵防御事件的防护规则ID。
         * @example `1000****`
         */
        RuleId: string;
        /**
         * 入侵防御事件ID。
         * @example `2b58efae-4c4b-4d96-9544-a586fb1f****`
         */
        EventId: string;
        /**
         * 该入侵防御事件的公网IP类型。取值：
         *  -  **EIP**：表示弹性公网IP。
         *  - **EcsPublicIP**：表示ECS公网IP。
         *  - **EcsEIP**：表示ECS EIP。
         *  - **NatPublicIP**：表示NAT公网IP。
         *  - **NatEIP**：表示NAT EIP。
         *  - **SlbPublicIp**：表示SLB 公网IP。
         * @example `EcsPublicIP`
         */
        ResourceType: string;
        /**
         * 入侵事件首次发生时间。使用秒级时间戳格式表示。
         * @example `1534408189`
         */
        FirstEventTime: number;
        /**
         * 该入侵防御事件的描述。
         * @example `检测到HTTP请求的Web访问中使用了目录穿越攻击。`
         */
        Description: string;
        /**
         * 入侵防御事件数。
         * @example `100`
         */
        EventCount: number;
        /**
         * 该入侵防御事件的安全等级。取值：
         * - **1**：表示低危。
         * - **2**：表示中危。
         * - **3**：表示高危。
         * @example `1`
         */
        VulLevel: number;
        /**
         * 被攻击应用的名称。
         * @example `MySql`
         */
        AttackApp: string;
        /**
         * 本次入侵防御事件的检测规则来源。取值：
         * - **1**：表示基础防御。
         * - **2**：表示虚拟补丁。
         * - **4**：表示威胁情报。
         * @example `1`
         */
        RuleSource: number;
        /**
         * 防御状态。取值：
         * - **1**：表示告警。
         * - **2**：表示拦截。
         * @example `2`
         */
        RuleResult: number;
        /**
         * 查询到的源IP。表示入侵防御事件中包含了这条源IP。
         * @example `192.0.XX.XX`
         */
        SrcIP: string;
        /**
         * 入侵防御事件上次发生的时间。使用秒级时间戳格式表示。
         * @example `1534408267`
         */
        LastEventTime: number;
        /**
         * 该入侵防御事件的私网IP信息，以**RegionNo**、**ResourceInstanceId**、**ResourceInstanceName**和**ResourcePrivateIP**的数组形式返回该IP信息。
         * 其中，**RegionNo**表示该IP所属的地域ID，**ResourceInstanceId**表示该IP所属的实例ID，**ResourceInstanceName**表示该IP所属的实例名，**ResourcePrivateIP**表示该IP。
         */
        ResourcePrivateIPList: {
            /**
             * 实例名。
             * @example `LD-shenzhen-zy****`
             */
            ResourceInstanceName: string;
            /**
             * 私网IP。
             * @example `10.255.XX.XX`
             */
            ResourcePrivateIP: string;
            /**
             * 实例ID。
             * @example `i-wz92jf4scg2zb74p****`
             */
            ResourceInstanceId: string;
            /**
             * 地域ID。表示私网IP所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionNo: string;
        }[];
        /**
         * 入侵防御事件的源私网IP列表。
         */
        SrcPrivateIPList: string[];
        /**
         * 该入侵防御事件的源VPC信息，该结构体包含**EcsInstanceId**、**EcsInstanceName**、**NetworkInstanceId**、**NetworkInstanceName**和**RegionNo**参数。
         * 其中，**EcsInstanceId**表示该VPC中的ECS实例ID，**EcsInstanceName**表示该VPC中的ECS实例名，**NetworkInstanceId**表示该VPC实例ID，**NetworkInstanceName**表示该VPC实例名，**RegionNo**表示该VPC实例所属的地域ID。
         */
        VpcSrcInfo: {
            /**
             * ECS实例名。
             * @example `LD-shenzhen-zy****`
             */
            EcsInstanceName: string;
            /**
             * VPC实例名。
             * @example `VPC-SH-TX****`
             */
            NetworkInstanceName: string;
            /**
             * VPC实例ID。
             * @example `vpc-uf6e9a9zyokj2ywuo****`
             */
            NetworkInstanceId: string;
            /**
             * ECS实例ID。
             * @example `i-wz92jf4scg2zb74p****`
             */
            EcsInstanceId: string;
            /**
             * 地域ID。表示源VPC实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionNo: string;
        };
        /**
         * 该入侵防御事件的目的VPC信息，该结构体包含**EcsInstanceId**、**EcsInstanceName**、**NetworkInstanceId**、**NetworkInstanceName**和**RegionNo**参数。
         * 其中，**EcsInstanceId**表示该VPC中的ECS实例ID，**EcsInstanceName**表示该VPC中的ECS实例名，**NetworkInstanceId**表示该VPC实例ID，**NetworkInstanceName**表示该VPC实例名，**RegionNo**表示该VPC实例所属的地域ID。
         */
        VpcDstInfo: {
            /**
             * ECS实例名。
             * @example `LD-shenzhen-zy****`
             */
            EcsInstanceName: string;
            /**
             * VPC实例名。
             * @example `VPC-SH-TX****`
             */
            NetworkInstanceName: string;
            /**
             * VPC实例ID。
             * @example `vpc-uf6e9a9zyokj2ywuo****`
             */
            NetworkInstanceId: string;
            /**
             * ECS实例ID。
             * @example `i-wz92jf4scg2zb74p****`
             */
            EcsInstanceId: string;
            /**
             * 地域ID。表示目的VPC实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionNo: string;
        };
        /**
         * IP地理位置信息，该结构体包含**CityId**、**CityName**、**CountryId**和**CountryName**参数。
         * 其中，**CityId**表示该IP所属的城市ID，**CityName**表示该IP所属的城市名，**CountryId**表示该IP所属的国家ID，**CountryName**表示该IP所属的国家名。
         */
        IPLocationInfo: {
            /**
             * 城市ID。
             * @example `510100`
             */
            CityId: string;
            /**
             * 国家名。
             * @example `中国`
             */
            CountryName: string;
            /**
             * 城市名。
             * @example `四川省成都`
             */
            CityName: string;
            /**
             * 国家ID。
             * @example `CN`
             */
            CountryId: string;
        };
        /**
         * 源IP标签，用于标识是否为云产品回源IP。
         * @example `WAF Back-to-origin Address`
         */
        SrcIPTag: string;
    }[];
}
