export interface StopInvocationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命令进程执行ID。
     * @example `t-7d2a745b412b4601b2d47f6a768d****`
     */
    "InvokeId": string;
    /**
     * 要停止执行命令的云桌面ID。N的取值范围：1~50。
     * @example `ecd-7w78ozhjcwa3u****`
     */
    "DesktopId"?: string[];
}
