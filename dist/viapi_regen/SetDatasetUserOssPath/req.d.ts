export interface SetDatasetUserOssPathRequest {
    /**
     * 数据集ID。
     * @example `424`
     */
    "DatasetId": number;
    /**
     * 用户指定的OSS路径。
     * @example `oss://regen-test-bucket/yangTest/`
     */
    "UserOssUrl"?: string;
}
