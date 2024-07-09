export interface GetJobSanityCheckResultRequest {
    /**
     * 任务ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlcl5qxoxxxxx5iq`
     */
    "JobId": string;
    /**
     * 任务第几次算力健康检测。
     * @example `1`
     */
    "SanityCheckNumber": number;
    /**
     * 算力健康检测的检测阶段：
     * - CheckInit：检测环境准备。
     * - DeviceCheck：单卡算力检测。
     * - SingleNodeCommCheck：单节点内部通信检测。
     * - TwoNodeCommCheck：两节点间通信检测。
     * - AllNodeCommCheck：所有节点通信检测。
     * @example `DeviceCheck`
     */
    "SanityCheckPhase"?: string;
    /**
     * 任务分享令牌中的Token信息。如何获取，请参见[GetToken](~~2557812~~)。
     * @example `eyJhbG******zI1NiIsInR5cCI6IkpXVCJ9.eyJle****jE3MDk1Mzk0NDIsImlhdCI6MTcwODkzNDY0MiwidXNlcl9pZCI6IjE3NTgwNTQxNjI0Mzg2NTUiLCJ0YXJnZXRfaWQiOiJkbGM1OGh1a2xyYzZwdGMyIiwidGFyZ2V0X3R5cGUiOiJqb2IifQ.GNL7jo6****mgKKv0QeGIYgvBufSU-PH_EQttX****`
     */
    "Token"?: string;
}
