export interface ListQuotaAlarmsRequest {
    /**
     * 用来标记开始读取数据的位置。
     * > 不设置该参数，表示从头开始。
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大记录条数。
     * 取值范围：1~200。默认值：30。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProductQuotas](~~440554~~)中的`ProductCode`。
     * @example `ecs`
     */
    "ProductCode"?: string;
    /**
     * 配额用量告警名称。
     * @example `规则创建数量告警`
     */
    "AlarmName"?: string;
    /**
     * 配额ID。
     * > - 关于如何获取云产品的配额ID，请参见[ListProductQuotas](~~440554~~)中的`QuotaActionCode`。
     * > - 如果已设置本参数，则`ProductCode`必填。
     * @example `q_hvnoqv`
     */
    "QuotaActionCode"?: string;
    /**
     * 配额维度。
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
         * 配额维度的Key。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 当`ProductCode`为`ecs`、`ecs-spec`、`actiontrail`、`ess`等时，配额维度的Key和Value必须同时设置。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
}
