export interface DeleteAggregateRemediationsRequest {
    /**
     * 修正设置ID。多个修正设置ID之间用半角逗号（,）分隔。
     * 关于如何获取修正设置ID，请参见[ListAggregateRemediations](~~270036~~)。
     * @example `crr-909ba2d4716700eb****`
     */
    "RemediationIds": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-6b4a626622af0012****`
     */
    "AggregatorId": string;
}
