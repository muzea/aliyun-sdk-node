export interface RemoveImageResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 执行命令并获取结果的过程是否成功。取值范围：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
