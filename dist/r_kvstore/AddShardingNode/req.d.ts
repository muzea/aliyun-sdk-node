export interface AddShardingNodeRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 需要添加分片数量，默认值为**1**。
     * > 实例总分片数最少为2个，单次操作的分片数上限为64，实例总分片数上限为256，请确保分片数不超过此限制。
     * @example `2`
     */
    "ShardCount"?: number;
    /**
     * 是否自动付款，取值：
     * * **true**：自动付款，请确保账号有足够的余额。
     * * **false**：手动付款，您需要通过控制台手动续费，详情请参见[手动续费](~~26352~~)。
     * > 默认值为**true**。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 优惠券编号。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * 附加参数，业务信息。
     * @example `000000000`
     */
    "BusinessInfo"?: string;
    /**
     * 调用来源，本参数仅用于内部维护使用，无需传入。
     * @example `SDK`
     */
    "SourceBiz"?: string;
    /**
     * 是否开启强制传输，取值：
     * - **false**（默认）：在变配前，系统会检查实例当前的内核小版本，若内核版本过低则会报错，您需要升级内核小版本后重试。
     * - **true**：跳过检查项，直接执行变配操作。
     * @example `false`
     */
    "ForceTrans"?: boolean;
    /**
     * 支持指定同VPC下的不同交换机ID，新的数据分片将创建在指定的交换机下。
     * 若不填，则默认创建在原来的交换机中。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId"?: string;
}
