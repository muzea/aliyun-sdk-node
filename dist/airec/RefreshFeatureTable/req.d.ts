export interface RefreshFeatureTableRequest {
    /**
     * A short description of struct
     * @example `airec-cn-shdjkgkeog`
     */
    "instanceId": string;
    /**
     * 特征表类型
     * @example `ItemFeatureTable UserFeatureTable`
     */
    "type": string;
    /**
     * 特征表id
     */
    "featureTableId": string;
}
