export interface ReleaseInstancesRequest {
    /**
     * 项目ID。
     * @example `4820372607851300489003`
     */
    "ProjectId": string;
    /**
     * GCS 实例的规格。
     * @example `gcs.r1c1m1.1xlarge`
     */
    "InstanceType": string;
    /**
     * 大区ID。取值：
     * - huadong
     * - xinan
     * - huanan
     * - huabei
     * - huazhong
     * @example `huadong`
     */
    "DistrictId": string;
    /**
     * 退订云渲染实例数量。取值范围：1~500。
     * @example `1`
     */
    "Amount": number;
}
