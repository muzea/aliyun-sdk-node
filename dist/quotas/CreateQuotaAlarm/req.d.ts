export interface CreateQuotaAlarmRequest {
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProductQuotas](~~440554~~)中的`ProductCode`。
     * @example `config`
     */
    "ProductCode": string;
    /**
     * 配额ID。
     * > 关于如何获取云产品的配额ID，请参见[ListProductQuotas](~~440554~~)中的`QuotaActionCode`。
     * @example `q_hvnoqv`
     */
    "QuotaActionCode": string;
    /**
     * 配额告警名称。
     * @example `规则创建数量告警`
     */
    "AlarmName": string;
    /**
     * 配额告警类型。取值：
     * - used（默认值）：已使用量告警。
     * - usable：剩余可用量告警。
     * @example `used`
     */
    "ThresholdType"?: string;
    /**
     * 配额告警阈值的数值。取值：
     * - 当`ThresholdType`选择`used`时，如果配额的已使用量大于等于预设数值，您会收到告警通知。配额告警阈值必须大于配额的已使用量。
     * - 当`ThresholdType`选择`usable`时，如果配额的剩余可用量小于等于预设数值，您会收到告警通知。配额告警阈值必须小于配额的剩余可用量。
     * > 该参数与ThresholdPercent必须设置一个。
     * @example `150`
     */
    "Threshold"?: number;
    /**
     * 配额告警阈值的百分比。取值：
     * - 当`ThresholdType`选择`used`时，如果配额的已使用量大于等于预设百分比，您会收到告警通知。取值范围：（50%, 100%]。
     * - 当`ThresholdType`选择`usable`时，如果配额的剩余可用量小于等于预设百分比，您会收到告警通知。取值范围：（0%, 50%]。
     * > 该参数与Threshold必须设置一个。
     * @example `50`
     */
    "ThresholdPercent"?: number;
    /**
     * 配额中心将告警信息通过HTTP协议的POST请求发送到指定公网的URL地址。
     * @example `https://alert.aliyun.com/callback`
     */
    "WebHook"?: string;
    /**
     * 配额维度列表。
     */
    "QuotaDimensions"?: {
        /**
         * 配额维度的Key。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 当`ProductCode`为`ecs`、`ecs-spec`、`actiontrail`、`ess`等时，配额维度的Key和Value必须同时设置。
         * @example `regionId`
         */
        Key: string;
        /**
         * 配额维度的Value。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 当`ProductCode`为`ecs`、`ecs-spec`、`actiontrail`、`ess`等时，配额维度的Key和Value必须同时设置。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
}
