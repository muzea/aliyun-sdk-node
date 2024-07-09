export interface DescribeMachineCanRebootRequest {
    /**
     * 需要重启修复的漏洞类型。取值：
     * - cve linux系统漏洞
     * - sys windows系统漏洞
     * @example `sys`
     */
    "Type"?: string;
    /**
     * 要重启的机器uuid。
     * @example `5b268326-273e-44fc-a0e3-9482435c****`
     */
    "Uuid"?: string;
}
