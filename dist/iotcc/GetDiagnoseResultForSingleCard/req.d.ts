export interface GetDiagnoseResultForSingleCardRequest {
    /**
     * 网络诊断任务ID。
     * @example `diagnoseTask-bp2qhwdp2n9x6zkvq****`
     */
    "DiagnoseTaskId": string;
    /**
     * 网络诊断的云连接器实例所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
