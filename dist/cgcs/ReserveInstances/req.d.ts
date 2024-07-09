export interface ReserveInstancesRequest {
    /**
     * 项目ID。
     * @example `5469588382860444937003`
     */
    "ProjectId": string;
    /**
     * GCS 云渲染实例规格。
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
     * 本次预定云渲染实例数量。取值范围：1~500。
     * @example `1`
     */
    "Amount": number;
}
