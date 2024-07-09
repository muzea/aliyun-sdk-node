export interface UpdateUserAntiDDosInfoRequest {
    /**
     * 高防实例ID。
     * @example `cbcac8d2-4f75-4d6d-9f2e-c3447f73****`
     */
    "x-oss-defender-instance": string;
    /**
     * 更改高防OSS实例状态。取值为：HaltDefending，表示解除防护。
     * @example `HaltDefending`
     */
    "x-oss-defender-status": string;
}
