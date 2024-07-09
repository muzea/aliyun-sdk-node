export interface ResetDisksRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否预检本次请求。取值范围：
     * - true：发送检查请求，不会直接回滚云盘。检查项包括是否填写了必选参数、请求格式和资源状态限制。如果检查不通过，则返回对应错误信息。如果检查通过，则返回错误码`DryRunOperation`。
     * - false：发送正常请求，通过检查后直接发起云盘回滚操作。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云盘列表。
     */
    "Disk": {
        /**
         * 实例快照中，指定云盘对应的快照ID。N的取值范围为1~10。
         * @example `s-j6cdofbycydvg7ey****`
         */
        SnapshotId: string;
        /**
         * 指定待回滚的云盘ID。N的取值范围为1~10。
         * @example `d-j6cf7l0ewidb78lq****`
         */
        DiskId: string;
    }[];
}
