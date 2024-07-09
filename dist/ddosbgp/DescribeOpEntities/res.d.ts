export interface DescribeOpEntitiesResponse {
    /**
     * 查询到的操作日志的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `52C8ECB0-0B1A-4E66-A31C-B6A855120E82`
     */
    RequestId: string;
    /**
     * 操作日志的详情列表。
     */
    OpEntities: {
        /**
         * 操作对象类型。取值固定为**1**，表示DDoS原生防护实例。
         * @example `1`
         */
        EntityType: number;
        /**
         * 操作对象，即DDoS原生防护实例的ID。
         * @example `ddosbgp-cn-n6w1r7nz****`
         */
        EntityObject: string;
        /**
         * 操作类型。取值：
         * - **3**：表示为DDoS原生防护实例添加防护IP。
         * - **4**：表示为DDoS原生防护实例解绑防护IP。
         * - **5**：表示为DDoS原生防护实例降配。
         * - **6**：表示解除黑洞。
         * - **7**：表示重置解除黑洞次数。
         * - **8**：表示恢复弹性防护。
         * @example `8`
         */
        OpAction: number;
        /**
         * 日志的创建时间。使用时间戳表示，单位：毫秒。
         * @example `1635818114000`
         */
        GmtCreate: number;
        /**
         * 执行本次操作的阿里云账号ID。
         * > 如果取值为**system**，表示本次操作由DDoS原生防护服务自动执行。
         * @example `171986973287****`
         */
        OpAccount: string;
        /**
         * 操作详情。使用JSON结构体转换的字符串表示。JSON结构体包含以下字段：
         * - **entity**：Object类型 | 表示操作对象。根据操作类型（**OpAction**）不同，**entity**包含的字段不同。具体说明如下：
         *     - **OpAction**为**3**（表示添加防护IP）时，**entity**包含以下字段：
         *         - **ips**：Array类型 | 表示绑定到原生防护实例防护的公网IP资产列表。
         *     - **OpAction**为**4**（表示解绑防护IP）时，**entity**包含以下字段：
         *         - **ips**：Array类型 | 表示从原生防护实例解除防护的公网IP资产列表。
         *     - **OpAction**为**5**（表示实例降配）时，**entity**包含以下字段：
         *         - **baseBandwidth**：Integer类型 | 表示基础防护带宽，单位：Gbps。
         *         - **elasticBandwidth**：Integer类型 | 表示弹性防护带宽，单位：Gbps。
         *         - **opSource**：Integer类型 | 操作来源，取值固定为**1**（表示由DDoS原生防护服务自动执行本次操作）。
         *     - **OpAction**为**6**（表示解除黑洞）时，**entity**包含以下字段：
         *         - **ips**：Array类型 | 表示解除黑洞状态的公网IP资产列表。
         *     - **OpAction**为**7**（表示重置解除黑洞次数）时，**entity**为空。
         *     - **OpAction**为**8**（表示实恢复弹性防护）时，**entity**包含以下字段：
         *         - **baseBandwidth**：Integer类型 | 表示基础防护带宽，单位：Gbps。
         *         - **elasticBandwidth**：Integer类型 | 表示弹性防护带宽，单位：Gbps。
         * @example `{"entity":{"baseBandwidth":20,"elasticBandwidth":20}}`
         */
        OpDesc: string;
    }[];
}
