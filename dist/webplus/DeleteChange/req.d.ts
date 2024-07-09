export interface DeleteChangeRequest {
    /**
     * 变更ID，将删除此变更
     * @example `wc-5d3a963d5802611c4dd*****`
     */
    "ChangeId": string;
    "RegionId"?: string;
}
