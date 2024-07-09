export interface GetStackDriftDetectionStatusRequest {
    /**
     * 偏差检测关联的资源栈所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 偏差检测ID。
     * 您可以调用[DetectStackDrift](~~610877~~)获取偏差检测ID。
     * @example `a7044f0d-6f2e-4128-a307-4524ef88****`
     */
    "DriftDetectionId": string;
}
