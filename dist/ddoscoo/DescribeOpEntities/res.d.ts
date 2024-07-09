export interface DescribeOpEntitiesResponse {
    /**
     * 操作记录的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `FB24D70C-71F5-4000-8CD8-22CDA0C53CD1`
     */
    RequestId: string;
    /**
     * 操作日志记录。
     */
    OpEntities: {
        /**
         * 操作对象的类型。取值：
         * - **1**：DDoS高防IP
         * - **2**：DDoS高防抗D包
         * - **3**：ECS实例
         * - **4**：全量日志
         * @example `1`
         */
        EntityType: number;
        /**
         * 操作对象。
         * @example `203.***.***.132`
         */
        EntityObject: string;
        /**
         * 操作时间。时间戳格式，单位：毫秒。
         * @example `1584451769000`
         */
        GmtCreate: number;
        /**
         * 操作类型。取值：
         * - **1**：设置弹性防护带宽。
         * - **5**：抵扣抗D包。
         * - **8**：更换ECS IP。
         * - **9**：执行黑洞解封。
         * - **10**：设置近源流量压制。
         * - **11**：清空全量日志。
         * - **12**：降级实例规格，表示实例到期或账号存在欠费时，降低弹性防护带宽。
         * - **13**：恢复实例规格，表示实例续费或账号欠费结清时，恢复弹性防护带宽。
         * @example `9`
         */
        OpAction: number;
        /**
         * 执行操作的阿里云账号ID。
         * @example `128965410602****`
         */
        OpAccount: string;
        /**
         * 操作的描述信息，使用JSON格式的字符串表述，具体结构如下：
         * - **newEntity**：String类型，操作后的参数。
         * - **oldEntity**：String类型，操作前的参数。
         * **newEntity**和**oldEntity**均使用JSON格式的字符串表述。不同操作类型（**OpAtion**）对应的操作参数不同。
         * **OpAction**为**1**、**12**、**13**时，操作参数的结构描述如下：
         * - **elasticBandwidth**：Integer类型，弹性防护带宽值，单位：Gbps。
         *     示例：`{"newEntity":{"elasticBandwidth":300},"oldEntity":{"elasticBandwidth":300}}`
         * **OpAction**为**5**时，操作参数的结构描述如下：
         * - **bandwidth**：Integer类型，弹性防护带宽，单位：Gbps。
         * - **count**：Integer类型，抗D包数量。
         * - **deductCount**：Integer类型，抵扣的抗D包数量。
         * - **expireTime**：Long类型，抗D包的到期时间。时间戳格式，单位：毫秒。
         * - **instanceId**：String类型，DDoS高防实例ID。
         * - **peakFlow**：Integer类型，峰值流量，单位：bps。
         *     示例：`{"newEntity":{"bandwidth":100,"count":4,"deductCount":1,"expireTime":1616299196000,"instanceId":"ddoscoo-cn-v641kpmq****","peakFlow":751427000}}`
         * **OpAction**为**8**时，操作参数的结构描述如下：
         * - **instanceId**：String类型，更换IP的ECS实例ID。
         *     示例：`{"newEntity":{"instanceId":"i-wz9h6nc313zptbqn****"}}`
         *
         * **OpAction**为**9**时，操作参数的结构描述如下：
         * - **actionMethod**：String类型，操作方法。取值：**undo**，表示解除黑洞。
         *     示例：`{"newEntity":{"actionMethod":"undo"}}`
         *
         * **OpAction**为**10**时，操作参数的结构描述如下：
         * - **actionMethod**：String类型，操作方法。取值：
         *     - **do**：开启近源流量压制
         *     - **undo**：取消近源流量压制
         * - **lines**：Array类型，操作的线路类型。取值：
         *     - **ct**：电信海外线路
         *     - **cut**：联通海外线路
         *     示例：`{"newEntity":{"actionMethod":"undo","lines":["ct"]}}`
         * **OpAction**为**11**时，无操作参数，操作描述为空。
         * @example `{"newEntity":{"actionMethod":"undo"}}`
         */
        OpDesc: string;
    }[];
}
