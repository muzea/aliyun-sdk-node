export interface AddVodStorageForAppResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 创建的点播系统bucket存储地址。
     * @example `out-****.oss-cn-shanghai.aliyuncs.com`
     */
    StorageLocation: string;
}