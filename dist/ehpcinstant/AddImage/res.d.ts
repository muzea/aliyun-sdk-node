export interface AddImageResponse {
    /**
     * 请求 ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368
    `
     */
    RequestId: string;
    /**
     * 执行命令并获取结果的过程是否成功。取值范围：
     * - true：成功。
     * - false：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 镜像 ID。
     * @example `m-bp1akkkr1rkxtb******
    `
     */
    ImageId: string;
}
