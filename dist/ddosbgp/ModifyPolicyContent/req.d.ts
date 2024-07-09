export interface ModifyPolicyContentRequest {
    /**
     * 策略ID。
     * @example `83967609-7ea5-4f6d-a6ea-380b09e****`
     */
    "Id": string;
    /**
     * 策略名称。
     * @example `demo**`
     */
    "Name"?: string;
    /**
     * 策略内容。
     */
    "Content"?: {
        /**
         * IP黑名单超时时间（unix时间戳）。
         * @example `1716878000`
         */
        BlackIpListExpireAt: number;
        /**
         * 是否开启AI智能防护。
         * @example `true`
         */
        EnableIntelligence: boolean;
        /**
         * AI智能防护的防护等级。取值：
         * - **default**：表示正常。
         * - **hard**：表示严格。
         * - **weak**：表示宽松。
         * @example `default`
         */
        IntelligenceLevel: string;
        /**
         * 是否开启DDoS高防（中国内地&非中国内地）回源地址加白。
         * @example `false`
         */
        WhitenGfbrNets: boolean;
        /**
         * 是否禁用ICMP协议。
         * @example `true`
         */
        EnableDropIcmp: boolean;
        /**
         * 区域封禁的国家列表。
         */
        RegionBlockCountryList: number[];
        /**
         * 区域封禁的省份列表。
         */
        RegionBlockProvinceList: number[];
        /**
         * 源限速。
         */
        SourceLimit: {
            /**
             * 源PPS限速，单位Packet/s。
             * @example `64`
             */
            Pps: number;
            /**
             * 源带宽限速，单位Byte/s。
             * @example `2048`
             */
            Bps: number;
            /**
             * 源SYN PPS限速，单位Packet/s。
             * @example `64`
             */
            SynPps: number;
            /**
             * 源SYN 带宽限速，单位Byte/s。
             * @example `2048`
             */
            SynBps: number;
        };
        /**
         * 源限速拉黑列表。
         */
        SourceBlockList: {
            /**
             * 源限速类型。取值：
             * - **3**：表示源PPS限速。
             * - **4**：表示源带宽限速。
             * - **5**：表示源SYN PPS限速。
             * - **6**：表示源SYN 带宽限速。
             * @example `3`
             */
            Type: number;
            /**
             * 源IP加入黑名单的时长。单位秒。
             * @example `120`
             */
            BlockExpireSeconds: number;
            /**
             * 源限速拉黑的统计周期，单位秒。
             * @example `60`
             */
            EverySeconds: number;
            /**
             * 源IP在1个统计周期内超过限速值的次数。
             * @example `5`
             */
            ExceedLimitTimes: number;
        }[];
        /**
         * 反射攻击防护过滤的端口列表。
         */
        ReflectBlockUdpPortList: number[];
        /**
         * 端口封禁规则列表。
         */
        PortRuleList: {
            /**
             * 规则ID。
             * @example `412a7312-58ff-4e32-a202-0ab0*******`
             */
            Id: string;
            /**
             * 协议类型，取值：
             * - **tcp**：表示传输控制协议。
             * - **udp**：表示用户数据报协议。
             * @example `tcp`
             */
            Protocol: string;
            /**
             * 源端口范围的开始值。取值范围：**0**~**65535**。
             * @example `0`
             */
            SrcPortStart: number;
            /**
             * 源端口范围的结束值。取值范围：**0**~**65535**。
             * @example `65535`
             */
            SrcPortEnd: number;
            /**
             * 目的端口范围的起始值。取值范围：**0**~**65535**。
             * @example `0`
             */
            DstPortStart: number;
            /**
             * 目的端口范围的结束值。取值范围：**0**~**65535**。
             * @example `65535`
             */
            DstPortEnd: number;
            /**
             * 匹配动作。取值：
             * - **drop**：表示丢弃。
             * @example `drop`
             */
            MatchAction: string;
            /**
             * 生效顺序号，使用整数表示。
             * >数字越小，越靠前生效。
             * @example `1`
             */
            SeqNo: number;
        }[];
        /**
         * 指纹过滤规则列表。
         */
        FingerPrintRuleList: {
            /**
             * 规则ID。
             * @example `83967609-7ea5-4f6d-a6ea-380b09e****`
             */
            Id: string;
            /**
             * 协议类型，取值：
             * - **tcp**：表示传输控制协议。
             * - **udp**：表示用户数据报协议。
             * @example `tcp`
             */
            Protocol: string;
            /**
             * 源端口范围的起始值。取值范围：**0**~**65535**。
             * @example `0`
             */
            SrcPortStart: number;
            /**
             * 源端口范围的结束值。取值范围：**0**~**65535**。
             * @example `65535`
             */
            SrcPortEnd: number;
            /**
             * 目的端口范围的起始值。取值范围：**0**~**65535**。
             * @example `0`
             */
            DstPortStart: number;
            /**
             * 目的端口范围的结束值。取值范围：**0**~**65535**。
             * @example `65535`
             */
            DstPortEnd: number;
            /**
             * 最小包长，取值范围：**1**~**1500**。
             * @example `1`
             */
            MinPktLen: number;
            /**
             * 最大包长，取值范围：**1**~**1500**。
             * @example `1500`
             */
            MaxPktLen: number;
            /**
             * 偏移量，取值范围：**0**~**1500**。
             * @example `0`
             */
            Offset: number;
            /**
             * 检测载荷。使用十六进制字符串格式表示。
             * @example `abcd`
             */
            PayloadBytes: string;
            /**
             * 设置指纹特征匹配后的动作。取值：
             * - **permit**：表示放行满足指纹特征的流量。
             * - **drop**：表示丢弃满足指纹特征的流量。
             * - **ip_rate**：表示对满足指纹特征的流量来源IP进行访问限速。限速值通过**RateValue**参数设置。
             * - **session_rate**：表示对满足指纹特征的流量来源会话进行访问限速。限速值通过**RateValue**参数设置。
             * @example `drop`
             */
            MatchAction: string;
            /**
             * 限速值。取值范围：**1**~**100000**。
             * > 匹配后动作为源IP限速或者源Session限速时（**匹配动作**为**ip_rate**或**session_rate**），必须填写该参数。
             * @example `100`
             */
            RateValue: number;
            /**
             * 生效顺序号，使用整数表示。
             * >数字越小，越靠前生效。
             * @example `1`
             */
            SeqNo: number;
        }[];
        /**
         * 是否开启端口防护。
         */
        EnableL4Defense: boolean;
        /**
         * 端口防护规则列表。
         */
        L4RuleList: {
            /**
             * 规则名称。
             * @example `test**`
             */
            Name: string;
            /**
             * 规则优先级。取值范围：1~100。
             * >数字越小，优先级越高。
             * @example `1`
             */
            Priority: number;
            /**
             * 规则类型。取值：
             * - **char**：表示字符串匹配。
             * - **hex**：表示十六进制匹配。
             * @example `char`
             */
            Method: string;
            /**
             * 逻辑符。取值：
             * - **0**：表示命中执行动作。
             * - **1**：表示未命中执行动作。
             * @example `0`
             */
            Match: string;
            /**
             * 动作。取值：
             * - **2**： 表示丢弃。
             * @example `2`
             */
            Action: string;
            /**
             * 会话流启动规则匹配的最小字节数，取值范围：**0**~**2048**
             * @example `0`
             */
            Limited: number;
            /**
             * 检测条件列表。
             */
            ConditionList: {
                /**
                 * 检测内容。
                 * > 规则类型为**char**，必须为ASCII字符串；规则类型为**hex**，必须为十六进制字符串。最大长度2048。
                 * @example `abcd`
                 */
                Arg: string;
                /**
                 * 检测起始位置，取值范围：**0**~**2047**。
                 * @example `0`
                 */
                Position: number;
                /**
                 * 检测窗口长度，取值范围：**1**~**2048**。
                 * @example `1200`
                 */
                Depth: number;
            }[];
        }[];
    };
}
