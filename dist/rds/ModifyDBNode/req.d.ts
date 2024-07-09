export interface ModifyDBNodeRequest {
    /**
     * 用于保证请求的幂等性。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * @example `rm-bp1k8s41l2o52****`
     */
    "DBInstanceId": string;
    /**
     * 实例储存类型，取值：
     * * **cloud_essd**：ESSD PL1云盘
     * * **cloud_essd2**：ESSD PL2云盘
     * * **cloud_essd3**：ESSD PL3云盘
     * @example `cloud_essd`
     */
    "DBInstanceStorageType"?: string;
    /**
     * 新实例存储容量。单位：GB。详情请参见[实例规格](~~26312~~)。
     * @example `20`
     */
    "DBInstanceStorage"?: string;
    /**
     * 节点相关信息。
     * > 该参数用于MySQL集群系列实例。
     */
    "DBNode"?: {
        /**
         * 节点规格信息。
         * @example `mysql.n2.medium.xc`
         */
        classCode: string;
        /**
         * 节点ID。
         * @example `rn-6256r4a87xvv7****`
         */
        nodeId: string;
    }[];
    /**
     * 生效时间，取值：
     * * **Immediate**（默认值）：立即生效。
     * * **MaintainTime**：在可运维时间段内生效，请参见ModifyDBInstanceMaintainTime。
     * @example `Immediate`
     */
    "EffectiveTime"?: string;
    /**
     * 是否自动支付。
     * 取值范围：
     * 1. **true**：自动支付。您需要确保账户余额充足。
     * 1. **false**：只生成订单不扣费。
     * > 默认值为true。如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录RDS管理控制台自行支付。
     * >
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 是否对本次节点变更的操作执行预检查。取值范围：
     * * **true**：执行预检查操作，不执行变更。检查项目包含请求参数、请求格式、业务限制和库存等。
     * * **false**：发送正常请求，通过检查后直接执行变更（默认）。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否异步执行生产。取值范围：
     * * **true**：请求只下发订单，变更操作会异步执行（默认）。
     * * **false**：请求下发的同时，通过检查后直接执行变更。
     * > 默认值为true，变更操作异步执行。如果设置为false，变更操作同步执行，接口响应时间会相对较长。
     * @example `true`
     */
    "ProduceAsync"?: boolean;
}
