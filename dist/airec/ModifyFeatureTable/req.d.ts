export interface ModifyFeatureTableRequest {
    /**
     * 实例id
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 特征表类型
     * UserFeatureTable
     * ItemFeatureTable
     * @example `UserFeatureTable`
     */
    "type": string;
    /**
     * 特征表id
     * @example `123`
     */
    "featureTableId": string;
}
